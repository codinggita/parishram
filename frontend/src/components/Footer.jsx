import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-4">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">
          <div className="max-w-[300px]">
            <Link to="/" className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight mb-4 text-gray-900">
              <div className="w-9 h-9 rounded-xl bg-accent-gradient flex items-center justify-center text-sm font-bold text-white shadow-sm">P</div>
              <span>Parishram</span>
            </Link>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed">
              The modern, all-in-one platform for managing your school's daily operations. Built for educators, loved by parents.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[1rem] text-gray-900 mb-6 font-semibold">Platform</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-500 text-[0.95rem] transition-colors duration-200 hover:text-accentPrimary">Features</Link></li>
              <li><Link to="/" className="text-gray-500 text-[0.95rem] transition-colors duration-200 hover:text-accentPrimary">Pricing</Link></li>
              <li><Link to="/" className="text-gray-500 text-[0.95rem] transition-colors duration-200 hover:text-accentPrimary">Integrations</Link></li>
              <li><Link to="/" className="text-gray-500 text-[0.95rem] transition-colors duration-200 hover:text-accentPrimary">Case Studies</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[1rem] text-gray-900 mb-6 font-semibold">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-500 text-[0.95rem] transition-colors duration-200 hover:text-accentPrimary">Help Center</Link></li>
              <li><Link to="/" className="text-gray-500 text-[0.95rem] transition-colors duration-200 hover:text-accentPrimary">API Docs</Link></li>
              <li><Link to="/" className="text-gray-500 text-[0.95rem] transition-colors duration-200 hover:text-accentPrimary">Blog</Link></li>
              <li><Link to="/" className="text-gray-500 text-[0.95rem] transition-colors duration-200 hover:text-accentPrimary">Community</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[1rem] text-gray-900 mb-6 font-semibold">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-500 text-[0.95rem] transition-colors duration-200 hover:text-accentPrimary">About Us</Link></li>
              <li><Link to="/" className="text-gray-500 text-[0.95rem] transition-colors duration-200 hover:text-accentPrimary">Careers</Link></li>
              <li><Link to="/" className="text-gray-500 text-[0.95rem] transition-colors duration-200 hover:text-accentPrimary">Contact</Link></li>
              <li><Link to="/" className="text-gray-500 text-[0.95rem] transition-colors duration-200 hover:text-accentPrimary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-center gap-4">
          <p className="text-gray-400 text-[0.85rem]">
            &copy; {new Date().getFullYear()} Parishram. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/" className="text-gray-400 transition-colors duration-200 hover:text-gray-800" aria-label="Twitter">𝕏</Link>
            <Link to="/" className="text-gray-400 transition-colors duration-200 hover:text-gray-800" aria-label="LinkedIn">in</Link>
            <Link to="/" className="text-gray-400 transition-colors duration-200 hover:text-gray-800" aria-label="GitHub">GH</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
