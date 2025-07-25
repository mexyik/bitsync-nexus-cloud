
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Building2, 
  Heart, 
  GraduationCap, 
  Car, 
  Factory,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
  Star,
  Quote
} from "lucide-react";

const Solutions = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Digital transformation solutions for modern retail experiences",
      features: ["Omnichannel Platforms", "Inventory Management", "Customer Analytics", "Payment Integration"],
      caseStudy: "Increased online sales by 300% for a major retail chain"
    },
    {
      icon: Building2,
      title: "Financial Services",
      description: "Secure and scalable fintech solutions for modern banking",
      features: ["Digital Banking", "Payment Systems", "Fraud Detection", "Regulatory Compliance"],
      caseStudy: "Reduced transaction processing time by 85% for a leading bank"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Innovative healthcare technology for better patient outcomes",
      features: ["Telemedicine Platforms", "Medical Records", "IoT Health Devices", "AI Diagnostics"],
      caseStudy: "Improved patient care efficiency by 60% through digital solutions"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "EdTech solutions transforming learning experiences",
      features: ["Learning Management", "Virtual Classrooms", "Student Analytics", "Mobile Learning"],
      caseStudy: "Enhanced learning outcomes for 100,000+ students globally"
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Connected vehicle solutions and smart mobility platforms",
      features: ["Connected Cars", "Fleet Management", "Autonomous Systems", "Predictive Maintenance"],
      caseStudy: "Reduced fleet operational costs by 40% through IoT integration"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industry 4.0 solutions for smart manufacturing",
      features: ["Smart Factories", "Supply Chain Optimization", "Quality Control", "Predictive Analytics"],
      caseStudy: "Increased production efficiency by 50% with AI-powered automation"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Streamline operations and boost productivity by up to 60%"
    },
    {
      icon: Users,
      title: "Enhanced Customer Experience",
      description: "Deliver exceptional user experiences that drive loyalty"
    },
    {
      icon: Zap,
      title: "Faster Time-to-Market",
      description: "Accelerate product launches with agile development practices"
    }
  ];

  const partners = [
    {
      name: "TechCorp Global",
      logo: "https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg",
      testimonial: "BitSync Group transformed our entire digital infrastructure. Their expertise in system integration and consulting helped us achieve a 200% increase in operational efficiency.",
      rating: 5,
      position: "CTO",
      company: "TechCorp Global"
    },
    {
      name: "InnovateLabs",
      logo: "https://img.freepik.com/free-vector/gradient-logo-template_23-2148995756.jpg",
      testimonial: "Working with BitSync has been game-changing. Their blockchain solutions and mobile development expertise delivered exactly what we needed for our fintech platform.",
      rating: 5,
      position: "CEO",
      company: "InnovateLabs"
    },
    {
      name: "FutureRetail Inc",
      logo: "https://img.freepik.com/free-vector/abstract-cross-logo_23-2148974985.jpg",
      testimonial: "The retail integration solutions provided by BitSync exceeded our expectations. Our e-commerce platform now handles 10x more traffic with seamless performance.",
      rating: 5,
      position: "VP of Technology",
      company: "FutureRetail Inc"
    },
    {
      name: "GlobalHealth Systems",
      logo: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg",
      testimonial: "BitSync's healthcare technology solutions have revolutionized our patient care system. The telemedicine platform they built is now serving thousands of patients daily.",
      rating: 5,
      position: "Chief Medical Officer",
      company: "GlobalHealth Systems"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Tailored technology solutions designed specifically for your industry's 
            unique challenges and opportunities.
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <industry.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{industry.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  {industry.description}
                </CardDescription>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <Badge variant="outline" className="text-blue-600 border-blue-600 mb-2">
                    Success Story
                  </Badge>
                  <p className="text-sm text-gray-700">{industry.caseStudy}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Partners & Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our partners and clients say about working with BitSync Group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{partner.name}</CardTitle>
                      <div className="flex items-center space-x-1">
                        {[...Array(partner.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                    <p className="text-gray-600 italic mb-4 pl-6">
                      "{partner.testimonial}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{partner.position}</p>
                      <p className="text-sm text-gray-500">{partner.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partner Logos Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Technology Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              <img src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg" alt="Partner" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://img.freepik.com/free-vector/gradient-logo-template_23-2148995756.jpg" alt="Partner" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://img.freepik.com/free-vector/abstract-cross-logo_23-2148974985.jpg" alt="Partner" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg" alt="Partner" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg" alt="Partner" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://img.freepik.com/free-vector/gradient-logo-template_23-2148995756.jpg" alt="Partner" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The BitSync Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our industry-specific solutions deliver measurable results and competitive advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Analysis", description: "Understand your business needs and current challenges" },
              { step: "02", title: "Solution Design", description: "Create customized solutions tailored to your requirements" },
              { step: "03", title: "Development & Testing", description: "Build and rigorously test the solution" },
              { step: "04", title: "Deployment & Support", description: "Launch the solution and provide ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Industry with BitSync
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to see how our solutions can revolutionize your business? Let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
