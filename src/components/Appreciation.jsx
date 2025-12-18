import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Appreciation = () => {
    const sectionRef = useScrollAnimation();
    const textRef = useScrollAnimation();

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-beige to-white relative" id="appreciation">
            {/* Top border line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage-light to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div ref={sectionRef} className="fade-in text-center mb-10 lg:mb-12">
                    <span className="inline-block font-mono text-xs uppercase tracking-widest text-sage mb-3 px-3 py-1.5 bg-sage/10 rounded">
                        Rasa Terima Kasih Kami
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal">
                        Fondasi yang Dibangun dengan Penuh Dedikasi
                    </h2>
                </div>

                {/* Content Card */}
                <div ref={textRef} className="fade-in delay-2 max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden">
                        {/* Left accent border */}
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-sage to-gold"></div>

                        {/* Icon */}
                        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-sage-light to-sage rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>

                        {/* Text Content */}
                        <div className="mb-6 space-y-4">
                            <p className="text-lg lg:text-xl leading-relaxed text-charcoal">
                                Miss Jessica memperkenalkan kami pada dunia <strong className="text-sage-dark font-semibold">Data Structures & Algorithms</strong> —
                                fondasi utama dari computational thinking.
                            </p>

                            <p className="text-base lg:text-lg text-gray-500 leading-relaxed">
                                Dari flowchart pertama kami hingga memahami keindahan structured logic,
                                Miss mengajarkan lebih dari sekadar syntax C++. Miss menunjukkan cara berpikir sistematis,
                                memecah masalah kompleks, dan menghadapi tantangan dengan kejelasan dan kepercayaan diri.
                            </p>

                            <p className="text-base lg:text-lg text-gray-500 leading-relaxed">
                                Kesabaran Miss dalam menjelaskan konsep berulang kali, dedikasi untuk memastikan setiap mahasiswa paham,
                                dan keyakinan Miss pada potensi kami telah membentuk kami menjadi pemikir yang lebih baik dan profesional masa depan.
                            </p>
                        </div>

                        {/* Quote */}
                        <div className="p-5 lg:p-6 bg-beige rounded-xl relative">
                            <span className="absolute -top-2 left-4 text-6xl font-serif text-sage-light/50 leading-none">"</span>
                            <blockquote className="font-heading text-base lg:text-lg italic text-gray-700 pl-6">
                                Guru terbaik tidak memberikan jawaban — mereka mengajarkan cara menemukannya.
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appreciation;
