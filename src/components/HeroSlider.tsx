import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../index.css';

interface Slide {
    id: number;
    imageUrl: string;
    title?: string;
    subtitle?: string;
}

const slides: Slide[] = [
    {
        id: 1,
        imageUrl: "https://seflamsgl.com/wp-content/uploads/2018/07/homepage-slide-3.jpg",
        title: "World-Class",
        subtitle: "EPCI SERVICES",
    },
    {
        id: 2,
        imageUrl: "https://seflamsgl.com/wp-content/uploads/2018/07/homepage-slide-2.jpg",
        title: "Innovation",
        subtitle: "ENGINEERING EXCELLENCE",
    },
    {
        id: 3,
        imageUrl: "https://seflamsgl.com/wp-content/uploads/2018/07/homepage-slide-4.jpg",
        title: "Expertise",
        subtitle: "GLOBAL SOLUTIONS",
    },
];

const HeroSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToSlide = useCallback((index: number) => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentSlide(index);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    }, [isTransitioning]);

    const nextSlide = useCallback(() => {
        goToSlide((currentSlide + 1) % slides.length);
    }, [currentSlide, goToSlide]);

    const previousSlide = useCallback(() => {
        goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    }, [currentSlide, goToSlide]);

    useEffect(() => {
        let interval: number | undefined;  // Explicitly define it as `number`
        if (isAutoPlaying) {
            interval = window.setInterval(nextSlide, 5000); // Use window.setInterval to ensure correct typing
        }
        return () => {
            if (interval) {
                clearInterval(interval);  // interval is now a number
            }
        };
    }, [isAutoPlaying, nextSlide]);

    return (
        <div className="relative w-full overflow-hidden">
            <div className="h-[calc(100vh-17rem)] sm:h-[calc(100vh-18rem)] lg:h-[calc(100vh-19rem)] relative">
                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 h-full w-full transition-opacity duration-500 ease-in-out ${
                            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.imageUrl})` }}
                        >
                            <div className="absolute inset-0 bg-black/40" />
                        </div>
                        <div className="relative z-20 flex h-full items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                            <div
                                className={`transform transition-all duration-700 max-w-4xl ${
                                    index === currentSlide
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-8 opacity-0'
                                }`}
                            >
                                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white mb-2 tracking-wide">
                                    {slide.title}
                                </h4>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-wider">
                                    {slide.subtitle}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Buttons */}
                <div className="absolute inset-x-0 bottom-0 z-30 flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
                <button
                    onClick={previousSlide}
                    className="group rounded-full bg-black/30 p-2 backdrop-blur-sm transition-all hover:bg-black/50"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6 text-white transition-transform group-hover:-translate-x-0.5" />
                </button>
                <button
                    onClick={nextSlide}
                    className="group rounded-full bg-black/30 p-2 backdrop-blur-sm transition-all hover:bg-black/50"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6 text-white transition-transform group-hover:translate-x-0.5" />
                </button>
            </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 w-2 rounded-full transition-all ${
                                index === currentSlide
                                    ? 'bg-white w-8'
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Play/Pause Button */}
                <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="absolute bottom-6 right-6 z-30 rounded-full bg-black/30 p-3 backdrop-blur-sm transition-all hover:bg-black/50"
                    aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                    {isAutoPlaying ? (
                        <span className="block w-3 h-3 bg-white" />
                    ) : (
                        <span className="block w-3 h-3 border-2 border-white border-l-transparent" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default HeroSlider;
