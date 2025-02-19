
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Copyright } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Business", path: "/business" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-montserrat font-bold text-xl text-primary">
                HealthGrid<span className="text-secondary">Connect</span>
              </span>
            </Link>
            <p className="text-gray-600">
              Transforming healthcare through innovation and compassionate care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span>123 Healthcare Ave, SF, CA 94158</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span>contact@healthgrid.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-primary transition-transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-primary transition-transform hover:scale-110"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-primary transition-transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 flex items-center justify-center">
            <Copyright className="w-4 h-4 mr-1" />
            <span>{new Date().getFullYear()} HealthGrid Connect. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
