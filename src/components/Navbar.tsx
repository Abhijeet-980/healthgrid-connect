
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Business", path: "/business" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "my-4 bg-white/90 backdrop-blur-lg shadow-lg rounded-full border border-gray-200/20"
            : "mt-6 bg-white/50 backdrop-blur-sm"
        }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="font-montserrat font-bold text-xl text-primary">
                  HealthGrid<span className="text-secondary">Connect</span>
                </span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative font-montserrat transition-all duration-200 px-3 py-2 text-sm font-medium rounded-full ${
                      location.pathname === link.path
                        ? "text-primary bg-blue-50"
                        : "text-gray-600 hover:text-primary hover:bg-blue-50/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-primary hover:bg-blue-50/50 focus:outline-none transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64" : "max-h-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-full text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-blue-50"
                    : "text-gray-600 hover:text-primary hover:bg-blue-50/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
