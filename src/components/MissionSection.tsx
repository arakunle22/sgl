import { Target, Eye, ChevronRight } from 'lucide-react';
import '../index.css'

const MissionVisionSection = () => {
  return (
    <div className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {/* Mission Card */}
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-lg md:rounded-xl transform group-hover:scale-105 transition-transform duration-300 ease-out" />
            
            <div className="relative p-6 sm:p-8 rounded-lg md:rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 truncate">
                  OUR MISSION
                </h2>
              </div>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4 flex-grow">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our mission is to help our Clients achieve the highest level of safety, quality 
                  and valued added results at optimal cost in the execution of our projects.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  This mission is guided by our relentless focus on deploying the most updated 
                  technologies and best-fit personnel in the execution of our projects.
                </p>
              </div>

              {/* Interactive Element */}
              <div className="mt-4 sm:mt-6 flex items-center text-red-600 group/link cursor-pointer">
                <span className="text-xs sm:text-sm font-semibold">Learn More</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg md:rounded-xl transform group-hover:scale-105 transition-transform duration-300 ease-out" />
            
            <div className="relative p-6 sm:p-8 rounded-lg md:rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 truncate">
                  OUR VISION
                </h2>
              </div>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4 flex-grow">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our Vision is to be the Partner of Choice and a Top rated Engineering, 
                  Procurement, Construction and Installation solutions provider for Onshore 
                  and Offshore Assets in the Power, Gas and Oil Industry in Africa.
                </p>
              </div>

              {/* Interactive Element */}
              <div className="mt-4 sm:mt-6 flex items-center text-blue-600 group/link cursor-pointer">
                <span className="text-xs sm:text-sm font-semibold">Learn More</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements - Contained within overflow-hidden */}
        <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob" />
        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-24 sm:w-32 h-24 sm:h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-4000" />
      </div>
    </div>
  );
};

export default MissionVisionSection;