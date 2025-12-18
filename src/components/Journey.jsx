import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const steps = [
    {
        icon: '📊',
        title: 'Flowchart',
        description: 'Belajar memvisualisasikan logika dan proses',
        code: 'if (kondisi) → aksi',
    },
    {
        icon: '🧠',
        title: 'Logic',
        description: 'Membangun fondasi berpikir komputasional',
        code: 'input → proses → output',
    },
    {
        icon: '💻',
        title: 'C++',
        description: 'Menguasai syntax dan structured programming',
        code: '#include <iostream>',
    },
    {
        icon: '🔧',
        title: 'Problem Solving',
        description: 'Menerapkan ilmu pada tantangan nyata',
        code: 'analisis → desain → implementasi',
    },
    {
        icon: '🚀',
        title: 'Masa Depan',
        description: 'Siap menghadapi dunia teknologi',
        code: 'return SUKSES;',
    },
];

const Journey = () => {
    const headerRef = useScrollAnimation();
    const setStepRef = useStaggeredAnimation(steps.length);

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white" id="journey">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div ref={headerRef} className="fade-in text-center mb-12 lg:mb-16">
                    <span className="inline-block font-mono text-xs uppercase tracking-widest text-sage mb-3 px-3 py-1.5 bg-sage/10 rounded">
                        Perjalanan Kami
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal mb-4">
                        Learning Journey Bersama Miss Jessica
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
                        Dari dasar hingga masa depan — setiap langkah dibimbing dengan dedikasi
                    </p>
                </div>

                {/* Timeline - Vertical centered on mobile, Horizontal on desktop */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-0">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            ref={setStepRef(index)}
                            className={`fade-in delay-${index + 1} flex flex-col items-center lg:flex-1 relative`}
                        >
                            {/* Connector - Centered on mobile, Top on desktop */}
                            <div className="flex flex-col lg:flex-row items-center lg:w-full lg:h-10 z-10">
                                {/* Line before dot (hidden on first item for mobile, shown on desktop) */}
                                {index > 0 && (
                                    <div className="hidden lg:block w-auto h-0.5 flex-1 bg-gradient-to-r from-sage-light to-sage"></div>
                                )}

                                {/* Dot */}
                                <div className="w-5 h-5 bg-sage rounded-full z-10 shadow-[0_0_0_4px_rgba(141,163,153,0.2)] hover:scale-125 transition-transform shrink-0"></div>

                                {/* Line after dot (hidden on last item for mobile, shown on desktop) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block w-auto h-0.5 flex-1 bg-gradient-to-r from-sage to-sage-light"></div>
                                )}
                            </div>

                            {/* Vertical line connecting to card (mobile only) */}
                            {index < steps.length - 1 && (
                                <div className="lg:hidden w-0.5 h-6 bg-gradient-to-b from-sage to-sage-light"></div>
                            )}

                            {/* Card */}
                            <div className="w-full max-w-xs lg:max-w-none bg-beige rounded-xl p-5 lg:p-6 mb-2 lg:mb-0 lg:mt-4 lg:text-center relative group hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-sage-light/30">
                                <span className="absolute top-2 right-2 lg:top-3 lg:right-3 font-mono text-xs text-gray-300">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="text-3xl lg:text-4xl mb-3 lg:mx-auto">{step.icon}</div>
                                <h3 className="text-lg lg:text-xl font-semibold text-charcoal mb-1">{step.title}</h3>
                                <p className="text-sm text-gray-500 mb-3">{step.description}</p>
                                <code className="inline-block font-mono text-xs px-3 py-1.5 bg-sage/15 rounded text-sage-dark">
                                    {step.code}
                                </code>
                            </div>

                            {/* Vertical line after card (mobile only, hidden on last item) */}
                            {index < steps.length - 1 && (
                                <div className="lg:hidden w-0.5 h-6 bg-gradient-to-b from-sage-light to-sage"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
