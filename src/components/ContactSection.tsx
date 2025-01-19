
const ContactSection = () => {
  return (
    <section className="bg-slate-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center">
          <div className="text-center md:text-left">
            <h2 className="text-white text-3xl font-normal mb-2">Contact Us</h2>
            <p className="text-gray-300 text-lg">Let's build something together.</p>
          </div>
          
          <button className="mt-6 md:mt-0 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;