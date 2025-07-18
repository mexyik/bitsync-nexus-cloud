
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Cloud, 
  Code, 
  Blocks, 
  Zap, 
  Shield, 
  Monitor, 
  Cpu, 
  Wrench, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Consumer Electronics",
      description: "Design, manufacture, and distribute cutting-edge consumer devices",
      features: [
        "Smart Home Devices",
        "Wearable Technology",
        "Audio & Visual Equipment",
        "IoT Solutions",
        "Product Support & Warranty"
      ]
    },
    {
      icon: Cloud,
      title: "Enterprise Solutions",
      description: "Comprehensive cloud and enterprise technology solutions",
      features: [
        "Cloud Migration",
        "Infrastructure Management",
        "Enterprise Software",
        "Data Analytics",
        "Security Solutions"
      ]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications and digital experiences",
      features: [
        "Responsive Web Design",
        "E-commerce Platforms",
        "Progressive Web Apps",
        "API Development",
        "SEO Optimization"
      ]
    },
    {
      icon: Monitor,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS App Development",
        "Android Development",
        "React Native Apps",
        "Flutter Development",
        "App Store Optimization"
      ]
    },
    {
      icon: Blocks,
      title: "Blockchain Technology",
      description: "Decentralized solutions and cryptocurrency integration",
      features: [
        "Smart Contracts",
        "DeFi Solutions",
        "NFT Platforms",
        "Crypto Wallets",
        "Blockchain Consulting"
      ]
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Seamless technology integration and optimization",
      features: [
        "Legacy System Migration",
        "API Integration",
        "Workflow Automation",
        "Third-party Integrations",
        "Performance Optimization"
      ]
    },
    {
      icon: Shield,
      title: "Consulting Services",
      description: "Strategic technology consulting and implementation",
      features: [
        "Digital Transformation",
        "Technology Strategy",
        "Process Optimization",
        "Risk Assessment",
        "Change Management"
      ]
    },
    {
      icon: Users,
      title: "Tech Talent Resourcing",
      description: "Expert talent acquisition and team augmentation",
      features: [
        "Developer Outsourcing",
        "Project Teams",
        "Technical Expertise",
        "Flexible Engagement",
        "Quality Assurance"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  {service.description}
                </CardDescription>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through our comprehensive approach to technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-600">
                We leverage the latest technologies and industry best practices to deliver 
                future-proof solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">End-to-End Solutions</h3>
              <p className="text-gray-600">
                From concept to deployment and ongoing support, we handle every aspect 
                of your technology needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Expertise</h3>
              <p className="text-gray-600">
                Our team of certified professionals brings years of experience across 
                multiple industries and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our services can accelerate your growth and digital transformation.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
