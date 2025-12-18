import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const studentMessages = [
    {
        name: 'Elaa',
        message: 'thank you, miss jess. your guidance helped me grow more than you know'
    },
    {
        name: 'Gilang Mubarok',
        message: 'Terimakasih banyak, bu jessica. Semoga semakin sukses di tempat baru dan selalu diberi kemudahan dalam setiap langkah.',
    },
    {
        name: 'USUP',
        message: 'terimakasih udah sabar mengajar saya, walaupun saya jarang masuk tapi ilmu yang miss berikan bisa saya cerna dengan baik see you later miss J🥀😔',
    },
    {
        name: 'Febiola Widodo',
        message: 'Terima kasih banyak ya Miss Jesica atas semua ilmu, bimbingan, dan cerita selama mengajar kami. Walaupun berat melepas Miss jesica semoga langkah selanjutnya selalu dimudahkan dan membawa kebahagiaan. Sukses selalu di tempat yang baru.',
    },
    {
        name: 'Juan',
        message: 'Terima kasih, miss Jessica, atas segala ilmu dan bimbingannya. Semoga sukses dan bahagia di tempat baru.',
    },
    {
        name: 'Ridho',
        message: 'Terima kasih, Miss Jessica, atas kesabaran dan ilmu yang Miss bagikan. Pelajaran dari Miss akan selalu saya ingat dan gunakan ke depan. Semoga sukses selalu.',
    },
    {
        name: 'Nayla',
        message: '-',
    },
    {
        name: 'Bima',
        message: 'miss tidak hanya berperan sebagai pengajar, tetapi juga sebagai pembimbing yang dengan penuh kesabaran dan ketulusan mendampingi kami dalam proses belajar. setiap arahan dan nasihat miss menjadi bekal berharga bagi kami. kami mengucapkan terima kasih yang sebesar-besarnya atas dedikasi dan perhatian miss. Semoga seluruh ilmu dan kebaikan yang miss berikan menjadi amal yang terus mengalir serta miss senantiasa diberikan kesehatan dan keberkahan.',
    },
    {
        name: 'Rifki',
        message: '-',
    },
    {
        name: 'Zaidan',
        message: '',
    },
    {
        name: 'Naura',
        message: '',
    },
    {
        name: 'Natasya',
        message: '',
    },
    {
        name: 'Aziz',
        message: '',
    },
    {
        name: 'Towi',
        message: '',
    },
];

const Messages = () => {
    const headerRef = useScrollAnimation();
    const setCardRef = useStaggeredAnimation(studentMessages.length);

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-beige" id="messages">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div ref={headerRef} className="fade-in text-center mb-12 lg:mb-16">
                    <span className="inline-block font-mono text-xs uppercase tracking-widest text-sage mb-3 px-3 py-1.5 bg-sage/10 rounded">
                        Dari Hati Kami
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal mb-4">
                        Pesan dari Para Mahasiswa TI
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500">
                        14 suara, satu pesan penuh rasa terima kasih
                    </p>
                </div>

                {/* Message Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {studentMessages.map((student, index) => (
                        <div
                            key={index}
                            ref={setCardRef(index)}
                            className="scale-in bg-white rounded-xl p-5 lg:p-6 shadow-sm border border-gray-50 flex flex-col group hover:-translate-y-1 hover:shadow-lg hover:border-sage-light/50 transition-all duration-300 relative overflow-hidden"
                            style={{ transitionDelay: `${index * 0.05}s` }}
                        >
                            {/* Top accent bar - shows on hover */}
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-sage-light to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            {/* Message */}
                            <div className="flex-1 mb-4">
                                <p className="text-sm lg:text-base text-gray-600 italic leading-relaxed">
                                    "{student.message}"
                                </p>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                                {/* <div className="w-9 h-9 bg-gradient-to-br from-sage-light to-sage rounded-full flex items-center justify-center text-xs font-semibold text-white">
                                    {student.name.split(' ').map(n => n[0]).join('')}
                                </div> */}
                                <span className="text-sm font-medium text-gray-500">{student.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Messages;
