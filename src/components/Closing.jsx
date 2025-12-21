import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Closing = () => {
    const contentRef = useScrollAnimation();
    const signatureRef = useScrollAnimation();

    return (
        <section className="py-16 sm:py-20 lg:py-24 pb-0 bg-white relative" id="closing">
            {/* Decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-sage/5 to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Content */}
                <div ref={contentRef} className="fade-in text-center max-w-2xl mx-auto pb-10 lg:pb-12">
                    {/* Heart Icon */}
                    <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 lg:mb-8 bg-gradient-to-br from-sage-light to-sage rounded-full flex items-center justify-center animate-pulse-ring">
                        <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal mb-6 lg:mb-8">
                        Selamat Jalan & Sukses Selalu
                    </h2>

                    {/* Message */}
                    <div className="space-y-4 mb-6 lg:mb-8">
                        <p className="text-base lg:text-lg text-gray-500 leading-relaxed">
                            Saat Miss Jessica memulai perjalanan baru, kami ingin Miss tahu bahwa dampak Miss pada kami
                            melampaui kurikulum. Miss telah menanam benih-benih ilmu
                            yang akan terus tumbuh sepanjang karir kami.
                        </p>
                        <p className="text-base lg:text-lg text-gray-500 leading-relaxed">
                            Semoga jalan di depan penuh dengan kesuksesan, kebahagiaan, dan kegembiraan yang sama
                            seperti yang Miss bawa ke kelas kami setiap hari.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="my-6 lg:my-8">
                        <span className="text-2xl text-gold">✦</span>
                    </div>


                    {/* Final Message */}
                    <p className="text-xl lg:text-2xl font-heading font-semibold text-sage-dark">
                        Terima kasih untuk segalanya, Miss Jessica.
                    </p>
                </div>

                <img src="/photo-closing.jpeg" alt="Foto Bersama Miss Jessica" className="mb-10 w-full h-full object-cover object-center rounded-lg border-6 border-sage-light" />

                {/* Signature */}
                <div ref={signatureRef} className="fade-in delay-3 text-center py-10 lg:py-12 border-t border-gray-200 max-w-md mx-auto">
                    <p className="italic text-gray-400 mb-2">Dengan hormat dan rasa terima kasih,</p>
                    <p className="text-lg lg:text-xl font-heading font-semibold text-charcoal mb-1">
                        Mahasiswa Teknologi Informasi
                    </p>
                    <p className="text-base font-medium text-sage-dark mb-1">
                        Universitas Horizon Indonesia
                    </p>
                    <p className="text-sm text-gray-400">Angkatan 2025</p>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center py-6 bg-beige border-t border-black/5">
                <p className="text-sm text-gray-400">Dibuat dengan 💚 oleh Mahasiswa IT</p>
            </footer>
        </section>
    );
};

export default Closing;
