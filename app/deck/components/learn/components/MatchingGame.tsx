import { useState, useEffect, useMemo } from 'react';
import { QuizData } from '../types';

interface MatchingGameProps {
    data: QuizData;
    onComplete: () => void;
}

export default function MatchingGame({ data, onComplete }: MatchingGameProps) {
    const pairs = useMemo(() => data.pairs || [], [data.pairs]);

    // Create a shuffled list of items (left and right sides mixed or separated)
    // For simplicity: Left column and Right column
    const [leftItems, setLeftItems] = useState<{ id: string, text: string }[]>([]);
    const [rightItems, setRightItems] = useState<{ id: string, text: string }[]>([]);

    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
    const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());

    useEffect(() => {
        setLeftItems(pairs.map(p => ({ id: p.id, text: p.left })));
        // Shuffle right items
        setRightItems(pairs.map(p => ({ id: p.id, text: p.right })).sort(() => Math.random() - 0.5));
    }, [pairs]);

    const handleLeftClick = (id: string) => {
        if (matchedIds.has(id)) return;
        setSelectedLeft(id);
    };

    const handleRightClick = (id: string) => {
        if (matchedIds.has(id)) return;

        if (selectedLeft === id) {
            // Match found
            const newMatched = new Set(matchedIds);
            newMatched.add(id);
            setMatchedIds(newMatched);
            setSelectedLeft(null);

            if (newMatched.size === pairs.length) {
                setTimeout(onComplete, 1500);
            }
        } else {
            // Wrong match
            // Visual feedback could be added here
            setSelectedLeft(null);
        }
    };

    return (
        <div className="max-w-4xl mx-auto h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">{data.question}</h2>

            <div className="flex gap-12 justify-center">
                {/* Left Column */}
                <div className="flex flex-col gap-4 w-1/3">
                    {leftItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => handleLeftClick(item.id)}
                            disabled={matchedIds.has(item.id)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${matchedIds.has(item.id)
                                    ? 'border-green-500 bg-green-50 text-green-700 opacity-50'
                                    : selectedLeft === item.id
                                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg scale-105'
                                        : 'border-gray-200 bg-white hover:border-blue-300'
                                }`}
                        >
                            {item.text}
                        </button>
                    ))}
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4 w-1/3">
                    {rightItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => handleRightClick(item.id)}
                            disabled={matchedIds.has(item.id)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${matchedIds.has(item.id)
                                    ? 'border-green-500 bg-green-50 text-green-700 opacity-50'
                                    : 'border-gray-200 bg-white hover:border-blue-300'
                                }`}
                        >
                            {item.text}
                        </button>
                    ))}
                </div>
            </div>

            {matchedIds.size === pairs.length && (
                <div className="mt-8 text-center text-green-600 font-bold text-xl animate-bounce">
                    All Matched! 🎉
                </div>
            )}
        </div>
    );
}
