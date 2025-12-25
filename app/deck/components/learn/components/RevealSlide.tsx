import { useState, useEffect, useCallback, useRef, forwardRef, useImperativeHandle } from 'react';
import { Slide } from '../types';

interface RevealSlideProps {
    slide: Slide;
    onNext: () => void;
}

const RevealSlide = forwardRef<any, RevealSlideProps>(({ slide, onNext }, ref) => {
    const [revealed, setRevealed] = useState(false);

    // Expose handleNext to parent
    useImperativeHandle(ref, () => ({
        handleNext: () => {
            if (!revealed) {
                setRevealed(true);
                return true; // Consumed
            }
            return false; // Not consumed, proceed to next slide
        },
        handlePrev: () => {
            // User requested: "Chỉ có khi back là ko cần thôi" -> Don't intercept Back
            return false;
        }
    }));

    useEffect(() => {
        const timer = setTimeout(() => {
            setRevealed(true);
        }, 2000); // Start transition after 2 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleRequestNext = (e: React.MouseEvent | React.TouchEvent) => {
        if (!revealed) {
            e.stopPropagation();
            setRevealed(true);
        }
        // If revealed, let it bubble to SlideViewer's onClick (if any) or do nothing
    };

    return (
        <div
            className="w-full h-full bg-black relative overflow-hidden cursor-pointer"
            onClick={handleRequestNext as any}
        >
            {/* Background Image - Fades In */}
            <div
                className={`absolute inset-0 bg-contain bg-no-repeat bg-center transition-opacity duration-1000 ease-in-out ${revealed ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${slide.imageUrl})` }}
            />

            {/* Intro Text - Fades Out */}
            <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${revealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <div
                    className="text-6xl md:text-8xl font-black text-white tracking-widest uppercase text-center drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                    dangerouslySetInnerHTML={{ __html: slide.title || 'INTRODUCING' }}
                />
            </div>
        </div>
    );
});

RevealSlide.displayName = 'RevealSlide';

export default RevealSlide;
