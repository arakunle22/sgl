import React from 'react';
import {
  Wrench,
  ShoppingCart,
  Building2,
  Anchor,
  Factory,
  Settings,
  PenLine, // Replacing Pipeline
  Scan // Replacing Scan3d
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="group relative p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    <div className="relative">
      <div className="flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-blue-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Engineering",
      description: "Over 20 years experience delivering multifarious engineering design solutions to the Power, Gas, and Oil industry in West Africa."
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Procurement",
      description: "Our Procurement teams are highly trained in the best global practices of managing the different phases of project material procurement."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Construction",
      description: "State-of-the-art equipment, highly experienced personnel, and industry best practices are used for the safe delivery of your project."
    },
    {
      icon: <Anchor className="w-6 h-6" />,
      title: "Offshore Installation",
      description: "We are experienced at and capable of executing offshore installation projects, at either domestic or international locations."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Onshore Installation",
      description: "We are experienced at and capable of executing onshore installation projects, at either domestic or international locations."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Asset Management",
      description: "We have several years of experience helping our clients optimize operational integrity of their onshore and offshore assets."
    },
    {
      icon: <PenLine className="w-6 h-6" />, // Updated icon
      title: "Pipeline and Equipment Hot Taps & Line Stop",
      description: "Seflam SGL conducts repairs and implements upgrades to existing process equipment and pipeline without requiring expensive process shutdowns."
    },
    {
      icon: <Scan className="w-6 h-6" />, // Updated icon
      title: "Laser Scanning",
      description: "Our 3D scanning and digitizing services are unsurpassed in the industry because of the considerable expertise of our certified engineers."
    }
  ];

  return (
    <div className="relative w-full bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-90"
        style={{
          backgroundImage: `url('https://seflamsgl.com/wp-content/uploads/2018/06/pipeline-vector-10.png'), linear-gradient(to bottom right, slate-900, slate-800)`,
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top',
          backgroundBlendMode: 'overlay',
        }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
            OUR SERVICES
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
