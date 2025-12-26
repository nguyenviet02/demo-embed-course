"use client";

import { useState, useEffect, useCallback } from "react";
import { DeckMetaClient } from "../types";
import { useSearchParams } from "next/navigation";
import useSignatureAuth from "@/hooks/useSignatureAuth";
interface DeckEntryProps {
  deck: DeckMetaClient;
  onEnter: (language: string, enableNarration?: boolean) => void;
  isVerified?: boolean; // New prop to skip password if already verified
  defaultLang?: string; // Saved language preference
  onResetPassword?: () => void;
  defaultNarration?: boolean; // Saved narration preference
}

const languageLabels: Record<string, { flag: string; name: string }> = {
  en: { flag: "🇺🇸", name: "English" },
  vi: { flag: "🇻🇳", name: "Tiếng Việt" },
};

export default function DeckEntry({
  deck,
  onEnter,
  isVerified = false,
  defaultLang,
  onResetPassword,
  defaultNarration,
}: DeckEntryProps) {
  const searchParams = useSearchParams();
  const signature = searchParams.get("signature");
  const [selectedLang, setSelectedLang] = useState(
    defaultLang || deck.languages[0]
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { metadata: userMetadata } = useSignatureAuth({
    signature: signature || "",
  });
  console.log("🚀 ~ DeckEntry ~ userMetadata:", userMetadata);

  // Narration state - default to true if available for selected language
  const hasNarrationForLang =
    deck.narration?.languages.includes(selectedLang) ?? false;
  const [narrationEnabled, setNarrationEnabled] = useState(
    defaultNarration ?? hasNarrationForLang
  );

  // Helper to sort languages moving user's preference to top
  const getSortedLanguages = useCallback(
    (topLang: string) => {
      if (!deck.languages.includes(topLang)) return deck.languages;
      return [...deck.languages].sort((a, b) =>
        a === topLang ? -1 : b === topLang ? 1 : 0
      );
    },
    [deck.languages]
  );

  const [sortedLanguages, setSortedLanguages] = useState(() => {
    // Initial sort attempt
    if (defaultLang) return getSortedLanguages(defaultLang);
    return deck.languages;
  });

  // Consolidated Language Priority Logic
  useEffect(() => {
    // Priority 1: explicitly passed defaultLang (from localStorage via Parent)
    if (defaultLang && deck.languages.includes(defaultLang)) {
      setSortedLanguages(getSortedLanguages(defaultLang));
      return;
    }

    // Priority 2: Browser Language (Client-side only)
    // Only run if NO defaultLang was provided to avoiding overriding verified user preference with browser preference
    // (Scenario: User prefers VI, but is on EN browser. If we verified user, defaultLang=VI. We respect that.)
    // But if defaultLang is missing (new user), we check browser.
    if (!defaultLang) {
      const browserLang =
        typeof navigator !== "undefined"
          ? navigator.language.split("-")[0]
          : "";
      if (browserLang && deck.languages.includes(browserLang)) {
        setSortedLanguages(getSortedLanguages(browserLang));
        return;
      }

      // Priority 3: Fallback (already handled by initial state, but ensure English is prioritized if generic fallback needed?)
      // If we are here, we just keep default order (usually defined in metadata).
      // But if we want specific logic for "deck.languages includes 'en' then 'en' first", we can add it.
      // For now, metadata order is respected as backup.
    }
  }, [defaultLang, deck.languages, getSortedLanguages]);

  // Enforce: Always select the top language whenever the sort order changes (e.g. init or auto-detect)
  // This satisfies: "Dù xếp đầu vì lý do gì thì luôn select nó"
  useEffect(() => {
    if (sortedLanguages.length > 0) {
      setSelectedLang(sortedLanguages[0]);
    }
  }, [sortedLanguages]);

  const needsLanguageSelect = deck.languages.length > 1;
  const needsPassword = deck.hasPassword && !isVerified;

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

      // Enter fullscreen immediately on user interaction (Start)
      if (
        !document.fullscreenElement &&
        document.documentElement.requestFullscreen
      ) {
        document.documentElement.requestFullscreen().catch(() => {});
      }

      setLoading(true);

      try {
        if (needsPassword) {
          // Verify password via API
          const res = await fetch("/api/deck/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ deckId: deck.id, password }),
          });

          if (!res.ok) {
            const data = await res.json();
            setError(data.error || "Invalid password");
            setPassword("");
            onResetPassword?.();
            setLoading(false);
            return;
          }
        }

        onEnter(selectedLang, narrationEnabled);
      } catch {
        setError("Something went wrong");
        setLoading(false);
      }
    },
    [
      needsPassword,
      deck.id,
      password,
      selectedLang,
      narrationEnabled,
      onEnter,
      onResetPassword,
    ]
  );

  // Global Enter key support (for when no inputs are focused/visible)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmit(e as any);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSubmit]);

  // Force user interaction for fullscreen (removed auto-enter)
  // if (!needsPassword && !needsLanguageSelect) { ... }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="text-center mb-8">
          {deck.logoUrl && (
            <div className="flex justify-center mb-6">
              <img
                src={deck.logoUrl}
                alt={deck.title}
                className="h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              />
            </div>
          )}
          <h1 className="text-3xl font-bold text-white mb-2">{deck.title}</h1>
          {deck.description && (
            <p className="text-gray-400">{deck.description}</p>
          )}
          {!!userMetadata && (
            <h1>
              Xin chào {userMetadata?.name} - {userMetadata?.user_email}.{" "}
            </h1>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Language Selection */}
          {needsLanguageSelect && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Select Language
              </label>
              <div className="grid grid-cols-2 gap-3">
                {sortedLanguages.map((lang) => {
                  const { flag, name } = languageLabels[lang] || {
                    flag: "🌐",
                    name: lang,
                  };
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setSelectedLang(lang)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedLang === lang
                          ? "border-cyan-500 bg-cyan-500/20 text-white"
                          : "border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500"
                      }`}
                    >
                      <span className="text-2xl block mb-1">{flag}</span>
                      <span className="text-sm">{name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Narration Toggle - only show if available for selected language */}
          {hasNarrationForLang && (
            <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl border border-gray-600">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔊</span>
                <div>
                  <div className="text-sm font-medium text-white">
                    Thuyết minh
                  </div>
                  <div className="text-xs text-gray-400">
                    Tự động phát âm thanh
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setNarrationEnabled(!narrationEnabled)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  narrationEnabled ? "bg-cyan-500" : "bg-gray-600"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    narrationEnabled ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          )}

          {/* Password Input */}
          {needsPassword && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                required
              />
            </div>
          )}

          {error && (
            <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/30 rounded-lg p-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
          >
            {loading ? "Verifying..." : "Start Slideshow"}
          </button>
        </form>
      </div>
    </div>
  );
}
