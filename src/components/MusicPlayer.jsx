import { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef(null);

    // Your custom music file
    const musicUrl = '/public/music.mp3';

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.3; // Set volume to 30%
            audio.loop = true; // Loop the music

            // Try to autoplay when component mounts
            const attemptAutoplay = async () => {
                try {
                    await audio.play();
                    setIsPlaying(true);
                    setHasInteracted(true);
                } catch (error) {
                    // Autoplay was blocked by browser
                    console.log('Autoplay blocked, waiting for user interaction');
                    setShowPrompt(true);
                }
            };

            // Attempt autoplay after a short delay
            const timer = setTimeout(attemptAutoplay, 500);

            return () => clearTimeout(timer);
        }
    }, []);

    // Listen for any user interaction to enable audio
    useEffect(() => {
        if (!hasInteracted && showPrompt) {
            const handleFirstInteraction = () => {
                const audio = audioRef.current;
                if (audio && !isPlaying) {
                    audio.play().then(() => {
                        setIsPlaying(true);
                        setHasInteracted(true);
                        setShowPrompt(false);
                    }).catch(console.error);
                }
            };

            // Listen for various user interactions
            document.addEventListener('click', handleFirstInteraction, { once: true });
            document.addEventListener('touchstart', handleFirstInteraction, { once: true });
            document.addEventListener('scroll', handleFirstInteraction, { once: true });

            return () => {
                document.removeEventListener('click', handleFirstInteraction);
                document.removeEventListener('touchstart', handleFirstInteraction);
                document.removeEventListener('scroll', handleFirstInteraction);
            };
        }
    }, [hasInteracted, showPrompt, isPlaying]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                audio.play().then(() => {
                    setIsPlaying(true);
                    setHasInteracted(true);
                    setShowPrompt(false);
                }).catch(error => {
                    console.log('Audio play failed:', error);
                });
            }
        }
    };

    return (
        <>
            {/* Hidden audio element */}
            <audio ref={audioRef} preload="auto">
                <source src={musicUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* Floating music button */}
            <button
                onClick={togglePlay}
                className={`
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          flex items-center justify-center
          transition-all duration-300 ease-out
          shadow-lg hover:shadow-xl
          ${isPlaying
                        ? 'bg-sage text-white hover:bg-sage-dark'
                        : 'bg-white text-sage-dark hover:bg-beige border border-sage-light/30'
                    }
          ${isPlaying ? 'animate-pulse-slow' : ''}
          group
        `}
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
                title={isPlaying ? 'Pause music' : 'Play music'}
            >
                {isPlaying ? (
                    // Pause icon with sound waves
                    <div className="relative">
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                        {/* Animated sound waves */}
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex gap-0.5">
                            <span className="w-0.5 h-2 bg-white/80 rounded-full animate-sound-wave-1"></span>
                            <span className="w-0.5 h-3 bg-white/80 rounded-full animate-sound-wave-2"></span>
                            <span className="w-0.5 h-2 bg-white/80 rounded-full animate-sound-wave-3"></span>
                        </div>
                    </div>
                ) : (
                    // Music note icon
                    <svg
                        className="w-6 h-6 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                )}
            </button>

            {/* Prompt overlay when autoplay is blocked */}
            {showPrompt && !hasInteracted && (
                <div
                    className="fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-sm flex items-center justify-center animate-[fadeIn_0.3s_ease_forwards]"
                    onClick={togglePlay}
                >
                    <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center shadow-2xl animate-[scaleIn_0.3s_ease_forwards]">
                        <h3 className="text-xl font-semibold text-charcoal mb-2">Hai, Miss Jess 👋</h3>
                        <p className="text-gray-500 mb-6">Ini adalah halaman kecil dari kami,
                            mahasiswa Teknologi Informasi</p>
                        <p className="text-gray-500 mb-6">Sebelum “program” ini dimulai,
                            kami ingin mengucapkan terima kasih
                        </p>
                        <button className="px-6 py-3 bg-sage text-white rounded-full font-medium hover:bg-sage-dark transition-colors">
                            Start
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default MusicPlayer;
