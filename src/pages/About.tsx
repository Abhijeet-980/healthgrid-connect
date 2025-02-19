
import { ArrowRight, Heart, Building2, Target, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Putting patient well-being first with empathetic healthcare delivery",
    },
    {
      icon: Building2,
      title: "Innovation",
      description: "Embracing cutting-edge technology for better healthcare solutions",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Maintaining the highest standards in healthcare services",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through reliability and integrity",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About HealthGrid<span className="text-primary">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pioneering the future of healthcare through innovation and compassion
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, HealthGrid Connect emerged from a vision to transform healthcare delivery through innovative technology and compassionate care.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey began with a small team of dedicated healthcare professionals and has grown into a comprehensive healthcare solutions provider, serving thousands of patients across the country.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80"
              >
                Get in touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 animate-fade-up">
              <div className="aspect-video bg-white rounded-xl shadow-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in delivering exceptional healthcare services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
