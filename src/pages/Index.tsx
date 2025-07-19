
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Smartphone, Cloud, Zap, Shield, Globe, Code, Blocks } from "lucide-react";
import heroTech from "@/assets/hero-tech.jpg";
import consumerElectronics from "@/assets/consumer-electronics.jpg";
import enterpriseSolutions from "@/assets/enterprise-solutions.jpg";
import webDevelopment from "@/assets/web-development.jpg";
import mobileDevImg from "@/assets/mobile-development.jpg";
import blockchainTech from "@/assets/blockchain-tech.jpg";
import systemIntegration from "@/assets/system-integration.jpg";
import whyChooseUs from "@/assets/why-choose-us.jpg";
import consultingTeam from "@/assets/consulting-team.jpg";

const Index = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Consumer Electronics",
      description: "Cutting-edge devices and smart solutions for modern living",
      image: consumerElectronics
    },
    {
      icon: Cloud,
      title: "Enterprise Solutions",
      description: "Scalable cloud infrastructure and business transformation",
      image: enterpriseSolutions
    },
    {
      icon: Code,
      title: "Web & Mobile Development",
      description: "Custom applications and digital experiences",
      image: webDevelopment
    },
    {
      icon: Blocks,
      title: "Blockchain Technology",
      description: "Decentralized solutions and cryptocurrency integration",
      image: blockchainTech
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Seamless technology integration and optimization",
      image: systemIntegration
    },
    {
      icon: Shield,
      title: "Consulting Services",
      description: "Strategic technology consulting and implementation",
      image: consultingTeam
    }
  ];

  const stats = [
    { value: "500+", label: "Global Clients" },
    { value: "50+", label: "Countries Served" },
    { value: "1000+", label: "Projects Delivered" },
    { value: "24/7", label: "Support Available" }
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across 50+ countries with localized expertise and global standards."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Cutting-edge technology solutions that keep you ahead of the competition."
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Enterprise-grade solutions with uncompromising quality and reliability."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src={heroTech} 
                alt="BitSync Group Technology Solutions" 
                className="mx-auto w-32 h-32 rounded-full shadow-lg object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powering the Future of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              BitSync Group is a global technology powerhouse delivering cutting-edge solutions 
              in consumer electronics, enterprise systems, and innovative consulting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-bounce"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From design to deployment, we deliver comprehensive technology solutions 
              that drive innovation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white group">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose BitSync Group?
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="mb-6">
                  <img 
                    src={whyChooseUs} 
                    alt="BitSync Technology Workspace" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="mb-6">Join thousands of satisfied clients who trust BitSync Group for their technology needs.</p>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/contact">
                    Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
