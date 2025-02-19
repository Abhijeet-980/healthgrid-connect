import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Activity,
  Shield,
  Users,
  Star,
  ChevronRight,
  Users as UsersIcon,
  Heart,
  Trophy,
  ChevronDown,
} from "lucide-react";

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

  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      content: "The care and attention I received was exceptional. The staff went above and beyond.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      content: "Professional, caring, and efficient. Couldn't ask for better healthcare service.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      content: "A truly patient-centered approach to healthcare. Highly recommended!",
      rating: 5,
    },
  ];

  const blogPosts = [
    {
      title: "The Future of Telemedicine",
      excerpt: "Exploring how digital healthcare is transforming patient care...",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      date: "March 15, 2024",
    },
    {
      title: "Preventive Healthcare Tips",
      excerpt: "Essential guidelines for maintaining optimal health...",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      date: "March 10, 2024",
    },
    {
      title: "Understanding Mental Health",
      excerpt: "Breaking down the importance of mental wellness...",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      date: "March 5, 2024",
    },
  ];

  const stats = [
    { icon: UsersIcon, value: 10000, label: "Patients Served" },
    { icon: Heart, value: 15000, label: "Successful Treatments" },
    { icon: Trophy, value: 50, label: "Expert Doctors" },
  ];

  const faqs = [
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance plans including Medicare and Medicaid. Please contact our office for specific insurance-related queries.",
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment through our online portal, by calling our office, or by visiting us in person. Emergency cases are always given priority.",
    },
    {
      question: "What are your operating hours?",
      answer: "Our regular operating hours are Monday to Friday, 8:00 AM to 6:00 PM. We also offer 24/7 emergency services.",
    },
  ];

  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - startValue) + startValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
  };

  return (
    <div className="min-h-screen">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-6 transform transition-transform group-hover:scale-110" />
                <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="font-inter text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from our valued patients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative overflow-hidden rounded-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 object-cover transform transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Healthcare Insights
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest articles and updates
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to="#"
                    className="inline-flex items-center text-primary font-semibold group-hover:text-primary/80 transition-colors"
                  >
                    Read More{" "}
                    <ChevronRight className="ml-1 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const count = useCounter(stat.value);
              return (
                <div
                  key={index}
                  className="group text-center p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4 transform transition-transform group-hover:scale-110" />
                  <div className="font-montserrat text-4xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {count.toLocaleString()}+
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl mb-4 animate-fade-up hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:text-primary transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                    {faq.question}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-hover:text-primary" />
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
