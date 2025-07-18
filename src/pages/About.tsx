
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2010", title: "Founded", description: "BitSync Group established with a vision to revolutionize technology solutions" },
    { year: "2015", title: "Global Expansion", description: "Expanded operations to 25+ countries" },
    { year: "2020", title: "Digital Transformation", description: "Led major digital transformation initiatives worldwide" },
    { year: "2024", title: "Innovation Leader", description: "Recognized as a global leader in technology innovation" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with technology"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and strategic partnerships"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver nothing less than premium quality in everything we do"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We create solutions that make a positive difference worldwide"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About BitSync Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a global technology and consulting powerhouse, transforming businesses 
            through innovative solutions and strategic partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, BitSync Group began as a vision to bridge the gap between 
              cutting-edge technology and practical business solutions. Today, we stand as 
              a global powerhouse serving clients across 50+ countries.
            </p>
            <p className="text-gray-600 mb-6">
              Our journey from a startup to a multinational corporation reflects our 
              unwavering commitment to innovation, quality, and customer success. We've 
              consistently evolved our services to meet the changing demands of the digital age.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Technology Innovation</Badge>
              <Badge variant="secondary">Global Presence</Badge>
              <Badge variant="secondary">Premium Quality</Badge>
              <Badge variant="secondary">Customer-Centric</Badge>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-4">14+</div>
                <div className="text-xl text-gray-700">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To empower businesses and consumers worldwide with innovative technology 
                  solutions that drive growth, efficiency, and competitive advantage in an 
                  ever-evolving digital landscape.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be the world's most trusted technology partner, leading the digital 
                  transformation revolution while making advanced technology accessible, 
                  affordable, and beneficial for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped BitSync Group into the global leader we are today.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{milestone.title}</CardTitle>
                          <Badge variant="outline" className="text-blue-600 border-blue-600">
                            {milestone.year}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
