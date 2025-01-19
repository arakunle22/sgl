import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center md:justify-center order-2 md:order-1">
            <div className="relative w-64 h-28 md:w-80 md:h-36">
              <img
                src="https://seflamsgl.com/wp-content/uploads/2018/07/BureauVeritas-logo_iso.png"
                alt="ISO 9001 Certified"
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">ABOUT US</h4>
              <h3 className="text-3xl font-bold text-red-600 leading-tight">
                World class Engineering, Procurement, Construction, and Installation
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Seflam SGL is an ISO 9001 Certified indigenous limited liability Company incorporated under the Laws of The Federation of Nigeria with Corporate Affairs Commission registration number RC 1177212. We provide world-class Engineering, Procurement, Construction and Installation (EPCI) services in West Africa with over 20 years of experience delivering industry-leading services to Oil and Gas majors including ExxonMobil, Chevron, Total, Agip and Shell.
            </p>
            <div className="pt-4">
              <a
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
