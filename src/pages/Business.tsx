
import { Stethoscope, HeartPulse, Brain, Microscope, Hospital, UserCog, Syringe, Activity } from "lucide-react";

const Business = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Primary Care",
      description: "Comprehensive health assessments and preventive care services",
    },
    {
      icon: HeartPulse,
      title: "Cardiology",
      description: "Advanced cardiac care and monitoring solutions",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Specialized care for neurological conditions",
    },
    {
      icon: Microscope,
      title: "Laboratory",
      description: "State-of-the-art diagnostic testing facilities",
    },
    {
      icon: Hospital,
      title: "Emergency Care",
      description: "24/7 emergency medical services",
    },
    {
      icon: UserCog,
      title: "Rehabilitation",
      description: "Physical therapy and rehabilitation programs",
    },
    {
      icon: Syringe,
      title: "Immunization",
      description: "Preventive care and vaccination services",
    },
    {
      icon: Activity,
      title: "Monitoring",
      description: "Remote patient monitoring and telehealth",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive healthcare solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
