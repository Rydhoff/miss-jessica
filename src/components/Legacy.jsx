import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const legacyItems = [
    {
        icon: '{ }',
        title: 'Logical Thinking',
        description: 'Kemampuan memecah masalah kompleks menjadi langkah-langkah terstruktur yang bisa diselesaikan.',
    },
    {
        icon: '⚡',
        title: 'Disiplin',
        description: 'Memahami bahwa code yang hebat datang dari konsistensi, latihan, dan perhatian pada detail.',
    },
    {
        icon: '∞',
        title: 'Problem-Solving Mindset',
        description: 'Menghadapi tantangan dengan rasa ingin tahu dan kepercayaan diri untuk menemukan solusi.',
    },
];

const Legacy = () => {
    const headerRef = useScrollAnimation();
    const setItemRef = useStaggeredAnimation(legacyItems.length);
    const codeRef = useScrollAnimation();

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-beige relative overflow-hidden" id="legacy">
            {/* Decorative gradient */}
            <div className="absolute -top-1/2 -right-1/4 w-3/5 h-[200%] bg-[radial-gradient(ellipse,rgba(141,163,153,0.08)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div ref={headerRef} className="fade-in text-center mb-12 lg:mb-16">
                    <span className="inline-block font-mono text-xs uppercase tracking-widest text-sage mb-3 px-3 py-1.5 bg-sage/10 rounded">
                        Yang Akan Selalu Kami Bawa
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal mb-4">
                        Legacy yang Abadi
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
                        Lebih dari sekadar pelajaran di kelas — inilah warisan yang akan terus hidup
                    </p>
                </div>

                {/* Legacy Items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16">
                    {legacyItems.map((item, index) => (
                        <div
                            key={index}
                            ref={setItemRef(index)}
                            className={`fade-in-left delay-${index + 1} flex md:flex-col items-center md:text-center gap-4 md:gap-0 p-5 lg:p-6 bg-white rounded-xl shadow-sm hover:shadow-md hover:translate-x-2 md:hover:translate-x-0 md:hover:-translate-y-1 transition-all duration-300`}
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-beige-dark to-sand rounded-lg flex items-center justify-center shrink-0 md:mb-4">
                                <span className="font-mono text-lg lg:text-xl font-semibold text-sage-dark">{item.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-base lg:text-lg font-semibold text-charcoal mb-1 md:mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Code Window */}
                <div ref={codeRef} className="fade-in delay-4 max-w-2xl mx-auto">
                    <div className="bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-2xl">
                        {/* Window Header */}
                        <div className="flex items-center gap-4 px-4 py-3 bg-[#2D2D2D] border-b border-[#3D3D3D]">
                            <div className="flex gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
                                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                                <span className="w-3 h-3 rounded-full bg-[#27CA40]"></span>
                            </div>
                            <span className="font-mono text-xs text-gray-500">legacy.cpp</span>
                        </div>

                        {/* Code Content */}
                        <pre className="p-4 lg:p-6 overflow-x-auto">
                            <code className="font-mono text-xs sm:text-sm text-[#D4D4D4] leading-relaxed whitespace-pre">
                                {`// Legacy dari Miss Jessica
class Mahasiswa {
private:
    bool logicalThinking = true;
    bool disiplin = true;
    bool problemSolver = true;

public:
    void terapkanIlmu() {
        while (ada_tantangan) {
            analisis();
            desain();
            implementasi();
            // Pantang menyerah!
        }
    }

    string ucapanHati() {
        return "Terima kasih, Miss Jessica";
    }
};`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legacy;
