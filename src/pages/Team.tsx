
import { Mail, Linkedin } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      linkedIn: "#",
      email: "sarah.johnson@healthgrid.com",
    },
    {
      name: "Dr. Michael Chen",
      role: "Head of Cardiology",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      linkedIn: "#",
      email: "michael.chen@healthgrid.com",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Neurology",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      linkedIn: "#",
      email: "emily.rodriguez@healthgrid.com",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-600">
              Meet our exceptional healthcare professionals
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
