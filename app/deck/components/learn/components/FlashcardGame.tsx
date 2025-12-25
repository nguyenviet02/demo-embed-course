import { useState } from 'react';
import { QuizData } from '../types';

interface FlashcardGameProps {
    data: QuizData;
    onComplete: () => void;
}

export default function FlashcardGame({ data, onComplete }: FlashcardGameProps) {
    // Assuming data.items contains the flashcards
    const cards = data.items || [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const currentCard = cards[currentIndex];

    const handleNext = () => {
        setIsFlipped(false);
        if (currentIndex < cards.length - 1) {
            setTimeout(() => setCurrentIndex(prev => prev + 1), 300);
        } else {
            onComplete();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full min-h-[50vh] w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">{data.question}</h2>

            <div
                className="relative w-full aspect-[3/2] cursor-pointer perspective-1000 group"
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className={`w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center p-8">
                        <span className="text-sm text-gray-400 uppercase tracking-widest mb-4">Term</span>
                        <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-white">{currentCard?.text}</h3>
                        <p className="mt-8 text-sm text-gray-400 animate-pulse">Click to flip</p>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-indigo-600 text-white rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8">
                        <span className="text-sm text-indigo-200 uppercase tracking-widest mb-4">Definition</span>
                        <p className="text-xl text-center font-medium leading-relaxed">
                            {/* Assuming categoryId stores the definition for now, or we need a new field */}
                            {currentCard?.categoryId || "Definition placeholder"}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
                <span className="text-gray-500 text-sm">{currentIndex + 1} / {cards.length}</span>
                <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold hover:scale-105 transition-transform"
                >
                    {currentIndex < cards.length - 1 ? 'Next Card' : 'Finish'}
                </button>
            </div>
        </div>
    );
}
