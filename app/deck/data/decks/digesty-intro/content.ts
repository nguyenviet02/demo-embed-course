import { DeckContent } from '../../../types';

export const digestyIntroEn: DeckContent = {
    language: 'en',
    slides: [
        {
            id: 'cover',
            layout: 'cover',
            theme: 'brand',
            showBadge: false,
            title: `
                <div class="relative inline-block mt-10 md:mt-16 z-20">
                    <!-- Main Title: DIGESTY STREET -->
                    <div class="text-5xl md:text-7xl font-black mb-8 flex justify-center gap-2" style="text-shadow: 0 4px 0 rgba(0,0,0,0.5);">
                        <span class="inline-block -rotate-6 text-[#FF00FF] drop-shadow-[0_0_15px_#FF00FF]">D</span>
                        <span class="inline-block rotate-3 text-[#00FFFF] drop-shadow-[0_0_15px_#00FFFF]">I</span>
                        <span class="inline-block -rotate-3 text-[#FFFF00] drop-shadow-[0_0_15px_#FFFF00]">G</span>
                        <span class="inline-block rotate-6 text-[#00FF00] drop-shadow-[0_0_15px_#00FF00]">E</span>
                        <span class="inline-block -rotate-6 text-[#BF00FF] drop-shadow-[0_0_15px_#BF00FF]">S</span>
                        <span class="inline-block rotate-3 text-[#FF6B6B] drop-shadow-[0_0_15px_#FF6B6B]">T</span>
                        <span class="inline-block -rotate-3 text-[#4ECDC4] drop-shadow-[0_0_15px_#4ECDC4]">Y</span>
                        <span class="inline-block w-6"></span>
                        <span class="inline-block rotate-6 text-[#FFE66D] drop-shadow-[0_0_15px_#FFE66D]">S</span>
                        <span class="inline-block -rotate-6 text-[#FF00FF] drop-shadow-[0_0_15px_#FF00FF]">T</span>
                        <span class="inline-block rotate-3 text-[#00FFFF] drop-shadow-[0_0_15px_#00FFFF]">R</span>
                        <span class="inline-block -rotate-3 text-[#FFFF00] drop-shadow-[0_0_15px_#FFFF00]">E</span>
                        <span class="inline-block rotate-6 text-[#00FF00] drop-shadow-[0_0_15px_#00FF00]">E</span>
                        <span class="inline-block -rotate-6 text-[#BF00FF] drop-shadow-[0_0_15px_#BF00FF]">T</span>
                    </div>

                    <!-- Tagline: Experiencing AI -->
                    <div class="relative inline-block">
                        <div class="text-3xl md:text-5xl font-bold bg-black/80 px-8 py-3 rounded-xl border-2 border-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.4)] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-yellow-200 animate-pulse">Experiencing AI</span>
                        </div>
                    </div>
                </div>
            `,
            subtitle: 'DIGESTY LEARNING',
            blocks: [],
            content: `
                <!-- Top Header: Logo (Scale bumped 5x) -->
                <div class="fixed top-4 md:top-8 left-0 right-0 z-[100] flex flex-col items-center gap-3 pointer-events-none">
                    <a href="https://digesty.vn" target="_blank" class="pointer-events-auto hover:scale-105 transition-transform duration-300">
                        <img src="/assets/digesty-logo-white-trimmed.webp" alt="Digesty" class="h-12 md:h-20 w-auto drop-shadow-[0_0_25px_rgba(6,182,212,0.6)] opacity-90 hover:opacity-100" />
                    </a>
                </div>

                <!-- Copyright Footer -->
                <div class="fixed bottom-4 left-0 right-0 text-center z-50 pointer-events-none">
                     <p class="text-[10px] text-white/70 uppercase tracking-[0.2em] font-light">© 2025 Digesty.vn</p>
                </div>

                <!-- Darken Overlay for Glow Contrast -->
                <div class="fixed inset-0 bg-black/85 z-0 pointer-events-none"></div>

                <!-- Confetti Layer (Glow Mode - Reduced Density) -->
                <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
                    <!-- Top Left Cluster (Reduced) -->
                    <div class="absolute top-[5%] left-[5%] w-3 h-3 bg-yellow-400 text-yellow-400 confetti-glow rotate-12 rounded-sm animate-float-slow delay-0"></div>
                    <div class="absolute top-[15%] left-[3%] w-3 h-3 bg-red-500 text-red-500 confetti-glow rotate-45 rounded-full animate-float delay-700"></div>
                    <div class="absolute top-[10%] left-[20%] w-2 h-2 bg-purple-400 text-purple-400 confetti-glow rotate-90 animate-float-fast delay-500"></div>

                    <!-- Top Right Cluster (Reduced) -->
                    <div class="absolute top-[5%] right-[5%] w-3 h-1 bg-pink-500 text-pink-500 confetti-glow -rotate-6 animate-twinkle delay-200"></div>
                    <div class="absolute top-[8%] right-[25%] w-4 h-4 bg-yellow-300 text-yellow-300 confetti-glow -rotate-12 opacity-80 animate-float delay-0"></div>
                    <div class="absolute top-[15%] right-[20%] w-3 h-3 bg-indigo-400 text-indigo-400 confetti-glow rotate-45 animate-float delay-300"></div>

                    <!-- Bottom Left Cluster (Reduced) -->
                    <div class="absolute bottom-[20%] left-[15%] w-3 h-4 bg-orange-400 text-orange-400 confetti-glow -rotate-90 animate-twinkle delay-700"></div>
                    <div class="absolute bottom-[5%] left-[25%] w-2 h-2 bg-blue-300 text-blue-300 confetti-glow rotate-12 animate-float delay-100"></div>
                    <div class="absolute bottom-[25%] left-[5%] w-4 h-2 bg-yellow-500 text-yellow-500 confetti-glow rotate-45 animate-twinkle-slow delay-0"></div>

                    <!-- Bottom Right Cluster (Reduced) -->
                    <div class="absolute bottom-[10%] right-[10%] w-3 h-3 bg-purple-500 text-purple-500 confetti-glow rotate-12 animate-float-slow delay-300"></div>
                    <div class="absolute bottom-[5%] right-[30%] w-3 h-3 bg-red-400 text-red-400 confetti-glow rounded-full animate-float delay-200"></div>
                    <div class="absolute bottom-[15%] right-[5%] w-4 h-2 bg-green-500 text-green-500 confetti-glow rotate-90 animate-twinkle-slow delay-700"></div>

                    <!-- Center Scatter (Reduced) -->
                    <div class="absolute top-[40%] left-[15%] w-2 h-2 bg-white/50 text-white confetti-glow rounded-full animate-twinkle delay-0"></div>
                    <div class="absolute bottom-[35%] right-[5%] w-3 h-3 bg-green-200 text-green-200 confetti-glow rounded-full animate-twinkle-slow delay-200"></div>

                    <!-- Random Fills (Reduced) -->
                    <div class="absolute top-[45%] left-[45%] w-2 h-2 bg-blue-400 text-blue-400 confetti-glow rounded-full opacity-50 animate-float delay-700"></div>
                    <div class="absolute top-[30%] right-[40%] w-2 h-2 bg-yellow-300 text-yellow-300 confetti-glow opacity-80 animate-float-slow delay-100"></div>

                    <!-- Detailed Particles (Reduced) -->
                    <div class="absolute top-[18%] left-[45%] w-1 h-1 bg-white text-white confetti-glow rounded-full animate-ping delay-0"></div>
                    <div class="absolute top-[50%] right-[90%] w-1 h-1 bg-cyan-200 text-cyan-200 confetti-glow rounded-full animate-float delay-200"></div>
                </div>

                <div class="flex flex-col items-center justify-center h-full relative z-20">
                    <button class="btn-explore group relative px-10 py-4 bg-transparent overflow-hidden rounded-full font-bold text-xl md:text-2xl tracking-widest text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] border border-cyan-400 hover:scale-105 active:scale-95 transition-all duration-300">
                        <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50 group-hover:opacity-80 transition-opacity"></span>
                        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <span class="relative z-10 flex items-center gap-3">
                            EXPLORE
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 animate-pulse">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                        <!-- Glow effect -->
                        <div class="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 blur-lg opacity-30 group-hover:opacity-60 transition-opacity -z-10"></div>
                    </button>
                </div>
            `,
            nextItems: ['.btn-explore'],
            customTransition: { type: 'zoom-in' },
        },
        {
            id: 'contrast',
            layout: 'cover',
            theme: 'dark',
            imageUrl: '/assets/ai_street_market_contrast.png',
            showBadge: false,
            title: `
                <!-- Container for custom split layout with Robust Centering -->
                <div class="relative w-screen -ml-[calc(50vw-50%)] flex flex-col items-center">
                    <div class="w-[90vw] max-w-[1400px] flex flex-col items-center">

                    <!-- Main Headline -->
                    <h2 class="text-5xl md:text-7xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-cyan-100 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] text-center uppercase">
                        Don't "Prompt".<br/><span class="text-yellow-400 drop-shadow-[0_0_20px_rgba(234,179,8,0.6)]">Discover!</span>
                    </h2>

                    <!-- Split Columns -->
                    <div class="grid grid-cols-2 w-full gap-8 md:gap-16">

                        <!-- Left: Library/Chatbot -->
                        <div class="flex flex-col items-center text-center p-8 rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-2xl transition-all hover:bg-black/50 duration-500">
                            <div class="mb-6 text-gray-400 uppercase tracking-widest text-sm font-bold border-b border-gray-600 pb-2">Plain Chatbots</div>
                            <h3 class="text-3xl md:text-4xl font-bold text-gray-200 mb-6 font-serif tracking-wide">Static Library</h3>
                            <p class="text-xl md:text-2xl text-gray-100 font-medium leading-relaxed tracking-wide">
                                Talking to a blank box.<br/>
                                You must know what to ask.
                            </p>
                            <div class="flex flex-wrap justify-center gap-3 mt-8">
                                <span class="px-4 py-2 rounded-full border border-gray-600 bg-gray-800/50 text-gray-400 text-base font-medium tracking-wide shadow-inner">#Cold</span>
                                <span class="px-4 py-2 rounded-full border border-gray-600 bg-gray-800/50 text-gray-400 text-base font-medium tracking-wide shadow-inner">#Demanding</span>
                            </div>
                        </div>

                        <!-- Right: Digesty/Street -->
                        <div class="flex flex-col items-center text-center p-8 rounded-3xl bg-cyan-900/60 backdrop-blur-md border border-cyan-400/50 shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all hover:bg-cyan-900/70 duration-500">
                            <div class="mb-6 text-cyan-300 uppercase tracking-widest text-sm font-bold border-b border-cyan-500/50 pb-2">Digesty Experience</div>
                            <h3 class="text-3xl md:text-4xl font-bold text-white mb-6 animate-pulse tracking-wide">Living AI Street</h3>
                            <p class="text-xl md:text-2xl text-white font-semibold leading-relaxed tracking-wide">
                                 Browsing live content.<br/>
                                 Just See, Touch and Choose.
                            </p>
                            <div class="flex flex-wrap justify-center gap-3 mt-8">
                                <span class="px-4 py-2 rounded-full border border-pink-400 bg-pink-900/40 text-pink-200 text-lg font-bold tracking-wide shadow-[0_0_15px_rgba(244,114,182,0.4)]">#Visual</span>
                                <span class="px-4 py-2 rounded-full border border-yellow-400 bg-yellow-900/40 text-yellow-200 text-lg font-bold tracking-wide shadow-[0_0_15px_rgba(250,204,21,0.4)]">#Discovery</span>
                                <span class="px-4 py-2 rounded-full border border-cyan-400 bg-cyan-900/40 text-cyan-200 text-lg font-bold tracking-wide shadow-[0_0_15px_rgba(34,211,238,0.4)]">#Familiar</span>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            `,
            blocks: [],
        },
        {
            id: 'problem-updated',
            layout: 'three-column',
            theme: 'dark',
            showBadge: false,
            title: `<h1 class="text-5xl font-black text-center mb-12 tracking-tight bg-gradient-to-r from-red-400 via-white to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">3 Key Barriers</h1>`,
            columns: [
                {
                    icon: '/assets/neon_keyboard.png',
                    entity: 'AI Chatbot',
                    title: 'Blank Screen Paralysis',
                    content: `
                        <div class="space-y-4">
                            <div class="bg-gray-800/30 p-3 rounded-lg border border-gray-700/50">
                                <p class="text-gray-300 text-sm">Must <strong class="text-white">think hard</strong>. Must <strong class="text-white">type</strong>. Must <strong class="text-white">read</strong> walls of text.</p>
                            </div>
                        </div>
                    `,
                    color: 'text-gray-100',
                },
                {
                    icon: '/assets/neon_maze.png',
                    entity: 'Scattered AI Apps',
                    title: 'Choice Overload',
                    content: `
                        <div class="space-y-4">
                            <div class="bg-gray-800/30 p-3 rounded-lg border border-gray-700/50">
                                <p class="text-gray-300 text-sm"><strong class="text-white">Fragmented</strong>. <strong class="text-white">Too many apps</strong>. <strong class="text-white">Mixed quality</strong>.</p>
                            </div>
                        </div>
                    `,
                    color: 'text-gray-100',
                },
                {
                    icon: '/assets/neon_lantern.png',
                    entity: 'Foreign AI',
                    title: 'Cultural Gap',
                    content: `
                        <div class="space-y-4">
                            <div class="bg-gray-800/30 p-3 rounded-lg border border-gray-700/50">
                                <p class="text-gray-300 text-sm"><strong class="text-white">Too foreign</strong>. <strong class="text-white">Out of touch</strong>. <strong class="text-white">Missing local context</strong>.</p>
                            </div>
                        </div>
                    `,
                    color: 'text-gray-100',
                }
            ],
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="flex flex-col items-center animate-fade-in-up delay-500">
                            <!-- Connector -->
                            <div class="flex flex-col items-center mb-4 opacity-60">
                                <div class="h-6 w-px bg-gradient-to-b from-transparent to-white/50"></div>
                                <div class="my-1 text-[10px] font-bold tracking-[0.2em] text-cyan-200/80 uppercase border border-cyan-500/30 px-3 py-0.5 rounded-full bg-cyan-900/20 backdrop-blur">
                                    A DIFFERENT PATH
                                </div>
                                <div class="h-3 w-px bg-gradient-to-b from-white/50 to-transparent"></div>
                            </div>

                            <!-- Main Box -->
                            <div class="inline-flex items-center gap-6 bg-white/5 px-10 py-4 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/10 transition-all duration-300">
                                <!-- Premium Logo -->
                                <img src="/assets/digesty-logo-white-trimmed.webp" alt="Digesty" class="h-10 object-contain opacity-100 hover:scale-105 transition-all duration-300" />

                                <!-- Divider -->
                                <div class="h-6 w-px bg-white/10"></div>

                                <!-- Adjectives -->
                                <div class="flex items-center gap-4 text-sm font-bold tracking-widest uppercase">
                                    <span class="text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">Friendly</span>
                                    <span class="text-gray-600 font-light">|</span>
                                    <span class="text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.5)]">Curated</span>
                                    <span class="text-gray-600 font-light">|</span>
                                    <span class="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">Local</span>
                                </div>
                            </div>
                        </div>
                    `
                }
            ],
        },
        {
            id: 'reveal',
            layout: 'reveal',
            theme: 'dark',
            imageUrl: '/assets/digesty_street.jpg',
            title: `<div class="flex flex-col items-center gap-6"><span class="text-2xl md:text-4xl font-light tracking-[0.5em] text-cyan-100/90 uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Introducing</span><img src="/assets/digesty-logo-white-trimmed.webp" alt="Digesty" class="w-[80vw] max-w-3xl h-auto drop-shadow-[0_0_35px_rgba(34,211,238,0.5)] animate-pulse" /></div>`,
            content: '',
            blocks: [],
        },
        {
            id: 'ecosystem',
            layout: 'centered',
            theme: 'dark',
            showBadge: false,
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="w-full max-w-[1400px] -mt-8">
                            <!-- Header -->
                            <h2 class="text-4xl md:text-6xl font-black text-center mb-12 uppercase tracking-tight">
                                <span class="text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-blue-200 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                                    WHAT'S ON DIGESTY STREET?
                                </span>
                            </h2>

                            <!-- Main Container -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

                                <!-- LEFT COL: LIFESTYLE (Warm) -->
                                <div class="bg-gradient-to-b from-red-900/20 to-transparent border border-red-500/20 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-red-500/40 transition-colors">
                                    <div class="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-5 mix-blend-overlay"></div>

                                    <!-- Col Header -->
                                    <div class="text-2xl md:text-3xl font-black text-center mb-8 uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400 drop-shadow-lg">
                                        FUN STREET
                                    </div>

                                    <div class="space-y-8 relative z-10">
                                        <!-- Trends -->
                                        <div>
                                            <div class="flex items-center gap-3 mb-3">
                                                <span class="text-2xl">🔥</span>
                                                <h3 class="text-xl font-bold text-red-100">DIGESTY TRENDS</h3>
                                            </div>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-3 py-1 rounded-full border border-red-500/30 bg-red-900/20 text-red-200 text-xs md:text-sm font-medium hover:bg-red-900/40 transition-colors">Drama</span>
                                                <span class="px-3 py-1 rounded-full border border-red-500/30 bg-red-900/20 text-red-200 text-xs md:text-sm font-medium hover:bg-red-900/40 transition-colors">Showbiz</span>
                                                <span class="px-3 py-1 rounded-full border border-red-500/30 bg-red-900/20 text-red-200 text-xs md:text-sm font-medium hover:bg-red-900/40 transition-colors">Football Banter</span>
                                                <span class="px-3 py-1 rounded-full border border-red-500/30 bg-red-900/20 text-red-200 text-xs md:text-sm font-medium hover:bg-red-900/40 transition-colors">Slang Dictionary</span>
                                            </div>
                                        </div>

                                        <!-- Lifestyle -->
                                        <div>
                                            <div class="flex items-center gap-3 mb-3">
                                                <span class="text-2xl">📸</span>
                                                <h3 class="text-xl font-bold text-yellow-100">DIGESTY LIFESTYLE</h3>
                                            </div>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-900/20 text-yellow-200 text-xs md:text-sm font-medium hover:bg-yellow-900/40 transition-colors">AI Photo Studio</span>
                                                <span class="px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-900/20 text-yellow-200 text-xs md:text-sm font-medium hover:bg-yellow-900/40 transition-colors">AI Companion</span>
                                                <span class="px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-900/20 text-yellow-200 text-xs md:text-sm font-medium hover:bg-yellow-900/40 transition-colors">Culture Quiz</span>
                                            </div>
                                        </div>

                                        <!-- Oracle -->
                                        <div>
                                            <div class="flex items-center gap-3 mb-3">
                                                <span class="text-2xl">🔮</span>
                                                <h3 class="text-xl font-bold text-fuchsia-100">DIGESTY ORACLE</h3>
                                            </div>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-900/20 text-fuchsia-200 text-xs md:text-sm font-medium hover:bg-fuchsia-900/40 transition-colors">Tarot</span>
                                                <span class="px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-900/20 text-fuchsia-200 text-xs md:text-sm font-medium hover:bg-fuchsia-900/40 transition-colors">Numerology</span>
                                                <span class="px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-900/20 text-fuchsia-200 text-xs md:text-sm font-medium hover:bg-fuchsia-900/40 transition-colors">Astrology</span>
                                                <span class="px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-900/20 text-fuchsia-200 text-xs md:text-sm font-medium hover:bg-fuchsia-900/40 transition-colors">Personality Quiz</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- RIGHT COL: UTILITY (Cool) -->
                                <div class="bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-500/20 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-blue-500/40 transition-colors">
                                    <div class="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-5 mix-blend-overlay"></div>

                                    <!-- Col Header -->
                                    <div class="text-2xl md:text-3xl font-black text-center mb-8 uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 drop-shadow-lg">
                                        UTILITY STREET
                                    </div>

                                    <div class="space-y-8 relative z-10">
                                        <!-- Learn -->
                                        <div>
                                            <div class="flex items-center gap-3 mb-3">
                                                <span class="text-2xl">🎓</span>
                                                <h3 class="text-xl font-bold text-blue-100">DIGESTY LEARN</h3>
                                            </div>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-xs md:text-sm font-medium hover:bg-blue-900/40 transition-colors">AI</span>
                                                <span class="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-xs md:text-sm font-medium hover:bg-blue-900/40 transition-colors">English</span>
                                                <span class="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-xs md:text-sm font-medium hover:bg-blue-900/40 transition-colors">SAT</span>
                                                <span class="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-xs md:text-sm font-medium hover:bg-blue-900/40 transition-colors">STEM</span>
                                                <span class="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-xs md:text-sm font-medium hover:bg-blue-900/40 transition-colors">IELTS</span>
                                                <span class="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-xs md:text-sm font-medium hover:bg-blue-900/40 transition-colors">Study Abroad</span>
                                            </div>
                                        </div>

                                        <!-- Health -->
                                        <div>
                                            <div class="flex items-center gap-3 mb-3">
                                                <span class="text-2xl">⚕️</span>
                                                <h3 class="text-xl font-bold text-teal-100">DIGESTY HEALTH</h3>
                                            </div>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-3 py-1 rounded-full border border-teal-500/30 bg-teal-900/20 text-teal-200 text-xs md:text-sm font-medium hover:bg-teal-900/40 transition-colors">Virtual Coach</span>
                                                <span class="px-3 py-1 rounded-full border border-teal-500/30 bg-teal-900/20 text-teal-200 text-xs md:text-sm font-medium hover:bg-teal-900/40 transition-colors">Nutrition</span>
                                                <span class="px-3 py-1 rounded-full border border-teal-500/30 bg-teal-900/20 text-teal-200 text-xs md:text-sm font-medium hover:bg-teal-900/40 transition-colors">Medicine Guide</span>
                                            </div>
                                        </div>

                                        <!-- Biz -->
                                        <div>
                                            <div class="flex items-center gap-3 mb-3">
                                                <span class="text-2xl">💼</span>
                                                <h3 class="text-xl font-bold text-indigo-100">DIGESTY BIZ</h3>
                                            </div>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-900/20 text-indigo-200 text-xs md:text-sm font-medium hover:bg-indigo-900/40 transition-colors">Tax Calculator</span>
                                                <span class="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-900/20 text-indigo-200 text-xs md:text-sm font-medium hover:bg-indigo-900/40 transition-colors">Business Forms</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Footer Bar -->
                            <div class="mt-8 pt-6 border-t border-white/10 text-center">
                                <div class="inline-flex items-center gap-4 text-xs md:text-sm font-medium tracking-[0.2em] text-white/50 uppercase">
                                    <span>ONE ID</span>
                                    <span class="text-cyan-500/50">•</span>
                                    <span>VERIFIED PARTNERS</span>
                                    <span class="text-cyan-500/50">•</span>
                                    <span>SAFE & ETHICAL</span>
                                </div>
                            </div>

                        </div>
                    `
                },
            ],
        },
        {
            id: 'product-showcase',
            layout: 'carousel-3d',
            theme: 'dark',
            showBadge: false,
            title: 'TAP. SWIPE. FEEL.',
            carouselItems: [
                {
                    title: 'Digesty Home',
                    desc: 'All AI tools in one place.',
                    icon: '🌐',
                    imageUrl: '/assets/digesty_rewind_showcase.png',
                    color: 'bg-cyan-900/80',
                },
                {
                    title: 'Photo Studio',
                    desc: 'AI-powered art photography.',
                    icon: '📸',
                    imageUrl: '/assets/digesty_avatar_studio.png',
                    color: 'bg-indigo-900/80',
                },
                {
                    title: 'Tarot Oracle',
                    desc: 'Decode cosmic mysteries.',
                    icon: '🔮',
                    imageUrl: '/assets/digesty_tarot.png',
                    color: 'bg-purple-900/80',
                },
            ],
        },
        {
            id: 'growth-flywheel',
            layout: 'centered',
            theme: 'dark',
            showBadge: false,
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="w-full max-w-[1200px] flex flex-col items-center">
                            <!-- Header -->
                            <h2 class="text-4xl md:text-6xl font-black text-center mb-16 uppercase tracking-tight">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-green-200 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                                    GROWTH FLYWHEEL
                                </span>
                            </h2>

                            <!-- The Flywheel Visual -->
                            <div class="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">

                                <!-- LEFT ENGINE: LIFESTYLE (Warm) -->
                                <div class="relative group">
                                    <div class="absolute inset-0 bg-red-500/20 blur-[50px] rounded-full group-hover:bg-red-500/30 transition-all duration-700"></div>
                                    <div class="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-red-500/30 bg-gradient-to-br from-red-900/40 to-black/80 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm relative z-10 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                                        <div class="text-5xl mb-4 animate-bounce-slow">🔥</div>
                                        <h3 class="text-2xl font-black text-red-100 uppercase mb-2">FUN</h3>
                                        <p class="text-red-200/70 text-sm font-bold tracking-widest mb-4">ENGINE 1</p>
                                        <div class="bg-red-500/20 rounded-xl p-3 w-full border border-red-500/30">
                                            <div class="text-xl font-bold text-white mb-1">EASY ATTRACTION</div>
                                            <div class="text-xs text-red-200">Fun • Viral</div>
                                        </div>
                                    </div>

                                    <!-- Orbiting Particle -->
                                    <div class="absolute inset-0 animate-spin-slow pointer-events-none">
                                        <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(220,38,38,1)]"></div>
                                    </div>
                                </div>

                                <!-- ARROW FLOW Middle -->
                                <div class="hidden md:flex flex-col items-center justify-center space-y-2 z-20">
                                     <div class="w-32 h-1 bg-gradient-to-r from-red-500/50 to-blue-500/50 rounded-full"></div>
                                     <div class="text-xs text-white/40 uppercase tracking-[0.3em] whitespace-nowrap">Convert</div>
                                </div>

                                <!-- RIGHT ENGINE: PROFESSIONAL (Cool) -->
                                <div class="relative group">
                                    <div class="absolute inset-0 bg-blue-500/20 blur-[50px] rounded-full group-hover:bg-blue-500/30 transition-all duration-700"></div>
                                    <div class="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-blue-500/30 bg-gradient-to-bl from-blue-900/40 to-black/80 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm relative z-10 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                                        <div class="text-5xl mb-4 animate-pulse">💎</div>
                                        <h3 class="text-2xl font-black text-blue-100 uppercase mb-2">UTILITY</h3>
                                        <p class="text-blue-200/70 text-sm font-bold tracking-widest mb-4">ENGINE 2</p>
                                        <div class="bg-blue-500/20 rounded-xl p-3 w-full border border-blue-500/30">
                                            <div class="text-xl font-bold text-white mb-1">LASTING ENGAGEMENT</div>
                                            <div class="text-xs text-blue-200">Practical • Deep</div>
                                        </div>
                                    </div>

                                    <!-- Orbiting Particle -->
                                    <div class="absolute inset-0 animate-spin-reverse-slow pointer-events-none">
                                        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(37,99,235,1)]"></div>
                                    </div>
                                </div>

                                <!-- CENTER: UNIFIED ID (The Bridge) -->
                                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center justify-center">
                                    <div class="bg-black/90 border border-white/20 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-[0_0_50px_rgba(168,85,247,0.4)] flex flex-col items-center">
                                        <span class="text-3xl mb-1">🧬</span>
                                        <span class="text-fuchsia-300 font-bold uppercase tracking-widest text-xs whitespace-nowrap">UNIFIED ID</span>
                                    </div>
                                </div>

                                <!-- Mobile Connector Visual (visible only on mobile) -->
                                <div class="md:hidden text-2xl text-white/20 my-[-20px]">⬇️</div>

                            </div>

                            <!-- Bottom Caption -->
                            <div class="mt-16 text-center max-w-2xl mx-auto">
                                <p class="text-xl text-white/80 font-light leading-relaxed">
                                    Use <span class="text-red-300 font-bold">Fun</span> to draw users in.<br/>
                                    Use <span class="text-blue-300 font-bold">Utility</span> to keep them engaged.
                                </p>
                            </div>
                        </div>
                    `
                },
            ],
        },
        {
            id: 'tech-core',
            layout: 'centered',
            theme: 'dark',
            showBadge: false,
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="w-full max-w-[1200px] flex flex-col items-center">
                            <h2 class="text-4xl md:text-6xl font-black text-center mb-12 uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-200 to-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                                TECH & DATA
                            </h2>

                            <!-- 3-Block Process Flow -->
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full relative">

                                <!-- Connecting Flow Line (Desktop) -->
                                <div class="hidden lg:block absolute top-[40%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent -z-10"></div>

                                <!-- BLOCK 1: INPUT (Native Data) -->
                                <div class="bg-black/60 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col items-center group hover:border-cyan-500/50 transition-all duration-500 relative overflow-hidden">
                                    <!-- Badge -->
                                    <div class="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-cyan-900/50 border border-cyan-500/30 text-cyan-300 rounded-full z-10 backdrop-blur-md">
                                        DATA LAYER
                                    </div>

                                    <!-- Visual: Image -->
                                    <div class="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-cyan-500/20 group-hover:scale-[1.02] transition-transform duration-700">
                                        <div class="absolute inset-0 bg-cyan-500/10 mix-blend-overlay z-10"></div>
                                        <img src="/assets/tech_input.png" alt="Input Layer" class="w-full h-full object-cover" />
                                    </div>

                                    <h3 class="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-wide">1. LOCAL DATA</h3>

                                    <ul class="space-y-3 text-sm text-gray-300 text-left w-full px-2">
                                        <li class="flex items-start gap-3">
                                            <span class="text-cyan-500 mt-0.5">❖</span>
                                            <span><strong>5M+ articles</strong> & Vietnamese legal library.</span>
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="text-cyan-500 mt-0.5">❖</span>
                                            <span><strong>Linguistics:</strong> Vietnamese poetry, wordplay, teen slang, proverbs, idioms...</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- BLOCK 2: PROCESS (Digesty System) -->
                                <div class="bg-black/60 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col items-center group hover:border-purple-500/50 transition-all duration-500 relative z-10">
                                    <!-- Badge -->
                                    <div class="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-purple-900/50 border border-purple-500/30 text-purple-300 rounded-full z-10 backdrop-blur-md">
                                        PROCESS LAYER
                                    </div>

                                    <!-- Visual: Image -->
                                    <div class="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-purple-500/20 group-hover:scale-[1.02] transition-transform duration-700">
                                        <div class="absolute inset-0 bg-purple-500/10 mix-blend-overlay z-10"></div>
                                        <img src="/assets/tech_process.png" alt="Process Layer" class="w-full h-full object-cover" />
                                    </div>

                                    <h3 class="text-xl font-bold text-purple-400 mb-4 uppercase tracking-wide">2. PROCESSING SYSTEM</h3>

                                    <ul class="space-y-3 text-sm text-gray-300 text-left w-full px-2">
                                        <li class="flex items-start gap-3">
                                            <span class="text-purple-500 mt-0.5">✦</span>
                                            <span><strong>DigestAgents:</strong> Multi-agent system for extraction, synthesis & moderation.</span>
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="text-purple-500 mt-0.5">✦</span>
                                            <span><strong>DigestMemo:</strong> Lifelong memory & context-aware retrieval.</span>
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="text-purple-500 mt-0.5">✦</span>
                                            <span><strong>DigestPersona:</strong> One profile, personalized across all apps.</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- BLOCK 3: OUTPUT (Visual Experience) -->
                                <div class="bg-black/60 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col items-center group hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden">
                                     <!-- Badge -->
                                    <div class="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-blue-900/50 border border-blue-500/30 text-blue-300 rounded-full z-10 backdrop-blur-md">
                                        DISPLAY LAYER
                                    </div>

                                     <!-- Visual: Image -->
                                    <div class="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-blue-500/20 group-hover:scale-[1.02] transition-transform duration-700">
                                        <div class="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10"></div>
                                        <img src="/assets/tech_output.png" alt="Output Layer" class="w-full h-full object-cover" />
                                    </div>

                                    <h3 class="text-xl font-bold text-blue-400 mb-4 uppercase tracking-wide">3. VISUAL EXPERIENCE</h3>

                                    <div class="text-center md:text-left w-full px-2">
                                         <div class="text-lg font-bold text-white mb-2">DigestGRAPH™</div>
                                         <p class="text-sm text-gray-400 leading-relaxed">
                                             Proprietary event-flow visualization. Transform raw data into <span class="text-blue-300 font-bold">Knowledge Graphs</span>.
                                         </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    `
                }
            ],
        },
        {
            id: 'roadmap-vision',
            layout: 'centered',
            theme: 'dark',
            showBadge: false,
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="w-full max-w-[1200px] flex flex-col items-center">
                            <h2 class="text-3xl md:text-5xl font-black text-center mb-16 uppercase tracking-tight">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-blue-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                    VISION & ROADMAP
                                </span>
                            </h2>

                            <div class="relative w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">

                                <!-- Connecting Line (Desktop) -->
                                <div class="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-gradient-to-r from-red-600/50 via-purple-500/50 to-cyan-500/50 rounded-full z-0"></div>

                                <!-- Phase 1: Vietnam -->
                                <div class="relative z-10 flex-1 flex flex-col items-center text-center group w-full md:w-auto">
                                    <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-red-900/80 to-black border border-red-500/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(220,38,38,0.3)] group-hover:scale-110 transition-transform duration-500">
                                        <span class="text-4xl">🇻🇳</span>
                                    </div>
                                    <div class="bg-red-900/30 px-4 py-1 rounded-full border border-red-500/30 text-red-200 text-xs font-bold mb-3">JAN 2026</div>
                                    <h3 class="text-xl font-bold text-white uppercase mb-2">NATIONAL AI</h3>
                                    <p class="text-gray-400 text-sm max-w-[250px] leading-relaxed">
                                        Launch as <strong>Vietnam's go-to AI app</strong>.
                                    </p>
                                </div>

                                <!-- Phase 2: Global -->
                                <div class="relative z-10 flex-1 flex flex-col items-center text-center group w-full md:w-auto">
                                    <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-900/80 to-black border border-blue-500/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform duration-500 delay-100">
                                        <span class="text-4xl">🌏</span>
                                    </div>
                                    <div class="bg-blue-900/30 px-4 py-1 rounded-full border border-blue-500/30 text-blue-200 text-xs font-bold mb-3">APR 2026</div>
                                    <h3 class="text-xl font-bold text-white uppercase mb-2">GO GLOBAL</h3>
                                    <p class="text-gray-400 text-sm max-w-[250px] leading-relaxed">
                                        Expand to <strong>Korea, Japan</strong>. Export location-agnostic tech.
                                    </p>
                                </div>

                                <!-- Phase 3: Sovereign AI -->
                                <div class="relative z-10 flex-1 flex flex-col items-center text-center group w-full md:w-auto">
                                    <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-900/80 to-black border border-purple-500/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform duration-500 delay-200">
                                        <span class="text-4xl">🛡️</span>
                                    </div>
                                    <div class="bg-purple-900/30 px-4 py-1 rounded-full border border-purple-500/30 text-purple-200 text-xs font-bold mb-3">VISION</div>
                                    <h3 class="text-xl font-bold text-white uppercase mb-2">SOVEREIGN AI</h3>
                                    <p class="text-gray-400 text-sm max-w-[250px] leading-relaxed">
                                        Realize <strong>Sovereign AI</strong> strategy. Secure national data.
                                    </p>
                                </div>

                            </div>

                            <!-- Bottom Note -->
                            <div class="mt-16 p-6 bg-white/5 rounded-2xl border border-white/10 max-w-3xl text-center">
                                <p class="text-lg text-gray-300 italic">
                                    "Serve Vietnam to Perfect the Product.<br/>
                                    Go Global to Grow Revenue."
                                </p>
                            </div>
                        </div>
                    `
                }
            ],
        },
        {
            id: 'team-company',
            layout: 'centered',
            theme: 'dark',
            showBadge: false,
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="w-full max-w-[1200px] flex flex-col items-center">
                             <!-- Header -->
                            <h2 class="text-3xl md:text-5xl font-black text-center mb-16 uppercase tracking-tight text-white/90">
                                TEAM BACKGROUND
                            </h2>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">

                                <!-- Left: Company Info -->
                                <div class="bg-gradient-to-br from-blue-900/40 to-black p-10 rounded-3xl border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] flex flex-col justify-center h-full text-center md:text-left backdrop-blur-sm">
                                    <div class="mb-4 text-blue-400 font-bold tracking-widest text-sm uppercase">A product of</div>
                                    <h3 class="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                                        Icetea AI & <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Robotics</span>
                                    </h3>
                                    <div class="w-20 h-1 bg-blue-500 mb-6 mx-auto md:mx-0"></div>
                                    <p class="text-xl text-gray-300 leading-relaxed mb-2">
                                        Part of <strong>Icetea Labs</strong>
                                    </p>
                                    <p class="text-gray-400 font-light text-base">
                                        Southeast Asia's leading Tech Venture Studio.
                                    </p>
                                </div>

                                <!-- Right: Team Credentials -->
                                <div class="flex flex-col gap-6">
                                    <!-- Scale -->
                                    <div class="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                                        <div class="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-4xl flex-shrink-0">👥</div>
                                        <div>
                                            <div class="text-4xl font-black text-white mb-1">20+</div>
                                            <div class="text-blue-200 text-sm font-bold uppercase tracking-wider">AI Engineers & Experts</div>
                                        </div>
                                    </div>

                                    <!-- Pedigree Section -->
                                    <div class="bg-white/5 rounded-2xl border border-white/10 p-6 flex-1 flex flex-col justify-center">
                                        <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">From Top Universities</div>

                                        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                            <!-- Peking -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 col-span-2 lg:col-span-2">
                                                <div class="h-14 w-14 flex items-center justify-center p-1">
                                                    <img src="/assets/logos/peking.png" alt="Peking" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">Peking University</span>
                                            </div>

                                            <!-- SNU -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div class="h-14 w-14 flex items-center justify-center p-2 bg-[#0F0F70] rounded-full">
                                                    <img src="/assets/logos/snu.png" alt="SNU" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">Seoul National</span>
                                            </div>

                                            <!-- Monash -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div class="h-14 w-14 flex items-center justify-center p-1">
                                                    <img src="/assets/logos/monash.png" alt="Monash" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">Monash (AU)</span>
                                            </div>

                                            <!-- HUST -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div class="h-14 w-14 flex items-center justify-center p-1">
                                                    <img src="/assets/logos/hust.png" alt="HUST" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">HUST</span>
                                            </div>

                                            <!-- UET -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div class="h-14 w-14 flex items-center justify-center p-1">
                                                    <img src="/assets/logos/uet.png" alt="UET" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">VNU-UET</span>
                                            </div>

                                            <!-- FTU -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div class="h-14 w-14 flex items-center justify-center p-1">
                                                    <img src="/assets/logos/ftu.png" alt="FTU" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">FTU</span>
                                            </div>

                                            <!-- FPT -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div class="h-14 w-14 flex items-center justify-center p-1">
                                                    <img src="/assets/logos/fpt.png" alt="FPT" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">FPT University</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    `
                }
            ],
        },
        {
            id: 'contact',
            layout: 'centered',
            theme: 'dark',
            showBadge: false,
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="w-full max-w-[1000px] flex flex-col items-center text-center">

                            <!-- Main Call to Action -->
                            <h2 class="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-cyan-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                    LET'S BUILD THE FUTURE <br/> TOGETHER
                                </span>
                            </h2>

                            <div class="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-12"></div>

                            <!-- Founder & Contact -->
                            <div class="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl w-full max-w-2xl flex flex-col md:flex-row items-center gap-10 hover:bg-white/10 transition-colors duration-500">

                                <!-- Visual: AI Connect Core -->
                                <div class="w-32 h-32 relative flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    <!-- Outer Glow -->
                                    <div class="absolute inset-0 bg-blue-500/20 blur-[40px] rounded-full animate-pulse"></div>

                                    <!-- Spinning Rings -->
                                    <div class="absolute inset-0 border border-cyan-500/30 rounded-full animate-[spin_8s_linear_infinite]"></div>
                                    <div class="absolute inset-2 border border-dashed border-purple-500/40 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>

                                    <!-- Core Container -->
                                    <div class="w-20 h-20 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] relative overflow-hidden rotate-45 z-10">
                                        <!-- Inner Shine -->
                                        <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/10 to-transparent"></div>

                                        <!-- Icon: Paper Plane (Send) -->
                                        <div class="-rotate-45">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <!-- Info -->
                                <div class="text-left flex-1">
                                    <h3 class="text-3xl font-bold text-white mb-6">Get in Touch</h3>

                                    <div class="space-y-4 text-gray-300">
                                        <div class="flex items-center gap-4">
                                            <span class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">📧</span>
                                            <span class="font-mono text-xl">hello@digesty.vn</span>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <span class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">🌐</span>
                                            <span class="font-mono text-xl">digesty.vn</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-16 opacity-50 text-sm font-light tracking-[0.3em] uppercase">
                                © 2025 Icetea AI & Robotics
                            </div>

                        </div>
                    `
                }
            ],
        },
    ],
};

export const digestyIntroVi: DeckContent = {
    language: 'vi',
    slides: [
        {
            id: 'cover',
            layout: 'cover',
            theme: 'brand',
            showBadge: false,
            title: `
                <div class="relative inline-block mt-10 md:mt-16 z-20">
                    <!-- Main Title: PHỐ AI -->
                    <div class="text-6xl md:text-8xl font-black mb-8 flex justify-center gap-2" style="text-shadow: 0 4px 0 rgba(0,0,0,0.5);">
                        <span class="inline-block -rotate-6 text-[#FF00FF] drop-shadow-[0_0_15px_#FF00FF]">P</span>
                        <span class="inline-block rotate-3 text-[#00FFFF] drop-shadow-[0_0_15px_#00FFFF]">H</span>
                        <span class="inline-block -rotate-3 text-[#FFFF00] drop-shadow-[0_0_15px_#FFFF00]">Ố</span>
                        <span class="inline-block w-8"></span>
                        <span class="inline-block rotate-6 text-[#00FF00] drop-shadow-[0_0_15px_#00FF00]">A</span>
                        <span class="inline-block -rotate-6 text-[#BF00FF] drop-shadow-[0_0_15px_#BF00FF]">I</span>
                    </div>
                    
                    <!-- Tagline: ĐA TRẢI NGHIỆM -->
                    <div class="relative inline-block">
                        <div class="text-3xl md:text-5xl font-bold bg-black/80 px-8 py-3 rounded-xl border-2 border-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.4)] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-yellow-200 animate-pulse">ĐA TRẢI NGHIỆM</span>
                        </div>
                    </div>
                </div>
            `,
            subtitle: 'DIGESTY LEARNING',
            blocks: [],
            content: `
                <!-- Top Header: Logo (Scale bumped 5x) -->
                <div class="fixed top-4 md:top-8 left-0 right-0 z-[100] flex flex-col items-center gap-3 pointer-events-none">
                    <a href="https://digesty.vn" target="_blank" class="pointer-events-auto hover:scale-105 transition-transform duration-300">
                        <img src="/assets/digesty-logo-white-trimmed.webp" alt="Digesty" class="h-12 md:h-20 w-auto drop-shadow-[0_0_25px_rgba(6,182,212,0.6)] opacity-90 hover:opacity-100" />
                    </a>
                </div>

                <!-- Copyright Footer -->
                <div class="fixed bottom-4 left-0 right-0 text-center z-50 pointer-events-none">
                     <p class="text-[10px] text-white/70 uppercase tracking-[0.2em] font-light">© 2025 Digesty.vn</p>
                </div>

                <!-- Darken Overlay for Glow Contrast -->
                <div class="fixed inset-0 bg-black/85 z-0 pointer-events-none"></div>

                <!-- Confetti Layer (Glow Mode - Reduced Density) -->
                <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
                    <!-- Top Left Cluster (Reduced) -->
                    <div class="absolute top-[5%] left-[5%] w-3 h-3 bg-yellow-400 text-yellow-400 confetti-glow rotate-12 rounded-sm animate-float-slow delay-0"></div>
                    <div class="absolute top-[15%] left-[3%] w-3 h-3 bg-red-500 text-red-500 confetti-glow rotate-45 rounded-full animate-float delay-700"></div>
                    <div class="absolute top-[10%] left-[20%] w-2 h-2 bg-purple-400 text-purple-400 confetti-glow rotate-90 animate-float-fast delay-500"></div>
                    
                    <!-- Top Right Cluster (Reduced) -->
                    <div class="absolute top-[5%] right-[5%] w-3 h-1 bg-pink-500 text-pink-500 confetti-glow -rotate-6 animate-twinkle delay-200"></div>
                    <div class="absolute top-[8%] right-[25%] w-4 h-4 bg-yellow-300 text-yellow-300 confetti-glow -rotate-12 opacity-80 animate-float delay-0"></div>
                    <div class="absolute top-[15%] right-[20%] w-3 h-3 bg-indigo-400 text-indigo-400 confetti-glow rotate-45 animate-float delay-300"></div>

                    <!-- Bottom Left Cluster (Reduced) -->
                    <div class="absolute bottom-[20%] left-[15%] w-3 h-4 bg-orange-400 text-orange-400 confetti-glow -rotate-90 animate-twinkle delay-700"></div>
                    <div class="absolute bottom-[5%] left-[25%] w-2 h-2 bg-blue-300 text-blue-300 confetti-glow rotate-12 animate-float delay-100"></div>
                    <div class="absolute bottom-[25%] left-[5%] w-4 h-2 bg-yellow-500 text-yellow-500 confetti-glow rotate-45 animate-twinkle-slow delay-0"></div>

                    <!-- Bottom Right Cluster (Reduced) -->
                    <div class="absolute bottom-[10%] right-[10%] w-3 h-3 bg-purple-500 text-purple-500 confetti-glow rotate-12 animate-float-slow delay-300"></div>
                    <div class="absolute bottom-[5%] right-[30%] w-3 h-3 bg-red-400 text-red-400 confetti-glow rounded-full animate-float delay-200"></div>
                    <div class="absolute bottom-[15%] right-[5%] w-4 h-2 bg-green-500 text-green-500 confetti-glow rotate-90 animate-twinkle-slow delay-700"></div>

                    <!-- Center Scatter (Reduced) -->
                    <div class="absolute top-[40%] left-[15%] w-2 h-2 bg-white/50 text-white confetti-glow rounded-full animate-twinkle delay-0"></div>
                    <div class="absolute bottom-[35%] right-[5%] w-3 h-3 bg-green-200 text-green-200 confetti-glow rounded-full animate-twinkle-slow delay-200"></div>

                    <!-- Random Fills (Reduced) -->
                    <div class="absolute top-[45%] left-[45%] w-2 h-2 bg-blue-400 text-blue-400 confetti-glow rounded-full opacity-50 animate-float delay-700"></div>
                    <div class="absolute top-[30%] right-[40%] w-2 h-2 bg-yellow-300 text-yellow-300 confetti-glow opacity-80 animate-float-slow delay-100"></div>
                    
                    <!-- Detailed Particles (Reduced) -->
                    <div class="absolute top-[18%] left-[45%] w-1 h-1 bg-white text-white confetti-glow rounded-full animate-ping delay-0"></div>
                    <div class="absolute top-[50%] right-[90%] w-1 h-1 bg-cyan-200 text-cyan-200 confetti-glow rounded-full animate-float delay-200"></div>
                </div>

                <div class="flex flex-col items-center justify-center h-full relative z-20">
                    <button class="btn-explore group relative px-10 py-4 bg-transparent overflow-hidden rounded-full font-bold text-xl md:text-2xl tracking-widest text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] border border-cyan-400 hover:scale-105 active:scale-95 transition-all duration-300">
                        <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50 group-hover:opacity-80 transition-opacity"></span>
                        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <span class="relative z-10 flex items-center gap-3">
                            KHÁM PHÁ
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 animate-pulse">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                        <!-- Glow effect -->
                        <div class="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 blur-lg opacity-30 group-hover:opacity-60 transition-opacity -z-10"></div>
                    </button>
                </div>
            `,
            nextItems: ['.btn-explore'],
            customTransition: { type: 'zoom-in' },
            narration: 'Xin chào. Tôi là nhà sáng lập của Digesty - Phố AI Đa Trải Nghiệm. Tôi tạo bài thuyết trình này bằng chính ứng dụng Digesty. Để tôi kể cho bạn nghe câu chuyện... về cách chúng tôi đang thay đổi trải nghiệm AI tại Việt Nam.',
        },
        {
            id: 'contrast',
            layout: 'cover',
            theme: 'dark',
            imageUrl: '/assets/ai_street_market_contrast.png',
            showBadge: false,
            narration: 'Như bạn biết, hầu hết mọi người tiếp cận AI qua chatbot - như ChatGPT hoặc Gemini. Đây là những công cụ cách mạng, nhưng chúng không phù hợp cho mọi trường hợp. Chúng giống như những thư viện lớn, chứa mọi kiến thức, nhưng tĩnh lặng. Bạn độc thoại với ô nhập liệu, và không những phải biết mình muốn gì mà còn phải biết cách diễn đạt nó hiệu quả. Ở chiều ngược lại, phố Digesty mang đến một trải nghiệm hoàn toàn khác - nơi bạn có thể nhìn ngắm, cảm nhận, và lựa chọn. Bạn được phục vụ. Trực quan. Thoải mái. Và dễ dàng.',
            title: `
                <!-- Container for custom split layout with Robust Centering -->
                <div class="relative w-screen -ml-[calc(50vw-50%)] flex flex-col items-center">
                    <div class="w-[90vw] max-w-[1400px] flex flex-col items-center">

                    <!-- Main Headline -->
                    <h2 class="text-5xl md:text-7xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-cyan-100 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] text-center uppercase">
                        Đừng Tra Cứu.<br/><span class="text-yellow-400 drop-shadow-[0_0_20px_rgba(234,179,8,0.6)]">Hãy Dạo Chơi.</span>
                    </h2>

                    <!-- Split Columns -->
                    <div class="grid grid-cols-2 w-full gap-8 md:gap-16">
                        
                        <!-- Left: Library/Chatbot -->
                        <div class="flex flex-col items-center text-center p-8 rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-2xl transition-all hover:bg-black/50 duration-500">
                            <div class="mb-6 text-gray-400 uppercase tracking-widest text-sm font-bold border-b border-gray-600 pb-2">Chatbot Thuần Túy</div>
                            <h3 class="text-3xl md:text-4xl font-bold text-gray-200 mb-6 font-serif tracking-wide">Thư Viện Tĩnh</h3>
                            <p class="text-xl md:text-2xl text-gray-100 font-medium leading-relaxed tracking-wide">
                                Độc thoại với ô nhập liệu.<br/>
                                Phải tự biết mình cần gì.
                            </p>
                            <div class="flex flex-wrap justify-center gap-3 mt-8">
                                <span class="px-4 py-2 rounded-full border border-gray-600 bg-gray-800/50 text-gray-400 text-base font-medium tracking-wide shadow-inner">#Lạnh lùng</span>
                                <span class="px-4 py-2 rounded-full border border-gray-600 bg-gray-800/50 text-gray-400 text-base font-medium tracking-wide shadow-inner">#Bắt buộc động não</span>
                            </div>
                        </div>

                        <!-- Right: Digesty/Street -->
                        <div class="flex flex-col items-center text-center p-8 rounded-3xl bg-cyan-900/60 backdrop-blur-md border border-cyan-400/50 shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all hover:bg-cyan-900/70 duration-500">
                            <div class="mb-6 text-cyan-300 uppercase tracking-widest text-sm font-bold border-b border-cyan-500/50 pb-2">Digesty Experience</div>
                            <h3 class="text-3xl md:text-4xl font-bold text-white mb-6 animate-pulse tracking-wide">Phố AI Sống Động</h3>
                            <p class="text-xl md:text-2xl text-white font-semibold leading-relaxed tracking-wide">
                                 Trải nghiệm và Cảm nhận.<br/>
                                 Nhìn, Chạm và Lựa Chọn.
                            </p>
                            <div class="flex flex-wrap justify-center gap-3 mt-8">
                                <span class="px-4 py-2 rounded-full border border-pink-400 bg-pink-900/40 text-pink-200 text-lg font-bold tracking-wide shadow-[0_0_15px_rgba(244,114,182,0.4)]">#Trực quan</span>
                                <span class="px-4 py-2 rounded-full border border-yellow-400 bg-yellow-900/40 text-yellow-200 text-lg font-bold tracking-wide shadow-[0_0_15px_rgba(250,204,21,0.4)]">#Gợi mở</span>
                                <span class="px-4 py-2 rounded-full border border-cyan-400 bg-cyan-900/40 text-cyan-200 text-lg font-bold tracking-wide shadow-[0_0_15px_rgba(34,211,238,0.4)]">#Thân thuộc</span>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            `,
            blocks: [],
        },
        {
            id: 'problem-updated',
            layout: 'three-column',
            theme: 'dark',
            showBadge: false, // Explicitly hide badge
            narration: 'Để tôi nói thẳng. AI hiện tại có ba vấn đề lớn. Một, nó bắt bạn phải nghĩ trước khi hỏi - cái gọi là "gánh nặng màn hình trắng". Hai, quá nhiều ứng dụng lẻ tẻ, mỗi thứ một nơi, không ai nói chuyện với ai. Và ba, quan trọng nhất - nó quá Tây. Nó không hiểu văn hóa của chúng ta. Digesty ra đời để giải quyết cả ba điều đó.',
            title: `<h1 class="text-5xl font-black text-center mb-12 tracking-tight bg-gradient-to-r from-red-400 via-white to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">3 Rào Cản Lớn</h1>`,
            columns: [
                {
                    icon: '/assets/neon_keyboard.png',
                    entity: 'AI Chatbot',
                    title: 'Gánh Nặng "Màn Hình Trắng"',
                    content: `
                        <div class="space-y-4">
                            <div class="bg-gray-800/30 p-3 rounded-lg border border-gray-700/50">
                                <!-- Removed Thực trạng -->

                                <p class="text-gray-300 text-sm">Phải <strong class="text-white">vắt óc</strong>. Phải <strong class="text-white">gõ phím</strong>. Phải <strong class="text-white">đọc</strong> cả biển chữ.</p>
                            </div>
                        </div>
                    `,
                    color: 'text-gray-100', // Uniform color
                },
                {
                    icon: '/assets/neon_maze.png',
                    entity: 'AI Apps Lẻ Tẻ',
                    title: 'Ma Trận Lựa Chọn',
                    content: `
                        <div class="space-y-4">
                            <div class="bg-gray-800/30 p-3 rounded-lg border border-gray-700/50">
                                <!-- Removed Thực trạng -->

                                <p class="text-gray-300 text-sm"><strong class="text-white">Phân mảnh</strong>. <strong class="text-white">Loạn app</strong>. <strong class="text-white">Thượng vàng hạ cám</strong>.</p>
                            </div>
                        </div>
                    `,
                    color: 'text-gray-100', // Uniform color
                },
                {
                    icon: '/assets/neon_lantern.png',
                    entity: 'AI "Tây"',
                    title: 'Khoảng Cách Thấu Cảm',
                    content: `
                        <div class="space-y-4">
                            <div class="bg-gray-800/30 p-3 rounded-lg border border-gray-700/50">
                                <!-- Removed Thực trạng -->

                                <p class="text-gray-300 text-sm"><strong class="text-white">Quá "Tây"</strong>. <strong class="text-white">Lệch pha</strong>. <strong class="text-white">Thiếu bản sắc văn hóa</strong>.</p>
                            </div>
                        </div>
                    `,
                    color: 'text-gray-100', // Uniform color
                }
            ],
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="flex flex-col items-center animate-fade-in-up delay-500">
                            <!-- Connector -->
                            <div class="flex flex-col items-center mb-4 opacity-60">
                                <div class="h-6 w-px bg-gradient-to-b from-transparent to-white/50"></div>
                                <div class="my-1 text-[10px] font-bold tracking-[0.2em] text-cyan-200/80 uppercase border border-cyan-500/30 px-3 py-0.5 rounded-full bg-cyan-900/20 backdrop-blur">
                                    LỐI ĐI RIÊNG
                                </div>
                                <div class="h-3 w-px bg-gradient-to-b from-white/50 to-transparent"></div>
                            </div>
                            
                            <!-- Main Box -->
                            <div class="inline-flex items-center gap-6 bg-white/5 px-10 py-4 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/10 transition-all duration-300">
                                <!-- Premium Logo -->
                                <img src="/assets/digesty-logo-white-trimmed.webp" alt="Digesty" class="h-10 object-contain opacity-100 hover:scale-105 transition-all duration-300" />
                                
                                <!-- Divider -->
                                <div class="h-6 w-px bg-white/10"></div>
                                
                                <!-- Adjectives -->
                                <div class="flex items-center gap-4 text-sm font-bold tracking-widest uppercase">
                                    <span class="text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">Thân Thiện</span>
                                    <span class="text-gray-600 font-light">|</span>
                                    <span class="text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.5)]">Đặc Sắc</span>
                                    <span class="text-gray-600 font-light">|</span>
                                    <span class="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">Thuần Việt</span>
                                </div>
                            </div>
                        </div>
                    `
                }
            ],
        },
        {
            id: 'reveal',
            layout: 'reveal',
            theme: 'dark',
            imageUrl: '/assets/digesty_street.jpg',
            narration: 'Và đây là Digesty. Phố AI đầu tiên của người Việt.',
            title: `<div class="flex flex-col items-center gap-6"><span class="text-2xl md:text-4xl font-light tracking-[0.5em] text-cyan-100/90 uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Introducing</span><img src="/assets/digesty-logo-white-trimmed.webp" alt="Digesty" class="w-[80vw] max-w-3xl h-auto drop-shadow-[0_0_35px_rgba(34,211,238,0.5)] animate-pulse" /></div>`,
            content: '',
            blocks: [],
        },
        {
            id: 'ecosystem',
            layout: 'centered',
            theme: 'dark',
            showBadge: false,
            narration: 'Hãy tưởng tượng một con phố. Bên này là Phố Giải Trí - nơi bạn có thể hóng hít tin showbiz, xem bói Tarot, hay chụp ảnh nghệ thuật với AI. Bên kia là Phố Tiện Ích - nơi bạn học tiếng Anh, tra cứu thuế, hay tìm hiểu sức khỏe. Tất cả kết nối với nhau. Một tài khoản duy nhất. Và quan trọng nhất - được thiết kế bởi người Việt, cho người Việt.',
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="w-full max-w-[1400px] -mt-8">
                            <!-- Header -->
                            <h2 class="text-4xl md:text-6xl font-black text-center mb-12 uppercase tracking-tight">
                                <span class="text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-blue-200 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                                    PHỐ DIGESTY CÓ GÌ?
                                </span>
                            </h2>

                            <!-- Main Container -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                                
                                <!-- LEFT COL: PHỐ GIẢI TRÍ (Warm) -->
                                <div class="bg-gradient-to-b from-red-900/20 to-transparent border border-red-500/20 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-red-500/40 transition-colors">
                                    <div class="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-5 mix-blend-overlay"></div>
                                    
                                    <!-- Col Header -->
                                    <div class="text-2xl md:text-3xl font-black text-center mb-8 uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400 drop-shadow-lg">
                                        PHỐ GIẢI TRÍ
                                    </div>

                                    <div class="space-y-8 relative z-10">
                                        <!-- Trends -->
                                        <div>
                                            <div class="flex items-center gap-3 mb-3">
                                                <span class="text-2xl">🔥</span>
                                                <h3 class="text-xl font-bold text-red-100">DIGESTY TRENDS</h3>
                                            </div>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-3 py-1 rounded-full border border-red-500/30 bg-red-900/20 text-red-200 text-xs md:text-sm font-medium hover:bg-red-900/40 transition-colors">Hóng hít</span>
                                                <span class="px-3 py-1 rounded-full border border-red-500/30 bg-red-900/20 text-red-200 text-xs md:text-sm font-medium hover:bg-red-900/40 transition-colors">Showbiz</span>
                                                <span class="px-3 py-1 rounded-full border border-red-500/30 bg-red-900/20 text-red-200 text-xs md:text-sm font-medium hover:bg-red-900/40 transition-colors">Troll bóng đá</span>
                                                <span class="px-3 py-1 rounded-full border border-red-500/30 bg-red-900/20 text-red-200 text-xs md:text-sm font-medium hover:bg-red-900/40 transition-colors">Từ điển Gen Z</span>
                                            </div>
                                        </div>

                                        <!-- Lifestyle -->
                                        <div>
                                            <div class="flex items-center gap-3 mb-3">
                                                <span class="text-2xl">📸</span>
                                                <h3 class="text-xl font-bold text-yellow-100">DIGESTY LIFESTYLE</h3>
                                            </div>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-900/20 text-yellow-200 text-xs md:text-sm font-medium hover:bg-yellow-900/40 transition-colors">Ảnh viện Nghệ thuật</span>
                                                <span class="px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-900/20 text-yellow-200 text-xs md:text-sm font-medium hover:bg-yellow-900/40 transition-colors">Bạn đồng hành AI</span>
                                                <span class="px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-900/20 text-yellow-200 text-xs md:text-sm font-medium hover:bg-yellow-900/40 transition-colors">Trắc nghiệm Văn hoá</span>
                                            </div>
                                        </div>

                                        <!-- Oracle -->
                                        <div>
                                            <div class="flex items-center gap-3 mb-3">
                                                <span class="text-2xl">🔮</span>
                                                <h3 class="text-xl font-bold text-fuchsia-100">DIGESTY ORACLE</h3>
                                            </div>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-900/20 text-fuchsia-200 text-xs md:text-sm font-medium hover:bg-fuchsia-900/40 transition-colors">Tarot</span>
                                                <span class="px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-900/20 text-fuchsia-200 text-xs md:text-sm font-medium hover:bg-fuchsia-900/40 transition-colors">Thần số học</span>
                                                <span class="px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-900/20 text-fuchsia-200 text-xs md:text-sm font-medium hover:bg-fuchsia-900/40 transition-colors">Chiêm tinh</span>
                                                <span class="px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-900/20 text-fuchsia-200 text-xs md:text-sm font-medium hover:bg-fuchsia-900/40 transition-colors">Trắc nghiệm Tính cách</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- RIGHT COL: PHỐ TIỆN ÍCH (Cool) -->
                                <div class="bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-500/20 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-blue-500/40 transition-colors">
                                    <div class="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-5 mix-blend-overlay"></div>
                                    
                                    <!-- Col Header -->
                                    <div class="text-2xl md:text-3xl font-black text-center mb-8 uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 drop-shadow-lg">
                                        PHỐ TIỆN ÍCH
                                    </div>

                                    <div class="space-y-8 relative z-10">
                                        <!-- Learn -->
                                        <div>
                                            <div class="flex items-center gap-3 mb-3">
                                                <span class="text-2xl">🎓</span>
                                                <h3 class="text-xl font-bold text-blue-100">DIGESTY LEARN</h3>
                                            </div>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-xs md:text-sm font-medium hover:bg-blue-900/40 transition-colors">AI</span>
                                                <span class="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-xs md:text-sm font-medium hover:bg-blue-900/40 transition-colors">English</span>
                                                <span class="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-xs md:text-sm font-medium hover:bg-blue-900/40 transition-colors">SAT</span>
                                                <span class="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-xs md:text-sm font-medium hover:bg-blue-900/40 transition-colors">STEM</span>
                                                <span class="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-xs md:text-sm font-medium hover:bg-blue-900/40 transition-colors">IELTS</span>
                                                <span class="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-xs md:text-sm font-medium hover:bg-blue-900/40 transition-colors">Du học</span>
                                            </div>
                                        </div>

                                        <!-- Health -->
                                        <div>
                                            <div class="flex items-center gap-3 mb-3">
                                                <span class="text-2xl">⚕️</span>
                                                <h3 class="text-xl font-bold text-teal-100">DIGESTY HEALTH</h3>
                                            </div>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-3 py-1 rounded-full border border-teal-500/30 bg-teal-900/20 text-teal-200 text-xs md:text-sm font-medium hover:bg-teal-900/40 transition-colors">Huấn luyện viên ảo</span>
                                                <span class="px-3 py-1 rounded-full border border-teal-500/30 bg-teal-900/20 text-teal-200 text-xs md:text-sm font-medium hover:bg-teal-900/40 transition-colors">Dinh dưỡng</span>
                                                <span class="px-3 py-1 rounded-full border border-teal-500/30 bg-teal-900/20 text-teal-200 text-xs md:text-sm font-medium hover:bg-teal-900/40 transition-colors">Tủ thuốc</span>
                                            </div>
                                        </div>

                                        <!-- Biz -->
                                        <div>
                                            <div class="flex items-center gap-3 mb-3">
                                                <span class="text-2xl">💼</span>
                                                <h3 class="text-xl font-bold text-indigo-100">DIGESTY BIZ</h3>
                                            </div>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-900/20 text-indigo-200 text-xs md:text-sm font-medium hover:bg-indigo-900/40 transition-colors">Tính Thuế</span>
                                                <span class="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-900/20 text-indigo-200 text-xs md:text-sm font-medium hover:bg-indigo-900/40 transition-colors">Thủ tục KD</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Footer Bar -->
                            <div class="mt-8 pt-6 border-t border-white/10 text-center">
                                <div class="inline-flex items-center gap-4 text-xs md:text-sm font-medium tracking-[0.2em] text-white/50 uppercase">
                                    <span>MỘT ID DUY NHẤT</span>
                                    <span class="text-cyan-500/50">•</span>
                                    <span>ĐỐI TÁC CHỌN LỌC</span>
                                    <span class="text-cyan-500/50">•</span>
                                    <span>AN TOÀN & ĐẠO ĐỨC</span>
                                </div>
                            </div>

                        </div>
                    `
                },
            ],
        },
        {
            id: 'product-showcase',
            layout: 'carousel-3d',
            theme: 'dark',
            showBadge: false,
            narration: 'Đây không chỉ là ý tưởng. Chúng tôi đã xây dựng nó. Bạn có thể chạm, lướt, và cảm nhận ngay bây giờ.',
            title: 'CHẠM. LƯỚT. VÀ CẢM NHẬN.',
            carouselItems: [
                {
                    title: 'Digesty Home',
                    desc: 'Cửa ngõ vào mọi tiện ích.',
                    icon: '🌐',
                    imageUrl: '/assets/digesty_rewind_showcase.png',
                    color: 'bg-cyan-900/80',
                },
                {
                    title: 'Photo Studio',
                    desc: 'Ảnh nghệ thuật AI.',
                    icon: '📸',
                    imageUrl: '/assets/digesty_avatar_studio.png',
                    color: 'bg-indigo-900/80',
                },
                {
                    title: 'Tarot Oracle',
                    desc: 'Giải mã bí ẩn vũ trụ.',
                    icon: '🔮',
                    imageUrl: '/assets/digesty_tarot.png',
                    color: 'bg-purple-900/80',
                },
            ],
        },
        {
            id: 'growth-flywheel',
            layout: 'centered',
            theme: 'dark',
            showBadge: false,
            narration: 'Có người hỏi tôi: mô hình kinh doanh là gì? Đơn giản thôi. Giải trí thu hút người dùng - vì ai cũng thích vui. Tiện ích giữ chân họ - vì ai cũng cần thiết thực. Ở giữa là một hệ thống nhận diện thống nhất, hiểu bạn ngày càng sâu hơn. Đó là bánh đà của chúng tôi.',
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="w-full max-w-[1200px] flex flex-col items-center">
                            <!-- Header -->
                            <h2 class="text-4xl md:text-6xl font-black text-center mb-16 uppercase tracking-tight">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-green-200 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                                    BÁNH ĐÀ TĂNG TRƯỞNG
                                </span>
                            </h2>

                            <!-- The Flywheel Visual -->
                            <div class="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
                                
                                <!-- LEFT ENGINE: LIFESTYLE (Warm) -->
                                <div class="relative group">
                                    <div class="absolute inset-0 bg-red-500/20 blur-[50px] rounded-full group-hover:bg-red-500/30 transition-all duration-700"></div>
                                    <div class="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-red-500/30 bg-gradient-to-br from-red-900/40 to-black/80 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm relative z-10 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                                        <div class="text-5xl mb-4 animate-bounce-slow">🔥</div>
                                        <h3 class="text-2xl font-black text-red-100 uppercase mb-2">PHỐ GIẢI TRÍ</h3>
                                        <p class="text-red-200/70 text-sm font-bold tracking-widest mb-4">ENGINE 1</p>
                                        <div class="bg-red-500/20 rounded-xl p-3 w-full border border-red-500/30">
                                            <div class="text-xl font-bold text-white mb-1">THU HÚT DỄ DÀNG</div>
                                            <div class="text-xs text-red-200">Vui vẻ • Lan truyền</div>
                                        </div>
                                    </div>
                                    
                                    <!-- Orbiting Particle -->
                                    <div class="absolute inset-0 animate-spin-slow pointer-events-none">
                                        <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(220,38,38,1)]"></div>
                                    </div>
                                </div>

                                <!-- ARROW FLOW Middle -->
                                <div class="hidden md:flex flex-col items-center justify-center space-y-2 z-20">
                                     <div class="w-32 h-1 bg-gradient-to-r from-red-500/50 to-blue-500/50 rounded-full"></div>
                                     <div class="text-xs text-white/40 uppercase tracking-[0.3em] whitespace-nowrap">Chuyển đổi</div>
                                </div>

                                <!-- RIGHT ENGINE: PROFESSIONAL (Cool) -->
                                <div class="relative group">
                                    <div class="absolute inset-0 bg-blue-500/20 blur-[50px] rounded-full group-hover:bg-blue-500/30 transition-all duration-700"></div>
                                    <div class="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-blue-500/30 bg-gradient-to-bl from-blue-900/40 to-black/80 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm relative z-10 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                                        <div class="text-5xl mb-4 animate-pulse">💎</div>
                                        <h3 class="text-2xl font-black text-blue-100 uppercase mb-2">PHỐ TIỆN ÍCH</h3>
                                        <p class="text-blue-200/70 text-sm font-bold tracking-widest mb-4">ENGINE 2</p>
                                        <div class="bg-blue-500/20 rounded-xl p-3 w-full border border-blue-500/30">
                                            <div class="text-xl font-bold text-white mb-1">GẮN KẾT TRỌN ĐỜI</div>
                                            <div class="text-xs text-blue-200">Thiết thực • Sâu sắc</div>
                                        </div>
                                    </div>

                                    <!-- Orbiting Particle -->
                                    <div class="absolute inset-0 animate-spin-reverse-slow pointer-events-none">
                                        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(37,99,235,1)]"></div>
                                    </div>
                                </div>

                                <!-- CENTER: UNIFIED ID (The Bridge) -->
                                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center justify-center">
                                    <div class="bg-black/90 border border-white/20 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-[0_0_50px_rgba(168,85,247,0.4)] flex flex-col items-center">
                                        <span class="text-3xl mb-1">🧬</span>
                                        <span class="text-fuchsia-300 font-bold uppercase tracking-widest text-xs whitespace-nowrap">UNIFIED ID</span>
                                    </div>
                                </div>
                                
                                <!-- Mobile Connector Visual (visible only on mobile) -->
                                <div class="md:hidden text-2xl text-white/20 my-[-20px]">⬇️</div>

                            </div>

                            <!-- Bottom Caption -->
                            <div class="mt-16 text-center max-w-2xl mx-auto">
                                <p class="text-xl text-white/80 font-light leading-relaxed">
                                    Dùng <span class="text-red-300 font-bold">Giải trí</span> để thu hút người dùng giá rẻ.<br/>
                                    Dùng <span class="text-blue-300 font-bold">Tiện ích</span> để tạo ra giá trị bền vững.
                                </p>
                            </div>
                        </div>
                    `
                },
            ],
        },
        {
            id: 'tech-core',
            layout: 'centered',
            theme: 'dark',
            showBadge: false,
            narration: 'Nhưng đằng sau giao diện đẹp là công nghệ thực sự. Chúng tôi có kho dữ liệu bản địa - hơn năm triệu bài báo, thư viện pháp luật, và cả những thứ như thơ lục bát, nói lái, teen code. Chúng tôi có hệ thống xử lý riêng - biết ghi nhớ, biết cá nhân hóa. Và chúng tôi có DigestGraph - công nghệ độc quyền biến thông tin thành tri thức trực quan.',
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="w-full max-w-[1200px] flex flex-col items-center">
                            <h2 class="text-4xl md:text-6xl font-black text-center mb-12 uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-200 to-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                                CÔNG NGHỆ & DỮ LIỆU
                            </h2>

                            <!-- 3-Block Process Flow -->
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full relative">
                                
                                <!-- Connecting Flow Line (Desktop) -->
                                <div class="hidden lg:block absolute top-[40%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent -z-10"></div>

                                <!-- BLOCK 1: INPUT (Native Data) -->
                                <div class="bg-black/60 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col items-center group hover:border-cyan-500/50 transition-all duration-500 relative overflow-hidden">
                                    <!-- Badge -->
                                    <div class="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-cyan-900/50 border border-cyan-500/30 text-cyan-300 rounded-full z-10 backdrop-blur-md">
                                        TẦNG DỮ LIỆU
                                    </div>

                                    <!-- Visual: Image -->
                                    <div class="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-cyan-500/20 group-hover:scale-[1.02] transition-transform duration-700">
                                        <div class="absolute inset-0 bg-cyan-500/10 mix-blend-overlay z-10"></div>
                                        <img src="/assets/tech_input.png" alt="Input Layer" class="w-full h-full object-cover" />
                                    </div>
                                    
                                    <h3 class="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-wide">1. DỮ LIỆU BẢN ĐỊA</h3>
                                    
                                    <ul class="space-y-3 text-sm text-gray-300 text-left w-full px-2">
                                        <li class="flex items-start gap-3">
                                            <span class="text-cyan-500 mt-0.5">❖</span>
                                            <span><strong>5M+ bài báo</strong> & Thư viện pháp luật Việt Nam.</span>
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="text-cyan-500 mt-0.5">❖</span>
                                            <span><strong>Ngôn ngữ học:</strong> Thơ lục bát, nói lái, teen code, thành ngữ, câu đối...</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- BLOCK 2: PROCESS (Digesty System) -->
                                <div class="bg-black/60 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col items-center group hover:border-purple-500/50 transition-all duration-500 relative z-10">
                                    <!-- Badge -->
                                    <div class="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-purple-900/50 border border-purple-500/30 text-purple-300 rounded-full z-10 backdrop-blur-md">
                                        TẦNG XỬ LÝ
                                    </div>

                                    <!-- Visual: Image -->
                                    <div class="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-purple-500/20 group-hover:scale-[1.02] transition-transform duration-700">
                                        <div class="absolute inset-0 bg-purple-500/10 mix-blend-overlay z-10"></div>
                                        <img src="/assets/tech_process.png" alt="Process Layer" class="w-full h-full object-cover" />
                                    </div>

                                    <h3 class="text-xl font-bold text-purple-400 mb-4 uppercase tracking-wide">2. HỆ THỐNG XỬ LÝ</h3>
                                    
                                    <ul class="space-y-3 text-sm text-gray-300 text-left w-full px-2">
                                        <li class="flex items-start gap-3">
                                            <span class="text-purple-500 mt-0.5">✦</span>
                                            <span><strong>DigestAgents:</strong> Hệ thống đa tác tử trích xuất, tổng hợp & kiểm duyệt.</span>
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="text-purple-500 mt-0.5">✦</span>
                                            <span><strong>DigestMemo:</strong> Ghi nhớ trọn đời & Truy xuất chọn lọc theo ngữ cảnh.</span>
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="text-purple-500 mt-0.5">✦</span>
                                            <span><strong>DigestPersona:</strong> Cá nhân hóa đa chiều - Hợp nhất chân dung từ hệ sinh thái ứng dụng.</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- BLOCK 3: OUTPUT (Visual Experience) -->
                                <div class="bg-black/60 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col items-center group hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden">
                                     <!-- Badge -->
                                    <div class="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-blue-900/50 border border-blue-500/30 text-blue-300 rounded-full z-10 backdrop-blur-md">
                                        TẦNG HIỂN THỊ
                                    </div>

                                     <!-- Visual: Image -->
                                    <div class="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-blue-500/20 group-hover:scale-[1.02] transition-transform duration-700">
                                        <div class="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10"></div>
                                        <img src="/assets/tech_output.png" alt="Output Layer" class="w-full h-full object-cover" />
                                    </div>

                                    <h3 class="text-xl font-bold text-blue-400 mb-4 uppercase tracking-wide">3. TRẢI NGHIỆM THỊ GIÁC</h3>
                                    
                                    <div class="text-center md:text-left w-full px-2">
                                         <div class="text-lg font-bold text-white mb-2">DigestGRAPH™</div>
                                         <p class="text-sm text-gray-400 leading-relaxed">
                                             Độc quyền sơ đồ hóa dòng chảy sự kiện. Biến dữ liệu thô thành <span class="text-blue-300 font-bold">Sơ Đồ Tri Thức</span> trực quan.
                                         </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    `
                }
            ],
        },
        {
            id: 'roadmap-vision',
            layout: 'centered',
            theme: 'dark',
            showBadge: false,
            narration: 'Lộ trình của chúng tôi rất rõ ràng. Đầu năm hai nghìn hai sáu, ra mắt tại Việt Nam - với mục tiêu trở thành ứng dụng AI quốc dân. Sau đó, mở rộng sang Hàn Quốc, Nhật Bản - những thị trường có văn hóa tương đồng. Và xa hơn nữa - chúng tôi muốn góp phần xây dựng AI có chủ quyền cho Việt Nam. Không phụ thuộc, không bị động.',
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="w-full max-w-[1200px] flex flex-col items-center">
                            <h2 class="text-3xl md:text-5xl font-black text-center mb-16 uppercase tracking-tight">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-blue-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                    TẦM NHÌN & LỘ TRÌNH CHIẾN LƯỢC
                                </span>
                            </h2>

                            <div class="relative w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
                                
                                <!-- Connecting Line (Desktop) -->
                                <div class="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-gradient-to-r from-red-600/50 via-purple-500/50 to-cyan-500/50 rounded-full z-0"></div>

                                <!-- Phase 1: Vietnam -->
                                <div class="relative z-10 flex-1 flex flex-col items-center text-center group w-full md:w-auto">
                                    <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-red-900/80 to-black border border-red-500/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(220,38,38,0.3)] group-hover:scale-110 transition-transform duration-500">
                                        <span class="text-4xl">🇻🇳</span>
                                    </div>
                                    <div class="bg-red-900/30 px-4 py-1 rounded-full border border-red-500/30 text-red-200 text-xs font-bold mb-3">01/01/2026</div>
                                    <h3 class="text-xl font-bold text-white uppercase mb-2">AI QUỐC DÂN</h3>
                                    <p class="text-gray-400 text-sm max-w-[250px] leading-relaxed">
                                        Ra mắt với mục tiêu trở thành <strong>ứng dụng AI quốc dân</strong> của Việt Nam.
                                    </p>
                                </div>

                                <!-- Phase 2: Global -->
                                <div class="relative z-10 flex-1 flex flex-col items-center text-center group w-full md:w-auto">
                                    <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-900/80 to-black border border-blue-500/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform duration-500 delay-100">
                                        <span class="text-4xl">🌏</span>
                                    </div>
                                    <div class="bg-blue-900/30 px-4 py-1 rounded-full border border-blue-500/30 text-blue-200 text-xs font-bold mb-3">01/04/2026</div>
                                    <h3 class="text-xl font-bold text-white uppercase mb-2">VƯƠN RA BIỂN LỚN</h3>
                                    <p class="text-gray-400 text-sm max-w-[250px] leading-relaxed">
                                        Mở rộng <strong>Hàn, Nhật</strong>. Xuất khẩu công nghệ "Phi địa lý".
                                    </p>
                                </div>

                                <!-- Phase 3: Sovereign AI -->
                                <div class="relative z-10 flex-1 flex flex-col items-center text-center group w-full md:w-auto">
                                    <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-900/80 to-black border border-purple-500/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform duration-500 delay-200">
                                        <span class="text-4xl">🛡️</span>
                                    </div>
                                    <div class="bg-purple-900/30 px-4 py-1 rounded-full border border-purple-500/30 text-purple-200 text-xs font-bold mb-3">VISION</div>
                                    <h3 class="text-xl font-bold text-white uppercase mb-2">AI CHỦ QUYỀN</h3>
                                    <p class="text-gray-400 text-sm max-w-[250px] leading-relaxed">
                                        Hiện thực hoá chiến lược <strong>AI Chủ Quyền</strong>. Đảm bảo an ninh dữ liệu Quốc gia.
                                    </p>
                                </div>

                            </div>
                            
                            <!-- Bottom Note -->
                            <div class="mt-16 p-6 bg-white/5 rounded-2xl border border-white/10 max-w-3xl text-center">
                                <p class="text-lg text-gray-300 italic">
                                    "Phụng sự Việt Nam để Hoàn thiện Sản phẩm.<br/>
                                    Chinh phục Quốc tế để Tăng trưởng Doanh thu."
                                </p>
                            </div>
                        </div>
                    `
                }
            ],
        },
        {
            id: 'team-company',
            layout: 'centered',
            theme: 'dark',
            showBadge: false,
            narration: 'Đội ngũ của chúng tôi đến từ Icetea Labs - một trong những venture studio hàng đầu Đông Nam Á. Hơn hai mươi kỹ sư và chuyên gia, được đào tạo từ Bắc Kinh, Seoul, Monash, Bách Khoa, FPT. Chúng tôi không thiếu năng lực. Điều chúng tôi cần là cơ hội để chứng minh.',
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="w-full max-w-[1200px] flex flex-col items-center">
                             <!-- Header -->
                            <h2 class="text-3xl md:text-5xl font-black text-center mb-16 uppercase tracking-tight text-white/90">
                                ĐỘI NGŨ & BỆ PHÓNG
                            </h2>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
                                
                                <!-- Left: Company Info -->
                                <div class="bg-gradient-to-br from-blue-900/40 to-black p-10 rounded-3xl border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] flex flex-col justify-center h-full text-center md:text-left backdrop-blur-sm">
                                    <div class="mb-4 text-blue-400 font-bold tracking-widest text-sm uppercase">Một sản phẩm của</div>
                                    <h3 class="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                                        Icetea AI & <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Robotics</span>
                                    </h3>
                                    <div class="w-20 h-1 bg-blue-500 mb-6 mx-auto md:mx-0"></div>
                                    <p class="text-xl text-gray-300 leading-relaxed mb-2">
                                        Thành viên thuộc <strong>Icetea Labs</strong>
                                    </p>
                                    <p class="text-gray-400 font-light text-base">
                                        Tech Venture Studio hàng đầu Đông Nam Á.
                                    </p>
                                </div>

                                <!-- Right: Team Credentials -->
                                <div class="flex flex-col gap-6">
                                    <!-- Scale -->
                                    <div class="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                                        <div class="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-4xl flex-shrink-0">👥</div>
                                        <div>
                                            <div class="text-4xl font-black text-white mb-1">20+</div>
                                            <div class="text-blue-200 text-sm font-bold uppercase tracking-wider">Kỹ sư AI & Chuyên gia</div>
                                        </div>
                                    </div>

                                    <!-- Pedigree Section -->
                                    <div class="bg-white/5 rounded-2xl border border-white/10 p-6 flex-1 flex flex-col justify-center">
                                        <div class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Xuất thân từ các trường Đại học danh tiếng</div>
                                        
                                        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                            <!-- Peking -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 col-span-2 lg:col-span-2">
                                                <div class="h-14 w-14 flex items-center justify-center p-1">
                                                    <img src="/assets/logos/peking.png" alt="Peking" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">ĐH Bắc Kinh</span>
                                            </div>
                                            
                                            <!-- SNU -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div class="h-14 w-14 flex items-center justify-center p-2 bg-[#0F0F70] rounded-full">
                                                    <img src="/assets/logos/snu.png" alt="SNU" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">ĐH QG Seoul</span>
                                            </div>

                                            <!-- Monash -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div class="h-14 w-14 flex items-center justify-center p-1">
                                                    <img src="/assets/logos/monash.png" alt="Monash" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">ĐH Monash (Úc)</span>
                                            </div>

                                            <!-- HUST -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div class="h-14 w-14 flex items-center justify-center p-1">
                                                    <img src="/assets/logos/hust.png" alt="HUST" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">ĐH Bách Khoa</span>
                                            </div>

                                            <!-- UET -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div class="h-14 w-14 flex items-center justify-center p-1">
                                                    <img src="/assets/logos/uet.png" alt="UET" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">ĐH Công Nghệ</span>
                                            </div>

                                            <!-- FTU -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div class="h-14 w-14 flex items-center justify-center p-1">
                                                    <img src="/assets/logos/ftu.png" alt="FTU" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">ĐH Ngoại Thương</span>
                                            </div>

                                            <!-- FPT -->
                                            <div class="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div class="h-14 w-14 flex items-center justify-center p-1">
                                                    <img src="/assets/logos/fpt.png" alt="FPT" class="h-full w-full object-contain" />
                                                </div>
                                                <span class="text-gray-800 text-xs font-bold text-center">ĐH FPT</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    `
                }
            ],
        },
        {
            id: 'contact',
            layout: 'centered',
            theme: 'dark',
            showBadge: false,
            narration: 'Nếu bạn tin vào câu chuyện này như tôi, hãy liên hệ. Email hello at digesty chấm vn. Hoặc đơn giản - trải nghiệm thử tại digesty chấm vn. Cảm ơn bạn đã lắng nghe.',
            blocks: [
                {
                    type: 'html',
                    content: `
                        <div class="w-full max-w-[1000px] flex flex-col items-center text-center">

                            <!-- Main Call to Action -->
                            <h2 class="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-cyan-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                    HỢP TÁC KIẾN TẠO <br/> TƯƠNG LAI SỐ
                                </span>
                            </h2>

                            <div class="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-12"></div>

                            <!-- Founder & Contact -->
                            <div class="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl w-full max-w-2xl flex flex-col md:flex-row items-center gap-10 hover:bg-white/10 transition-colors duration-500">
                                
                                <!-- Visual: AI Connect Core -->
                                <div class="w-32 h-32 relative flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    <!-- Outer Glow -->
                                    <div class="absolute inset-0 bg-blue-500/20 blur-[40px] rounded-full animate-pulse"></div>
                                    
                                    <!-- Spinning Rings -->
                                    <div class="absolute inset-0 border border-cyan-500/30 rounded-full animate-[spin_8s_linear_infinite]"></div>
                                    <div class="absolute inset-2 border border-dashed border-purple-500/40 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
                                    
                                    <!-- Core Container -->
                                    <div class="w-20 h-20 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] relative overflow-hidden rotate-45 z-10">
                                        <!-- Inner Shine -->
                                        <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/10 to-transparent"></div>
                                        
                                        <!-- Icon: Paper Plane (Send) -->
                                        <div class="-rotate-45">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <!-- Info -->
                                <div class="text-left flex-1">
                                    <h3 class="text-3xl font-bold text-white mb-6">Liên Hệ</h3>
                                    
                                    <div class="space-y-4 text-gray-300">
                                        <div class="flex items-center gap-4">
                                            <span class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">📧</span>
                                            <span class="font-mono text-xl">hello@digesty.vn</span>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <span class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">🌐</span>
                                            <span class="font-mono text-xl">digesty.vn</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-16 opacity-50 text-sm font-light tracking-[0.3em] uppercase">
                                © 2025 Icetea AI & Robotics
                            </div>

                        </div>
                    `
                }
            ],
        },
    ],
};
