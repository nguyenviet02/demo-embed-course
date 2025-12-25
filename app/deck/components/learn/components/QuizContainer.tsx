import { useState } from 'react';
import { QuizData } from '../types';
import FlashcardGame from './FlashcardGame';
import MatchingGame from './MatchingGame';
import SortingGame from './SortingGame';

interface QuizContainerProps {
    quiz: QuizData;
    onComplete: () => void;
}

export default function QuizContainer({ quiz, onComplete }: QuizContainerProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    if (quiz.type === 'flashcard') {
        return <FlashcardGame data={quiz} onComplete={onComplete} />;
    }

    if (quiz.type === 'matching') {
        return <MatchingGame data={quiz} onComplete={onComplete} />;
    }

    if (quiz.type === 'sorting') {
        return <SortingGame data={quiz} onComplete={onComplete} />;
    }

    const handleSubmit = () => {
        if (!selectedOption) return;

        const correctOption = quiz.options?.find(opt => opt.isCorrect);
        const correct = correctOption?.id === selectedOption;

        setIsSubmitted(true);
        setIsCorrect(correct);
    };

    const handleNext = () => {
        // Reset state if needed or just call onComplete
        onComplete();
    };

    if (quiz.type !== 'multiple-choice') {
        return <div className="p-10 text-center">Unsupported quiz type: {quiz.type}</div>;
    }

    return (
        <div className="max-w-3xl mx-auto h-full flex flex-col justify-center animate-in zoom-in-95 duration-300">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="p-8 md:p-12">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                        Quiz Challenge
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        {quiz.question}
                    </h3>

                    <div className="space-y-4">
                        {quiz.options?.map((option) => {
                            const isSelected = selectedOption === option.id;
                            let optionClass = "w-full p-5 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between group ";

                            if (isSubmitted) {
                                if (option.isCorrect) {
                                    optionClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300";
                                } else if (isSelected && !option.isCorrect) {
                                    optionClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300";
                                } else {
                                    optionClass += "border-gray-200 dark:border-gray-700 opacity-50";
                                }
                            } else {
                                if (isSelected) {
                                    optionClass += "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md ring-1 ring-blue-500";
                                } else {
                                    optionClass += "border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:bg-gray-50 dark:hover:bg-gray-700/50";
                                }
                            }

                            return (
                                <button
                                    key={option.id}
                                    onClick={() => !isSubmitted && setSelectedOption(option.id)}
                                    disabled={isSubmitted}
                                    className={optionClass}
                                >
                                    <span className="font-medium text-lg">{option.text}</span>
                                    {isSubmitted && option.isCorrect && (
                                        <span className="text-green-600 text-xl">✓</span>
                                    )}
                                    {isSubmitted && isSelected && !option.isCorrect && (
                                        <span className="text-red-600 text-xl">✕</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Feedback Area */}
                    {isSubmitted && (
                        <div className={`mt-8 p-6 rounded-xl ${isCorrect ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'} animate-in slide-in-from-bottom-4`}>
                            <div className="flex items-start gap-4">
                                <div className={`text-3xl ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                    {isCorrect ? '🎉' : '🤔'}
                                </div>
                                <div>
                                    <h4 className={`text-lg font-bold ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                                        {isCorrect ? 'Correct!' : 'Not quite right'}
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                                        {isCorrect ? 'Great job! You understood the concept.' : 'Review the previous slides and try again.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-8 flex justify-end">
                        {!isSubmitted ? (
                            <button
                                onClick={handleSubmit}
                                disabled={!selectedOption}
                                className="px-8 py-3 bg-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all"
                            >
                                Submit Answer
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
                            >
                                Continue <span>→</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
