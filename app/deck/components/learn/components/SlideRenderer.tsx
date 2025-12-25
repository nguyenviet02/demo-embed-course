import { useState, useEffect, useRef, forwardRef } from 'react';
import { Slide } from '../types';
import QuizContainer from './QuizContainer';
import InteractiveSlide from './InteractiveSlide';
import EnhancedContent from './EnhancedContent';
import { renderBlocks } from './blocks';

import ThreeDCarousel from './ThreeDCarousel';
import RevealSlide from './RevealSlide';

interface SlideRendererProps {
    slide: Slide;
    onNext: () => void;
    contentType?: 'course' | 'deck';
}

const SlideRenderer = forwardRef<any, SlideRendererProps>(({ slide, onNext, contentType = 'course' }, ref) => {
    // Handle Special Types
    if (slide.type === 'quiz' && slide.quizData) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <QuizContainer quiz={slide.quizData} onComplete={onNext} />
            </div>
        );
    }

    // Handle Interactive Overlay on Image
    if (slide.type === 'image' && slide.interactiveData) {
        return (
            <div className="w-full h-full bg-black relative flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>

                {/* Interactive Overlay */}
                <div className="absolute inset-0 z-10">
                    <InteractiveSlide slide={slide} onNext={onNext} overlayMode={true} />
                </div>
            </div>
        );
    }

    if (slide.type === 'interactive') {
        return (
            <div className="w-full h-full bg-gray-900">
                <InteractiveSlide slide={slide} onNext={onNext} />
            </div>
        );
    }

    // Handle Layouts
    const layout = slide.layout || 'default';
    const badgeLabel = slide.subtitle || (contentType === 'deck' ? 'Deck' : 'Course');
    const showBadge = slide.showBadge ?? true;

    // Common styles
    const containerClass = "w-full h-full flex flex-col justify-center items-center p-8 md:p-16 animate-fade-in-slide";
    const themeClass = slide.theme === 'light' ? 'bg-white text-gray-900' :
        slide.theme === 'blue' ? 'bg-blue-900 text-white' :
            slide.theme === 'purple' ? 'bg-purple-900 text-white' :
                slide.theme === 'brand' ? 'bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white' :
                    'bg-gray-900 text-white'; // Default Dark

    // Special handling for Image type slides to be full screen
    if (slide.type === 'image' && slide.imageUrl) {
        return (
            <div className="w-full h-full bg-black flex items-center justify-center p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="max-w-full max-h-full object-contain shadow-2xl"
                />
            </div>
        );
    }

    switch (layout) {
        case 'carousel-3d': // New Layout
            return <ThreeDCarousel ref={ref} slide={slide} onNext={onNext} />;

        case 'cover':
            return (
                <div className={`${containerClass} ${themeClass} relative overflow-hidden`}>
                    {/* Background Image/Pattern */}
                    {slide.imageUrl && (
                        <div className="absolute inset-0 z-0 opacity-30">
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.imageUrl})` }} />
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />

                    <div className="relative z-10 text-center max-w-4xl">
                        {/* Hide badge for slide-opening-quote */}
                        {slide.id !== 'slide-opening-quote' && showBadge && (
                            <div className="mb-6 inline-block px-4 py-1 border border-white/30 rounded-full text-sm font-medium tracking-widest uppercase text-white/80">
                                {badgeLabel}
                            </div>
                        )}
                        <h1
                            className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
                            dangerouslySetInnerHTML={{ __html: slide.title || '' }}
                        />
                        {slide.content && (
                            <div className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: slide.content }} />
                        )}
                        {/* Block-based content for cover */}
                        {slide.blocks && slide.blocks.length > 0 && (
                            <div className="text-center">
                                {renderBlocks(slide.blocks)}
                            </div>
                        )}
                        {/* Hide button for slide-opening-quote */}
                        {slide.id !== 'slide-opening-quote' && !slide.blocks && (
                            <button onClick={onNext} className="mt-12 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-transform hover:scale-105">
                                Start Journey
                            </button>
                        )}
                    </div>
                </div>
            );

        case 'section-header':
            return (
                <div className={`${containerClass} ${themeClass} items-start text-left`}>
                    <div className="max-w-5xl">
                        <h2 className="text-6xl md:text-8xl font-black mb-6 opacity-20 absolute top-10 left-10 select-none">
                            {slide.subtitle || '#'}
                        </h2>
                        <h1
                            className="text-4xl md:text-6xl font-bold mb-6 relative z-10"
                            dangerouslySetInnerHTML={{ __html: slide.title || '' }}
                        />
                        <div className="w-24 h-2 bg-blue-500 mb-8" />
                        {slide.content && (
                            <div className="text-xl md:text-2xl opacity-90 max-w-3xl leading-relaxed" dangerouslySetInnerHTML={{ __html: slide.content }} />
                        )}
                    </div>
                </div>
            );

        case 'split':
            return (
                <div className={`w-full h-full flex flex-col md:flex-row ${themeClass}`}>
                    <div className="flex-1 p-12 md:p-20 flex flex-col justify-center">
                        <h2
                            className="text-3xl md:text-5xl font-bold mb-8"
                            dangerouslySetInnerHTML={{ __html: slide.title || '' }}
                        />
                        {slide.content && (
                            <div className="prose prose-lg prose-invert max-w-none text-lg leading-relaxed opacity-90" dangerouslySetInnerHTML={{ __html: slide.content }} />
                        )}
                    </div>
                    <div className="flex-1 bg-gray-800/50 flex items-center justify-center p-12 relative overflow-hidden">
                        {slide.contentHTML ? (
                            <div className="w-full max-w-lg" dangerouslySetInnerHTML={{ __html: slide.contentHTML }} />
                        ) : slide.imageUrl ? (
                            <div className="w-full h-full flex items-center justify-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={slide.imageUrl}
                                    alt={slide.title}
                                    className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                                />
                            </div>
                        ) : slide.chartData ? (
                            <div className="w-full max-w-md bg-white/10 p-6 rounded-xl border border-white/10">
                                <h3 className="text-center font-bold mb-4">Chart Visualization</h3>
                                <div className="flex items-end justify-center gap-4 h-48">
                                    <div className="w-12 bg-blue-500 h-[40%]" />
                                    <div className="w-12 bg-purple-500 h-[70%]" />
                                    <div className="w-12 bg-green-500 h-[50%]" />
                                    <div className="w-12 bg-orange-500 h-[90%]" />
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            );

        case 'quote':
            return (
                <div className={`${containerClass} ${themeClass}`}>
                    <div className="max-w-4xl text-center">
                        <div className="text-6xl text-blue-500 mb-6">&ldquo;</div>
                        <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight mb-8">
                            {slide.content?.replace(/<[^>]*>?/gm, '')}
                        </blockquote>
                        <div className="text-xl font-bold text-blue-400">— {slide.title}</div>
                    </div>
                </div>
            );

        case 'centered':
            return (
                <div className={`${containerClass} ${themeClass} text-center`}>
                    <div className="max-w-4xl">
                        {slide.title && (
                            <h2
                                className="text-3xl md:text-5xl font-bold mb-8"
                                dangerouslySetInnerHTML={{ __html: slide.title }}
                            />
                        )}
                        {slide.content && (
                            <div className="text-xl md:text-2xl opacity-90 leading-relaxed" dangerouslySetInnerHTML={{ __html: slide.content }} />
                        )}
                        {slide.blocks && slide.blocks.length > 0 && (
                            <div className="w-full">
                                {renderBlocks(slide.blocks)}
                            </div>
                        )}
                    </div>
                </div>
            );

        case 'three-column':
            return (
                <div className={`${containerClass} ${themeClass} !p-4 md:!p-8`}>
                    <div className="max-w-7xl w-full flex flex-col items-center">
                        {/* Header - No badge for this layout by default unless enabled explicitly */}
                        {slide.showBadge && (
                            <div className="mb-6 inline-block px-4 py-1 border border-white/30 rounded-full text-sm font-medium tracking-widest uppercase text-white/80">
                                {badgeLabel}
                            </div>
                        )}

                        {slide.title && (
                            <h2
                                className="text-4xl md:text-6xl font-black mb-12 text-center drop-shadow-2xl leading-tight"
                                dangerouslySetInnerHTML={{ __html: slide.title }}
                            />
                        )}

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 mb-8">
                            {slide.columns?.map((col, idx) => (
                                <div
                                    key={idx}
                                    className={`group relative p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl ${
                                        // Dynamic Border Color based on passed color class (assumes format 'text-RED-400')
                                        col.color && col.color.includes('red') ? 'hover:border-red-500/50' :
                                            col.color && col.color.includes('yellow') ? 'hover:border-yellow-500/50' :
                                                col.color && col.color.includes('purple') ? 'hover:border-purple-500/50' :
                                                    'hover:border-gray-600'
                                        }`}
                                >
                                    {/* Icon Container with Entity Badge */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 w-full">
                                        <div className={`w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center border-2 border-gray-700 transition-colors shadow-lg overflow-hidden mb-[-12px] relative z-10 ${col.color && col.color.includes('red') ? 'group-hover:border-red-500' :
                                            col.color && col.color.includes('yellow') ? 'group-hover:border-yellow-500' :
                                                col.color && col.color.includes('purple') ? 'group-hover:border-purple-500' :
                                                    'group-hover:border-gray-500'
                                            }`}>
                                            {col.icon?.startsWith('/') || col.icon?.startsWith('http') ? (
                                                /* eslint-disable-next-line @next/next/no-img-element */
                                                <img src={col.icon} alt={col.title} className="w-12 h-12 object-contain" />
                                            ) : (
                                                <span className="text-4xl">{col.icon}</span>
                                            )}
                                        </div>

                                        {/* Entity Badge as Nameplate */}
                                        {col.entity && (
                                            <div className="px-3 py-1 rounded-full bg-gray-800 border border-gray-600 text-[10px] font-black uppercase tracking-widest text-white shadow-md z-20 whitespace-nowrap">
                                                {col.entity}
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="mt-12 text-center">
                                        <h3 className={`text-xl font-bold mb-2 uppercase tracking-wider ${col.color || 'text-gray-200'}`}>
                                            {col.title}
                                        </h3>
                                        <div
                                            className="text-gray-300 text-base leading-relaxed font-light"
                                            dangerouslySetInnerHTML={{ __html: col.content }}
                                        />
                                    </div>

                                    {/* Badge */}
                                    {col.badge && (
                                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-600 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                                            {col.badge}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Footer Content (Blocks) */}
                        {slide.blocks && slide.blocks.length > 0 && (
                            <div className="w-full text-center mt-4">
                                {renderBlocks(slide.blocks)}
                            </div>
                        )}
                    </div>
                </div>
            );

        case 'reveal':
            return <RevealSlide ref={ref} slide={slide} onNext={onNext} />;

        default: // Standard Text
            return (
                <div className={`${containerClass} ${themeClass}`}>
                    <div className="max-w-4xl w-full">
                        {slide.title && (
                            <h2
                                className="text-3xl md:text-5xl font-bold mb-8"
                                dangerouslySetInnerHTML={{ __html: slide.title }}
                            />
                        )}
                        {slide.content && !slide.title && (
                            <div className="max-w-3xl mx-auto text-center mb-12 [@media(max-height:750px)]:mb-6">
                                <div className="text-6xl text-blue-500 mb-6 opacity-30 [@media(max-height:750px)]:text-4xl [@media(max-height:750px)]:mb-3">&ldquo;</div>
                                <blockquote className="text-2xl md:text-4xl font-light italic leading-relaxed text-white/90 [@media(max-height:750px)]:text-xl [@media(max-height:750px)]:leading-snug">
                                    {slide.content}
                                </blockquote>
                            </div>
                        )}
                        {slide.content && slide.title && (
                            <div className="prose prose-xl prose-invert max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: slide.content }} />
                        )}
                        {slide.contentHTML && (
                            (slide.tooltips || slide.details) ? (
                                <EnhancedContent
                                    html={slide.contentHTML}
                                    tooltips={slide.tooltips}
                                    details={slide.details}
                                    className="mt-8 w-full"
                                />
                            ) : (
                                <div className="mt-8 w-full" dangerouslySetInnerHTML={{ __html: slide.contentHTML }} />
                            )
                        )}
                        {/* New: Block-based content */}
                        {slide.blocks && slide.blocks.length > 0 && (
                            <div className="w-full">
                                {renderBlocks(slide.blocks)}
                            </div>
                        )}
                    </div>
                </div>
            );
    }
});

SlideRenderer.displayName = 'SlideRenderer';

export default SlideRenderer;
