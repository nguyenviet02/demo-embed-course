import { Slide } from '../types';
import { useState } from 'react';

interface InteractiveSlideProps {
    slide: Slide;
    onNext: () => void;
    overlayMode?: boolean; // New prop
}

export default function InteractiveSlide({ slide, onNext, overlayMode = false }: InteractiveSlideProps) {
    const [activePoint, setActivePoint] = useState<string | null>(null);
    const points = slide.interactiveData?.points || [];

    return (
        <div className={`w-full h-full flex flex-col justify-center items-center p-8 ${overlayMode ? 'bg-transparent pointer-events-none' : 'bg-gray-900'}`}>
            {!overlayMode && (
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">{slide.title}</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: slide.content || '' }} />
                </div>
            )}

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl ${overlayMode ? 'pointer-events-auto' : ''}`}>
                {points.map((point: any) => (
                    <div
                        key={point.id}
                        className={`relative group cursor-pointer transition-all duration-300 ${activePoint === point.id ? 'scale-105 z-20' : 'hover:scale-105'}`}
                        onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
                    >
                        <div className={`p-6 rounded-xl border backdrop-blur-md transition-colors h-full flex flex-col items-center text-center
                ${activePoint === point.id
                                ? 'bg-blue-600/90 border-blue-400 shadow-xl shadow-blue-500/20'
                                : 'bg-white/10 border-white/10 hover:bg-white/20'
                            }
            `}>
                            <div className="text-4xl mb-4">{point.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{point.label}</h3>

                            {/* Content Reveal */}
                            <div className={`overflow-hidden transition-all duration-500 ${activePoint === point.id ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                <p className="text-sm text-white/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: point.content }} />
                            </div>

                            {/* Hint for interaction */}
                            {activePoint !== point.id && (
                                <div className="mt-auto pt-4 text-xs text-white/40 uppercase tracking-widest">Click to reveal</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {!overlayMode && (
                <button onClick={onNext} className="mt-16 px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors">
                    Continue
                </button>
            )}
        </div>
    );
}
