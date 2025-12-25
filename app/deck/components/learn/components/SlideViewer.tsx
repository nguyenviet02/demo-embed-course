'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Course, Slide } from '../types';
import SlideRenderer from './SlideRenderer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SlideViewerProps {
    course: Course;
    onExit?: () => void;  // Custom exit handler, defaults to /learn
    narrationEnabled?: boolean;  // Whether audio narration is enabled
    onNarrationToggle?: (enabled: boolean) => void;  // Callback when narration is toggled
    audioBasePath?: string;  // Base path for audio files, e.g., '/audio/decks/digesty-intro/vi'
}

export default function SlideViewer({ course, onExit, narrationEnabled = false, onNarrationToggle, audioBasePath }: SlideViewerProps) {
    const router = useRouter();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);

    const handleExit = useCallback(() => {
        if (onExit) {
            onExit();
        } else {
            router.push('/learn');
        }
    }, [onExit, router]);

    const allSlides = useMemo(() => {
        const slides: { slide: Slide; moduleTitle: string; moduleId: string }[] = [];
        course.modules.forEach(module => {
            module.slides.forEach(slide => {
                slides.push({ slide, moduleTitle: module.title, moduleId: module.id });
            });
        });
        return slides;
    }, [course]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isRippling, setIsRippling] = useState(false);
    const [rippleOrigin, setRippleOrigin] = useState({ x: 0, y: 0 });
    const hideTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const touchStartRef = useRef<{ x: number; y: number } | null>(null);

    const activeSlideRef = useRef<any>(null);

    const [isFullscreen, setIsFullscreen] = useState(false);

    // Track fullscreen state changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    // Audio narration playback
    useEffect(() => {
        if (!audioBasePath || !narrationEnabled) {
            // Stop any playing audio
            if (audioRef.current) {
                audioRef.current.pause();
                setIsAudioPlaying(false);
            }
            return;
        }

        const currentSlide = allSlides[currentIndex]?.slide;
        if (!currentSlide?.narration) {
            setIsAudioPlaying(false);
            return;
        }

        // Construct audio URL: /audio/decks/digesty-intro/vi/cover.mp3
        const audioUrl = `${audioBasePath}/${currentSlide.id}.mp3`;

        // Create or reuse audio element
        if (!audioRef.current) {
            audioRef.current = new Audio();
            audioRef.current.onplay = () => setIsAudioPlaying(true);
            audioRef.current.onpause = () => setIsAudioPlaying(false);
            audioRef.current.onended = () => setIsAudioPlaying(false);
            audioRef.current.onerror = () => setIsAudioPlaying(false);
        }

        // Stop previous audio and play new one
        audioRef.current.pause();
        audioRef.current.src = audioUrl;
        audioRef.current.play().catch(() => {
            // Autoplay might be blocked, that's ok
            setIsAudioPlaying(false);
        });

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, [currentIndex, narrationEnabled, audioBasePath, allSlides]);

    // Toggle narration handler
    const handleNarrationToggle = useCallback(() => {
        const newState = !narrationEnabled;
        onNarrationToggle?.(newState);

        // If turning off, stop audio
        if (!newState && audioRef.current) {
            audioRef.current.pause();
            setIsAudioPlaying(false);
        }
    }, [narrationEnabled, onNarrationToggle]);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => { });
        } else {
            document.exitFullscreen().catch(() => { });
        }
    }, []);

    const currentItem = allSlides[currentIndex];
    const progress = ((currentIndex + 1) / allSlides.length) * 100;

    const handleNext = useCallback(() => {
        if (currentIndex < allSlides.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    }, [currentIndex, allSlides.length]);

    const handlePrev = useCallback(() => {
        // Attempt to handle previous action internally in the slide first
        if (activeSlideRef.current?.handlePrev?.()) {
            return;
        }

        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }, [currentIndex]);

    // Navigate with optional custom transition
    const navigateNext = useCallback((clickedElement?: HTMLElement) => {
        // Attempt to handle next action internally in the slide first
        if (activeSlideRef.current?.handleNext?.()) {
            return;
        }

        // Auto-fullscreen logic removed to prevent annoyance
        // if (currentItem?.slide?.layout === 'cover') { ... }

        const transition = currentItem?.slide?.customTransition;

        if (transition?.type === 'ripple') {
            // Determine ripple origin
            let originX: number;
            let originY: number;

            if (transition.originSelector) {
                // Use defined origin selector
                const originElement = document.querySelector(transition.originSelector);
                if (originElement) {
                    const circle = originElement.querySelector('.rounded-full') as HTMLElement;
                    const target = circle || originElement;
                    const rect = target.getBoundingClientRect();
                    originX = rect.left + rect.width / 2;
                    originY = rect.top + rect.height / 2;
                } else {
                    // Fallback to right side
                    originX = window.innerWidth - 100;
                    originY = window.innerHeight / 2;
                }
            } else if (clickedElement) {
                // Use clicked element position
                const rect = clickedElement.getBoundingClientRect();
                originX = rect.left + rect.width / 2;
                originY = rect.top + rect.height / 2;
            } else {
                // Default: right side
                originX = window.innerWidth - 100;
                originY = window.innerHeight / 2;
            }

            // Trigger ripple animation
            setRippleOrigin({ x: originX, y: originY });
            setIsRippling(true);

            setTimeout(() => {
                setIsRippling(false);
                handleNext();
            }, 600);
            setTimeout(() => {
                setIsRippling(false);
                handleNext();
            }, 600);
        } else if (transition?.type === 'zoom-in') {
            // Apply zoom-in animation class to the current slide container
            const container = document.getElementById('slide-content-container');
            if (container) {
                // Prevent scrollbars from appearing during zoom
                const parent = container.parentElement;
                if (parent) {
                    parent.style.overflow = 'hidden';
                }

                container.classList.add('animate-zoom-in-gate');

                // Wait for animation
                setTimeout(() => {
                    handleNext();
                    // Cleanup class after navigation
                    container.classList.remove('animate-zoom-in-gate');
                    // Restore scrolling
                    if (parent) {
                        parent.style.overflow = '';
                    }
                }, 800);
            } else {
                handleNext();
            }
        } else {
            // No custom transition, just navigate
            handleNext();
        }
    }, [currentItem, handleNext]);

    // Reset hide timer
    const resetHideTimer = useCallback(() => {
        if (isMobile) return; // Don't auto-hide on mobile

        setShowControls(true);
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
        }
        hideTimeoutRef.current = setTimeout(() => {
            setShowControls(false);
        }, 3000); // Hide after 3 seconds
    }, [isMobile]);

    // Detect mobile (based on minimum dimension)
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || window.innerHeight < 630);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Mouse movement handler (desktop)
    useEffect(() => {
        if (isMobile) return;

        const handleMouseMove = () => {
            resetHideTimer();
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
            }
        };
    }, [isMobile, resetHideTimer]);

    // Touch/Tap handler (mobile)
    const handleTap = useCallback((e: React.TouchEvent | React.MouseEvent) => {
        if (!isMobile) return;

        // Toggle controls visibility on tap
        setShowControls(prev => !prev);
    }, [isMobile]);

    // Swipe gesture handlers
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    }, []);

    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
        if (!touchStartRef.current) return;

        const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
        const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;

        // Only trigger if horizontal swipe is dominant
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                handlePrev(); // Swipe right = previous
            } else {
                handleNext(); // Swipe left = next
            }
        }

        touchStartRef.current = null;
    }, [handleNext, handlePrev]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                navigateNext(); // Use unified navigation (with transition if defined)
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [navigateNext, handlePrev, router]);

    // Next Items Click Handler (for slides with clickable navigation items)
    useEffect(() => {
        const nextItems = currentItem?.slide?.nextItems;
        if (!nextItems || nextItems.length === 0) return;

        const handleNextItemClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check if click is on any of the nextItems selectors
            for (const selector of nextItems) {
                const clickedElement = target.closest(selector);
                if (clickedElement) {
                    navigateNext(clickedElement as HTMLElement);
                    break;
                }
            }
        };

        document.addEventListener('click', handleNextItemClick);
        return () => document.removeEventListener('click', handleNextItemClick);
    }, [currentItem, navigateNext]);

    if (!currentItem) {
        return <div className="p-10 text-center">No content available.</div>;
    }

    // Show unsupported screen on mobile
    if (isMobile) {
        return (
            <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center z-50 p-8">
                <div className="max-w-md text-center">
                    <div className="mb-8 text-6xl">
                        📱 ➜ 💻
                    </div>
                    <h2 className="text-2xl font-bold mb-4">
                        Không hỗ trợ trên điện thoại
                    </h2>
                    <p className="text-lg text-white/70 mb-6 leading-relaxed">
                        Để có trải nghiệm tốt nhất, vui lòng xem khóa học này trên:
                    </p>
                    <ul className="text-left space-y-3 mb-8">
                        <li className="flex items-center gap-3">
                            <span className="text-blue-400 text-xl">💻</span>
                            <span>Laptop / Máy bàn</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-blue-400 text-xl">📱</span>
                            <span>iPad / Tablet (landscape)</span>
                        </li>
                    </ul>
                    <button
                        onClick={() => handleExit()}
                        className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-colors"
                    >
                        ← Quay lại danh sách khóa học
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            className="fixed inset-0 bg-black text-white overflow-hidden flex flex-col z-50"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={handleTap}
        >
            {/* Immersive Progress Bar (Thin line at top) */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 z-40">
                <div
                    className="h-full bg-blue-500 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Fraction indicator (top-left, show on hover - desktop only) */}
            <div className={`hidden md:block absolute top-6 left-6 z-50 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'
                }`}>
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-full text-xs font-mono text-white/60">
                    {currentIndex + 1} <span className="opacity-50 mx-0.5">/</span> {allSlides.length}
                </div>
            </div>

            {/* Control Buttons (Top-Right) */}
            <div className={`absolute top-6 right-6 z-50 flex gap-2 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

                {/* Audio Narration Toggle - only show if audioBasePath is provided */}
                {audioBasePath && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNarrationToggle();
                        }}
                        className={`flex items-center gap-2 px-3 py-2 backdrop-blur-md border rounded-full transition-all duration-300 group ${
                            narrationEnabled
                                ? 'bg-cyan-500/30 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/40'
                                : 'bg-black/30 border-white/10 text-white/50 hover:bg-white/20 hover:text-white'
                        }`}
                        aria-label={narrationEnabled ? "Tắt thuyết minh" : "Bật thuyết minh"}
                        title={narrationEnabled ? "Tắt thuyết minh" : "Bật thuyết minh"}
                    >
                        {narrationEnabled ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${isAudioPlaying ? 'animate-pulse' : ''}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.757 3.63 8.25 4.51 8.25H6.75Z" />
                            </svg>
                        )}
                        <span className="hidden md:block text-sm font-medium">
                            {narrationEnabled ? 'Đang bật' : 'Thuyết minh'}
                        </span>
                    </button>
                )}

                {/* Fullscreen Toggle */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleFullscreen();
                    }}
                    className="flex items-center gap-2 px-3 py-2 bg-black/30 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-white/50 hover:text-white transition-all duration-300 group"
                    aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                    title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                    {isFullscreen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-5 md:h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-5 md:h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                    )}
                    <span className="hidden md:block text-sm font-medium">
                        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                    </span>
                </button>

                {/* Restart/Exit Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleExit();
                    }}
                    className="flex items-center gap-2 px-3 py-2 bg-black/30 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-white/50 hover:text-white transition-all duration-300 group"
                    aria-label={course.contentType === 'deck' ? "Restart Deck" : "Exit Course"}
                    title={course.contentType === 'deck' ? "Restart Deck" : "Exit Course"}
                >
                    {course.contentType === 'deck' ? (
                        // Restart Icon
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-5 md:h-5 group-hover:rotate-180 transition-transform duration-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    ) : (
                        // Exit Icon (X)
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-5 md:h-5 group-hover:rotate-90 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                    <span className="hidden md:block text-sm font-medium">
                        {course.contentType === 'deck' ? 'Restart' : 'Exit'}
                    </span>
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative w-full h-full overflow-auto">
                <div id="slide-content-container" className="w-full h-full">
                    <SlideRenderer
                        key={currentItem.slide.id}
                        ref={activeSlideRef}
                        slide={currentItem.slide}
                        onNext={navigateNext}
                        contentType={course.contentType}
                    />
                </div>
            </div>

            {/* Navigation Chevrons */}
            {/* Left */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                }}
                disabled={currentIndex === 0}
                className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 text-white/20 hover:text-white/80 hover:bg-white/5 rounded-full transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none ${showControls ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Right */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    navigateNext();
                }}
                disabled={currentIndex === allSlides.length - 1}
                className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 text-white/20 hover:text-white/80 hover:bg-white/5 rounded-full transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none ${showControls ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Ripple Animation Overlay */}
            {isRippling && (
                <div
                    className="fixed inset-0 z-[100] pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${rippleOrigin.x}px ${rippleOrigin.y}px, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 50%)`,
                    }}
                >
                    <div
                        className="absolute bg-blue-500 rounded-full animate-ripple"
                        style={{
                            left: rippleOrigin.x,
                            top: rippleOrigin.y,
                            transform: 'translate(-50%, -50%)',
                            width: '112px',
                            height: '112px',
                            animation: 'ripple-expand 0.6s ease-out forwards',
                        }}
                    />
                </div>
            )}

            <style jsx>{`
                @keyframes ripple-expand {
                    0% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0.8;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(30);
                        opacity: 1;
                    }
                }
            `}</style>

            <style jsx global>{`
                @keyframes zoom-in-gate {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(5);
                        opacity: 0;
                    }
                }
                
                .animate-zoom-in-gate {
                    animation: zoom-in-gate 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards !important;
                    transform-origin: center center;
                }
            `}</style>

        </div>
    );
}
