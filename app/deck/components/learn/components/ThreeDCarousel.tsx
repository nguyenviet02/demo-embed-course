import { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
import { Slide } from '../types';

interface ThreeDCarouselProps {
    slide: Slide;
    onNext: () => void;
}

const ThreeDCarousel = forwardRef<any, ThreeDCarouselProps>(({ slide, onNext }, ref) => {
    const items = slide.carouselItems || [
        { title: 'Home', color: 'bg-cyan-500' },
        { title: 'Photo Studio', color: 'bg-indigo-500' },
        { title: 'Tarot', color: 'bg-purple-500' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Expose methods for parent (SlideViewer) to call
    useImperativeHandle(ref, () => ({
        handleNext: () => {
            if (activeIndex < items.length - 1) {
                setActiveIndex(prev => prev + 1);
                return true; // Consumed
            }
            return false; // Not consumed
        },
        handlePrev: () => {
            if (activeIndex > 0) {
                setActiveIndex(prev => prev - 1);
                return true; // Consumed
            }
            return false; // Not consumed
        }
    }));

    // Internal handlers for UI buttons
    const handleNextClick = useCallback(() => {
        if (activeIndex < items.length - 1) {
            setActiveIndex(prev => prev + 1);
        } else {
            onNext(); // Trigger global next if at end
        }
    }, [activeIndex, items.length, onNext]);

    const handlePrevClick = useCallback(() => {
        if (activeIndex > 0) {
            setActiveIndex(prev => prev - 1);
        }
    }, [activeIndex]);

    // Keyboard behavior: Capture logic
    // We want to stop propagation ONLY if we consume the event.
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
                if (activeIndex < items.length - 1) {
                    // We can move forward internally
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveIndex(prev => prev + 1);
                }
                // Else: Do nothing, let it bubble to SlideViewer to handle "Next Slide"
                // WARNING: SlideViewer uses window listener. If we don't stopProp, it gets it.
                // Request 1: "Next maps to Next Item first". done by hijacking logic in SlideViewer (via ref) OR by hijacking here.
                // If we hijack here, we don't need ref in SlideViewer?
                // NO, request 1 says "Khi user bấm vào mũi tên Next (ở mức slide)". That's a CLICK on SlideViewer button.
                // So SlideViewer MUST use the Ref.

                // For Keyboard:
                // If we let it bubble, SlideViewer handles it.
                // So if index < length-1, we consume. If at end, we let bubble.
            } else if (e.key === 'ArrowLeft') {
                if (activeIndex > 0) {
                    // We can move back internally
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveIndex(prev => prev - 1);
                }
                // Else: Do nothing, let it bubble (Request 2)
            }
        };

        window.addEventListener('keydown', handleKeyDown, { capture: true });
        return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
    }, [activeIndex, items.length]);

    return (
        <div className="w-full h-full bg-gray-900 flex flex-col items-center justify-center overflow-hidden perspective-1000 relative group/container">
            {/* Header */}
            <div className="absolute top-12 z-20 text-center pointer-events-none">
                <h2
                    className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    dangerouslySetInnerHTML={{ __html: slide.title || 'Product Showcase' }}
                />
            </div>

            {/* Carousel Container */}
            <div className="relative w-full max-w-5xl h-[60vh] flex items-center justify-center [perspective:1000px] [transform-style:preserve-3d] mb-16">
                {items.map((item: any, index: number) => {
                    // Calculate position relative to active
                    const offset = index - activeIndex;
                    const isActive = offset === 0;

                    // Transform logic
                    let transform = '';
                    let zIndex = 0;
                    let opacity = 0;
                    let pointerEvents = 'pointer-events-auto cursor-pointer';

                    if (isActive) {
                        transform = 'translateZ(0) scale(1)';
                        zIndex = 10;
                        opacity = 1;
                    } else if (offset > 0) {
                        // Next items (Right/Back)
                        transform = `translateX(${offset * 60}px) translateZ(-${offset * 200}px) rotateY(-${offset * 15}deg)`;
                        zIndex = 10 - offset;
                        opacity = offset <= 2 ? 0.6 : 0; // Fade out distant items
                    } else {
                        // Previous items (Left/Back) - hidden or stacked
                        transform = `translateX(${offset * 60}px) translateZ(${offset * 200}px) rotateY(${-offset * 15}deg)`;
                        zIndex = 0;
                        opacity = 0; // Hide passed items
                        pointerEvents = 'pointer-events-none';
                    }

                    return (
                        <div
                            key={index}
                            onClick={() => {
                                if (isActive) handleNextClick();
                                else if (offset > 0) setActiveIndex(index);
                                else if (offset < 0) setActiveIndex(index);
                            }}
                            className={`absolute w-[300px] md-[360px] aspect-[9/16] rounded-3xl shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] flex items-center justify-center border border-white/10 ${item.color || 'bg-gray-800'} ${pointerEvents} hover:brightness-110`}
                            style={{
                                transform,
                                zIndex,
                                opacity,
                            }}
                        >
                            {/* Content or Image */}
                            {item.imageUrl ? (
                                <div className="absolute inset-0 p-3 flex items-center justify-center pointer-events-none">
                                    {/* Phone Frame */}
                                    <div className="relative w-full h-full bg-black rounded-[2.5rem] border-[4px] border-gray-800 shadow-2xl ring-1 ring-white/20 flex items-center justify-center p-4">

                                        <div className="w-full h-full rounded-sm overflow-hidden bg-white/5">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center p-6">
                                    <div className="text-6xl mb-4">{item.icon || '📱'}</div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <div className="text-white/60 text-sm">{item.desc}</div>
                                </div>
                            )}

                            {/* Reflection/Gloss */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                        </div>
                    );
                })}
            </div>

            {/* Navigation Buttons (Bottom) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
                <button
                    onClick={handlePrevClick}
                    className={`p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed hidden' : 'opacity-100 shadow-lg'}`}
                    disabled={activeIndex === 0}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                    {items.map((_: any, idx: number) => (
                        <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-white w-4' : 'bg-white/20'}`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNextClick}
                    className={`p-3 rounded-full backdrop-blur-md border text-white transition-all duration-300 hover:scale-110 shadow-lg flex items-center gap-2 ${activeIndex === items.length - 1 ? 'bg-cyan-500/20 border-cyan-500/50 hover:bg-cyan-500/40 pr-5' : 'bg-white/10 border-white/20 hover:bg-white/20'}`}
                    title={activeIndex === items.length - 1 ? "Next Slide" : "Next Item"}
                >
                    {activeIndex === items.length - 1 && <span className="text-sm font-bold ml-1">TIẾP TỤC</span>}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        {activeIndex === items.length - 1 ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        )}
                    </svg>
                </button>
            </div>

        </div>
    );
});

ThreeDCarousel.displayName = 'ThreeDCarousel';

export default ThreeDCarousel;
