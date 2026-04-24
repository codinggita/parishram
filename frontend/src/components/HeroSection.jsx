import logo from '../assets/logo.png';

const HeroSection = () => {
  return (
    <section className="pt-[100px] pb-8 w-full max-w-[1400px] mx-auto px-4 md:px-8" id="home">
      <div className="w-full bg-hero-gradient rounded-3xl overflow-hidden relative shadow-lg min-h-[400px] flex flex-col md:flex-row items-center animate-fade-in-up">
        
        {/* Left Content */}
        <div className="flex-1 p-8 md:p-16 z-10 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white/90 font-medium tracking-wide mb-2 text-sm md:text-base">
            Extraordinary Management For A Less Ordinary Future!
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            PARISHRAM <span className="text-accentWarm">PLATFORM</span>
          </h1>
          
          <div className="inline-block bg-accentWarm text-black font-bold px-6 py-2 rounded-full text-lg md:text-xl mb-6 shadow-md border-2 border-accentWarm transform -rotate-1">
            School & Institute Management
          </div>
          
          <p className="text-white font-medium mb-8 text-lg">
            Empowering Education Everywhere!
          </p>
          
          <button className="bg-white text-black font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 shadow-md">
            EXPLORE MORE!
          </button>
        </div>

        {/* Right Content — Abstract Professional Graphic */}
        <div className="flex-1 w-full h-full min-h-[250px] relative flex justify-center items-center py-8">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full shadow-xl flex flex-col items-center justify-center p-6 border-8 border-white/20">
            <span className="text-7xl mb-4">🎓</span>
            <h3 className="text-xl font-bold text-gray-800 text-center uppercase tracking-wider">Parishram<br/>Academy</h3>
            <div className="w-12 h-1 bg-accentPrimary mt-4 rounded-full"></div>
          </div>
        </div>

        {/* Decorative Dots Pattern */}
        <div className="absolute left-4 top-1/4 flex flex-col gap-2 opacity-30 hidden md:flex">
          {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>)}
        </div>
        <div className="absolute right-8 bottom-8 flex flex-col gap-2 opacity-30">
          {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>)}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
