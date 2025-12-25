// Client-safe - No process.env access
import { DeckContent } from '../../types';
import { digestyIntroEn, digestyIntroVi } from './digesty-intro/content';

// Get deck content by ID and language
export function getDeckContent(id: string, language: string): DeckContent | undefined {
    switch (id) {
        case 'digesty-intro':
            if (language === 'en') return digestyIntroEn;
            if (language === 'vi') return digestyIntroVi;
            break;
    }
    return undefined;
}
