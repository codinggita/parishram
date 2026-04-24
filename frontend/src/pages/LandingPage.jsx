import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsBanner from '../components/StatsBanner';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <StatsBanner />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
