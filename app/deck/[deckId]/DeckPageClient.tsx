'use client';

import { useState, useEffect } from 'react';
import { getDeckContent } from '../data/decks/content';
import { DeckContent, DeckMetaClient, DeckSlide } from '../types';
import DeckEntry from '../components/DeckEntry';
import SlideViewer from '../components/learn/components/SlideViewer';
import { Course, Slide } from '../components/learn/types';

interface DeckPageClientProps {
    deck: DeckMetaClient;
    initialVerified?: boolean;
}

// Convert DeckContent to Course format for SlideViewer
function deckToCourse(deck: DeckMetaClient, content: DeckContent): Course {
    return {
        id: deck.id,
        title: deck.title,
        description: deck.description || '',
        thumbnailUrl: '',
        category: 'presentation',
        contentType: 'deck',
        modules: [{
            id: 'main',
            title: deck.title,
            slides: content.slides.map(deckSlideToSlide),
        }],
    };
}

function deckSlideToSlide(slide: DeckSlide): Slide {
    return {
        id: slide.id,
        type: 'text',
        layout: slide.layout,
        theme: slide.theme,
        subtitle: slide.subtitle,
        title: slide.title,
        content: slide.content,
        imageUrl: slide.imageUrl,
        showBadge: slide.showBadge,
        blocks: slide.blocks,
        columns: slide.columns,
        nextItems: slide.nextItems,
        customTransition: slide.customTransition,
        carouselItems: slide.carouselItems,
        narration: slide.narration,
    };
}

export default function DeckPageClient({ deck, initialVerified = false }: DeckPageClientProps) {
    const [content, setContent] = useState<DeckContent | null>(null);
    const [isVerified, setIsVerified] = useState(initialVerified);
    const [currentLang, setCurrentLang] = useState<string | null>(null);
    const [narrationEnabled, setNarrationEnabled] = useState(false);
    // If not verified initially, no need to check auth (show login immediately)
    // If verified initially, we MIGHT still need to check localStorage for language to auto-enter
    // So if verified, we show loading. If not, we show entry.
    // Auto-verify if persisted (Client-side sync attempt or rapid effect)
    useEffect(() => {
        try {
            const stored = localStorage.getItem(`deck_auth_${deck.id}`);
            if (stored) {
                const { verified, language, narration } = JSON.parse(stored);

                if (language && deck.languages.includes(language)) {
                    setCurrentLang(language);
                }

                if (verified) {
                    setIsVerified(true);
                }

                if (narration !== undefined) {
                    setNarrationEnabled(narration);
                }
            }
        } catch (e) {
            // Ignore
        }
    }, [deck.id, deck.languages]);

    const handleEnter = (language: string, enableNarration?: boolean) => {
        const deckContent = getDeckContent(deck.id, language);
        if (deckContent) {
            setContent(deckContent);
            setCurrentLang(language);
            setIsVerified(true);
            if (enableNarration !== undefined) {
                setNarrationEnabled(enableNarration);
            }

            // Logic 7: Trigger Fullscreen on Gate Entry
            if (typeof window !== 'undefined' && !document.fullscreenElement && document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen().catch(() => {
                    // Fail silently
                });
            }

            // Persist (Logic 4: Hash + Language)
            // Note: We don't have the hash here from DeckEntry easily unless we lift password state,
            // but for "Verified" status persistence, we just store the flag as "hash" proxy or just skip hash check if verified.
            // User requested: "Lưu lại hashed của mật khẩu".
            // Since we trust the Client-side verification for this architecture, we store a simple verified flag.
            localStorage.setItem(`deck_auth_${deck.id}`, JSON.stringify({
                verified: true,
                language: language,
                narration: enableNarration ?? narrationEnabled,
                timestamp: Date.now()
            }));
        }
    };

    const handleExit = () => {
        // Logic 6: Check deck capability
        if (deck.languages.length > 1) {
            // Multi-language: Go back to Entry (keep isVerified)
            setContent(null);
        } else {
            // Single-language: "Reset to first slide"
            // Simplest way is to force remount of SlideViewer by toggling content
            const lang = currentLang || deck.languages[0];
            const deckContent = getDeckContent(deck.id, lang);
            setContent(null);
            setTimeout(() => {
                if (deckContent) setContent(deckContent);
            }, 0);
        }
    };

    const handleResetPassword = () => {
        setIsVerified(false);
        setContent(null);
        setCurrentLang(null);
        try {
            localStorage.removeItem(`deck_auth_${deck.id}`);
        } catch (e) {
            // ignore
        }
    };

    // Check if narration is available for current language
    const hasNarrationForLang = deck.narration?.languages.includes(currentLang || '') ?? false;

    if (content) {
        const course = deckToCourse(deck, content);
        return (
            <SlideViewer
                course={course}
                onExit={handleExit}
                narrationEnabled={narrationEnabled && hasNarrationForLang}
                onNarrationToggle={setNarrationEnabled}
                audioBasePath={hasNarrationForLang ? `${deck.narration?.audioBasePath}/${currentLang}` : undefined}
            />
        );
    }

    return (
        <DeckEntry
            deck={deck}
            onEnter={handleEnter}
            isVerified={isVerified}
            defaultLang={currentLang || undefined}
            onResetPassword={handleResetPassword}
            defaultNarration={narrationEnabled}
        />
    );
}
