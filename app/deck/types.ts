// Reuse Block types from learn

import { Block } from "./components/learn/types";

export type SlideLayout =
  | "default"
  | "cover"
  | "section-header"
  | "split"
  | "centered"
  | "three-column"
  | "reveal"
  | "carousel-3d";
export type SlideTheme = "dark" | "light" | "brand";

export interface DeckSlide {
  id: string;
  layout?: SlideLayout;
  theme?: SlideTheme;
  subtitle?: string;
  title?: string;
  content?: string;
  imageUrl?: string;
  showBadge?: boolean;
  blocks?: Block[];
  columns?: {
    title: string;
    content: string;
    icon?: string;
    entity?: string; // Added to match usage
    color?: string; // e.g., 'text-red-400'
    badge?: string; // e.g., 'Highlight'
  }[];
  carouselItems?: {
    // For carousel-3d layout
    title: string;
    desc?: string;
    icon?: string;
    imageUrl?: string;
    color?: string;
  }[];
  nextItems?: string[]; // Selectors for elements that trigger 'next' on click
  customTransition?: {
    type: "ripple" | "zoom-in";
    originSelector?: string;
  };
  narration?: string; // Text for TTS narration
}

export interface DeckContent {
  language: string; // 'en', 'vi', etc.
  slides: DeckSlide[];
}

// Narration configuration per language
export interface NarrationConfig {
  languages: string[]; // Languages that have narration audio: ['vi', 'en']
  audioBasePath: string; // e.g., '/audio/decks/digesty-intro'
}

// Server-only meta (includes passwordHash)
export interface DeckMeta {
  id: string;
  title: string;
  description?: string;
  logoUrl?: string; // Optional logo path
  languages: string[]; // Available languages: ['en'] or ['en', 'vi']
  passwordHash?: string; // bcrypt hash, if protected
  isPublic?: boolean; // If true, show in listing
  narration?: NarrationConfig; // Optional narration support
}

// Client-safe metadata (no passwordHash)
export interface DeckMetaClient {
  id: string;
  title: string;
  description?: string;
  logoUrl?: string;
  languages: string[];
  hasPassword: boolean;
  isPublic?: boolean;
  narration?: NarrationConfig; // Narration config (safe for client)
}

export interface Deck extends DeckMeta {
  content: DeckContent;
}
