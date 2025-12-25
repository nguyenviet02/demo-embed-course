// Server-only - DO NOT import from client components
import { DeckMeta } from '../../../types';

const SHARED_PASSWORD_HASH = process.env.PASSWORD_HASH;

export const digestyIntroMeta: DeckMeta = {
    id: 'digesty-intro',
    title: 'Digesty Introduction',
    description: 'Experiencing AI at Digesty Street',
    logoUrl: '/assets/digesty-logo-white-trimmed.webp', // Added logo
    languages: ['en', 'vi'],
    passwordHash: SHARED_PASSWORD_HASH,
    isPublic: false,
    narration: {
        languages: ['vi'],  // Only Vietnamese has narration for now
        audioBasePath: '/audio/decks/digesty-intro',
    },
};
