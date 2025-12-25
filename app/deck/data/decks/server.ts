// Server-only - Contains password hashes
// DO NOT import from client components
import { DeckMeta, DeckMetaClient } from '../../types';
import { digestyIntroMeta } from './digesty-intro/meta';

// All deck metadata (server-side only)
const deckMetas: DeckMeta[] = [
    digestyIntroMeta,
];

// Get deck meta by ID (server-side only - includes passwordHash)
export function getDeckMeta(id: string): DeckMeta | undefined {
    return deckMetas.find(d => d.id === id);
}

// Get client-safe deck meta (no password hash)
export function getDeckMetaClient(id: string): DeckMetaClient | undefined {
    const meta = deckMetas.find(d => d.id === id);
    if (!meta) return undefined;

    return {
        id: meta.id,
        title: meta.title,
        description: meta.description,
        logoUrl: meta.logoUrl,
        languages: meta.languages,
        hasPassword: !!meta.passwordHash,
        isPublic: meta.isPublic,
        narration: meta.narration,
    };
}

// Get all public decks (for listing page)
export function getPublicDecks(): DeckMetaClient[] {
    return deckMetas
        .filter(d => d.isPublic)
        .map(d => ({
            id: d.id,
            title: d.title,
            description: d.description,
            logoUrl: d.logoUrl,
            languages: d.languages,
            hasPassword: !!d.passwordHash,
            isPublic: d.isPublic,
            narration: d.narration,
        }));
}
