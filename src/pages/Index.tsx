
import { ArrowRight, Activity, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Activity,
      title: "Advanced Healthcare",
      description: "State-of-the-art medical solutions for modern healthcare needs",
    },
    {
      icon: Shield,
      title: "Patient Security",
      description: "Ensuring the highest level of patient data protection",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly qualified healthcare professionals at your service",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0" />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl animate-fade-up">
            <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforming Healthcare for a{" "}
              <span className="text-primary">Better Tomorrow</span>
            </h1>
            <p className="font-inter text-xl text-gray-600 mb-8">
              Leading the way in innovative healthcare solutions with cutting-edge
              technology and compassionate care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg transition-transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-white text-primary border-2 border-primary font-semibold rounded-lg transition-transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HealthGrid Connect?
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              We combine innovation with compassion to deliver the best healthcare
              solutions for our patients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="font-inter text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
