import { notFound } from 'next/navigation';
import { getDeckMetaClient } from '../data/decks/server';
import DeckPageClient from './DeckPageClient';

interface DeckPageProps {
    params: Promise<{ deckId: string }>;
}

import { cookies } from 'next/headers';

export default async function DeckPage({ params }: DeckPageProps) {
    const { deckId } = await params;
    const deck = getDeckMetaClient(deckId);

    if (!deck) {
        notFound();
    }

    const cookieStore = await cookies();
    const authCookie = cookieStore.get(`deck_auth_${deckId}`);
    const sharedAuth = cookieStore.get('digesty_auth');
    const isVerified = authCookie?.value === 'verified' || sharedAuth?.value === 'verified';

    return <DeckPageClient deck={deck} initialVerified={isVerified} />;
}
