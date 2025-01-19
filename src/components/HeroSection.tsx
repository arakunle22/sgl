

const HeroSection = () => {
    return (
        <div className="relative min-h-[100px] w-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
            {/* Animated background dots */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 grid grid-cols-12 gap-4 transform rotate-12">
                    {Array.from({ length: 100 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-white rounded-full animate-pulse"
                            style={{
                                animationDelay: `${Math.random() * 2}s`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center px-6 py-16 max-w-5xl mx-auto">
                {/* "World-Class" text with gradient animation */}
                <div className="mb-4 relative">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 animate-gradient-x">
                        World-Class
                    </h2>
                </div>

                {/* EPCI SERVICES text with reveal animation */}
                <div className="relative overflow-hidden">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold text-white tracking-tight leading-none animate-fade-in-up">
                        EPCI SERVICES
                    </h1>
                </div>

                {/* Decorative line */}
                <div className="mt-8 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-width" />
                </div>
            </div>

            {/* Animated corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-red-500 transform -translate-x-6 -translate-y-6 animate-slide-in-tl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-red-500 transform translate-x-6 translate-y-6 animate-slide-in-br" />
        </div>
    );
};


export default HeroSection;