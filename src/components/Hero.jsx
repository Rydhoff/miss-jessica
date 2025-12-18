import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
    const titleRef = useScrollAnimation();
    const subtitleRef = useScrollAnimation();

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 bg-beige" id="hero">
            {/* Background decorative elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Pattern */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
              radial-gradient(circle at 20% 30%, var(--color-sage-light) 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, var(--color-sage-light) 1px, transparent 1px)
            `,
                        backgroundSize: '60px 60px'
                    }}
                />
                {/* Gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
              radial-gradient(ellipse at 30% 20%, rgba(141, 163, 153, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(212, 201, 181, 0.2) 0%, transparent 50%),
              linear-gradient(180deg, var(--color-beige) 0%, rgba(245, 241, 232, 0.95) 100%)
            `
                    }}
                />
            </div>

            <div className="relative z-10 text-center flex flex-col items-center gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm text-gray-600 border border-sage-light/20 animate-float">
                    <span>💐</span>
                    <span>Ucapan Perpisahan</span>
                </div>

                {/* Title */}
                <h1
                    ref={titleRef}
                    className="fade-in text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-charcoal"
                >
                    Thank You, <span className="text-sage-dark relative">
                        Miss Jessica
                        <span className="absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-sage-light to-gold opacity-40 rounded"></span>
                    </span>
                </h1>

                {/* Subtitle */}
                <p
                    ref={subtitleRef}
                    className="fade-in delay-2 text-lg sm:text-xl lg:text-lg text-gray-500 max-w-2xl font-light"
                >
                    Untuk ilmu, kesabaran, dan fondasi berpikir logis yang telah Miss ajarkan
                </p>

                {/* Decorative Flowchart */}
                <div className="flex items-center gap-0 mt-8 opacity-0 animate-[fadeInUp_0.8s_ease_0.6s_forwards]">
                    {['Mulai', 'Belajar', 'Berkembang'].map((label, index) => (
                        <div key={label} className="flex items-center">
                            <div className="px-4 py-2 bg-white/80 border-2 border-sage-light rounded-lg font-mono text-sm text-sage-dark hover:bg-sage-light hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm">
                                {label}
                            </div>
                            {index < 2 && (
                                <div className="w-8 sm:w-10 h-0.5 bg-gradient-to-r from-sage-light to-sage relative">
                                    <span className="absolute right-0 top-1/2 -translate-y-1/2 border-4 border-transparent border-l-sage border-l-[6px]"></span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeIn_1s_ease_1s_forwards]">
                    <div className="w-px h-10 bg-gradient-to-b from-transparent via-sage to-transparent animate-scroll-pulse"></div>
                    <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll untuk melihat</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
