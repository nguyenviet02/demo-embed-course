import { useState } from 'react';
import { QuizData } from '../types';

interface SortingGameProps {
    data: QuizData;
    onComplete: () => void;
}

export default function SortingGame({ data, onComplete }: SortingGameProps) {
    const categories = data.categories || [];
    const items = data.items || [];

    const [unassignedItems, setUnassignedItems] = useState(items);
    const [assignedItems, setAssignedItems] = useState<Record<string, typeof items>>({});
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleDrop = (itemId: string, categoryId: string) => {
        const item = unassignedItems.find(i => i.id === itemId);
        if (!item) return;

        // Remove from unassigned
        setUnassignedItems(prev => prev.filter(i => i.id !== itemId));

        // Add to category
        setAssignedItems(prev => ({
            ...prev,
            [categoryId]: [...(prev[categoryId] || []), item]
        }));
    };

    const checkAnswers = () => {
        let allCorrect = true;

        // Check if all items are assigned
        if (unassignedItems.length > 0) {
            alert("Please categorize all items first.");
            return;
        }

        // Check correctness
        Object.keys(assignedItems).forEach(catId => {
            assignedItems[catId].forEach(item => {
                if (item.categoryId !== catId) {
                    allCorrect = false;
                }
            });
        });

        setIsCorrect(allCorrect);
        if (allCorrect) {
            setTimeout(onComplete, 2000);
        }
    };

    // Simple drag simulation with click for MVP
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <div className="max-w-4xl mx-auto h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">{data.question}</h2>

            {/* Unassigned Items (Source) */}
            <div className="flex flex-wrap gap-4 justify-center min-h-[100px] p-4 bg-gray-100 dark:bg-gray-800 rounded-xl mb-8">
                {unassignedItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => setSelectedItem(item.id)}
                        className={`px-4 py-2 rounded-lg shadow-sm border-2 transition-all ${selectedItem === item.id
                                ? 'border-blue-500 bg-blue-50 text-blue-700 scale-105'
                                : 'border-white bg-white text-gray-800 hover:border-blue-200'
                            }`}
                    >
                        {item.text}
                    </button>
                ))}
                {unassignedItems.length === 0 && (
                    <div className="text-gray-400 italic">All items placed!</div>
                )}
            </div>

            {/* Categories (Targets) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map(category => (
                    <div
                        key={category.id}
                        onClick={() => selectedItem && handleDrop(selectedItem, category.id)}
                        className={`border-2 border-dashed rounded-xl p-6 min-h-[200px] transition-colors ${selectedItem
                                ? 'border-blue-300 bg-blue-50/50 cursor-pointer hover:bg-blue-100/50'
                                : 'border-gray-300 dark:border-gray-700'
                            }`}
                    >
                        <h3 className="font-bold text-lg mb-4 text-center text-gray-700 dark:text-gray-300">{category.name}</h3>
                        <div className="flex flex-col gap-2">
                            {assignedItems[category.id]?.map(item => (
                                <div
                                    key={item.id}
                                    className={`p-3 rounded-lg bg-white dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 ${isCorrect === false && item.categoryId !== category.id ? 'border-red-500 text-red-600' : ''
                                        } ${isCorrect === true ? 'border-green-500 text-green-600' : ''
                                        }`}
                                >
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex justify-center">
                {isCorrect === null && unassignedItems.length === 0 && (
                    <button
                        onClick={checkAnswers}
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all"
                    >
                        Check Answers
                    </button>
                )}
                {isCorrect === true && (
                    <div className="text-green-600 font-bold text-xl animate-bounce">
                        Correct! Well done! 🎉
                    </div>
                )}
                {isCorrect === false && (
                    <div className="text-red-600 font-bold">
                        Some items are in the wrong category. Try again (Resetting...)
                        {/* In a real app, we'd allow moving them back. For MVP, maybe just reset or show error */}
                    </div>
                )}
            </div>
        </div>
    );
}
