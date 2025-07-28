import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Globe, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Continental Reach",
      description: "Bringing together climate experts from across Africa to share knowledge and best practices."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Focus",
      description: "Showcasing cutting-edge solutions and technologies for climate communication."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Network Building", 
      description: "Creating lasting connections between policymakers, researchers, and practitioners."
    }
  ];

  return (
    <section id="about" className="py-20 bg-sage-green/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-earth-green mb-6">About ACCCE 2025</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Africa Climate Communications Conference & Exhibition is a premier platform for 
              advancing climate communication strategies that drive meaningful action across the continent.
            </p>
          </div>

          {/* Conference Overview */}
          <Card className="card-climate mb-12 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl text-earth-green">Conference Overview</CardTitle>
              <CardDescription>Understanding our mission and objectives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  ACCCE 2025 addresses the critical need for effective climate communication in Africa, 
                  focusing on how to align country-specific climate actions with the African Union Framework. 
                  The conference brings together researchers, policymakers, communicators, and civil society 
                  organizations to explore innovative approaches to climate messaging that resonate with 
                  diverse African audiences.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  With climate change posing unprecedented challenges to African economies and communities, 
                  effective communication has never been more crucial. This conference serves as a catalyst 
                  for developing communication strategies that drive policy implementation, community engagement, 
                  and sustainable climate action across the continent.
                </p>
              </div>

              {/* Mission, Vision, Objectives */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="bg-earth-green/5 border-earth-green/20">
                  <CardHeader className="text-center">
                    <Target className="h-10 w-10 text-earth-green mx-auto mb-2" />
                    <CardTitle className="text-earth-green">Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-center">
                      To enhance climate communication effectiveness across Africa by fostering 
                      collaboration and knowledge sharing among stakeholders.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-forest-green/5 border-forest-green/20">
                  <CardHeader className="text-center">
                    <Eye className="h-10 w-10 text-forest-green mx-auto mb-2" />
                    <CardTitle className="text-forest-green">Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-center">
                      A climate-resilient Africa where effective communication drives sustainable 
                      action and informed decision-making at all levels.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-leaf-green/5 border-leaf-green/20">
                  <CardHeader className="text-center">
                    <Heart className="h-10 w-10 text-leaf-green mx-auto mb-2" />
                    <CardTitle className="text-leaf-green">Values</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-center">
                      Collaboration, innovation, inclusivity, and evidence-based approaches 
                      to climate communication and action.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Theme Significance */}
          <Card className="card-climate mb-12 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl text-earth-green">Theme Significance</CardTitle>
              <CardDescription>Why this theme matters now</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-mint-green/10 p-6 rounded-lg border border-mint-green/30 mb-6">
                <h3 className="text-xl font-semibold text-forest-green mb-3">
                  "Communicating the Impacts of Climate Change on African Economies: 
                  Aligning Country-Specific Climate Actions with the AU Framework"
                </h3>
                <p className="text-foreground">
                  This theme acknowledges the unique economic challenges climate change poses to 
                  African nations and the critical need for coordinated continental responses.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-earth-green rounded-full mt-2" />
                  <p className="text-foreground">
                    <strong>Economic Impact Focus:</strong> Understanding how climate communication 
                    can better convey economic implications to drive policy and investment decisions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2" />
                  <p className="text-foreground">
                    <strong>Country-Specific Approaches:</strong> Recognizing that effective climate 
                    communication must be tailored to national contexts while supporting continental goals.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-leaf-green rounded-full mt-2" />
                  <p className="text-foreground">
                    <strong>AU Framework Alignment:</strong> Ensuring national climate actions and 
                    communications support broader African Union climate objectives and strategies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-climate text-center animate-scale-in hover-float hover-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-earth-green mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Organizing Committee */}
          <Card className="card-climate animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl text-earth-green">Organizing Committee</CardTitle>
              <CardDescription>Leading experts driving the conference vision</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-earth-green/5 p-6 rounded-lg border border-earth-green/20">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="/lovable-uploads/10dca966-29a3-4e80-92f3-993884b5b9c5.png" 
                    alt="CCLG-Africa" 
                    className="h-16 w-auto"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-earth-green">CCLG-Africa</h3>
                    <p className="text-muted-foreground">Climate Communications and Local Governance - Africa</p>
                  </div>
                </div>
                <p className="text-foreground">
                  CCLG-Africa is a leading organization dedicated to advancing climate communication 
                  and governance across the African continent. With expertise in policy development, 
                  community engagement, and stakeholder collaboration, CCLG-Africa brings together 
                  diverse voices to address climate challenges through effective communication strategies.
                </p>
              </div>

              <div className="mt-6 p-4 bg-sage-green/10 rounded-lg border border-sage-green/30">
                <p className="text-sm text-center text-muted-foreground">
                  Detailed committee member profiles and additional organizing partners will be announced soon.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Venue Information */}
          <Card className="card-climate mt-12 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl text-earth-green">Venue Information</CardTitle>
              <CardDescription>Where innovation meets collaboration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-forest-green mb-4">UniMAC, Accra</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-earth-green rounded-full mt-2" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">University of Media, Arts and Communication, Accra, Ghana</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-forest-green rounded-full mt-2" />
                      <div>
                        <p className="font-medium">Accessibility</p>
                        <p className="text-muted-foreground">Wheelchair accessible facilities and support services available</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-leaf-green rounded-full mt-2" />
                      <div>
                        <p className="font-medium">Technology</p>
                        <p className="text-muted-foreground">State-of-the-art conference facilities with hybrid participation options</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-mint-green/10 p-6 rounded-lg border border-mint-green/30">
                  <h4 className="text-lg font-semibold text-forest-green mb-3">Getting There</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>From Airport:</strong> 30-minute drive from Kotoka International Airport</p>
                    <p><strong>Public Transport:</strong> Accessible via trotro and taxi services</p>
                    <p><strong>Parking:</strong> On-site parking available for registered participants</p>
                    <p><strong>Accommodation:</strong> Partner hotels with special conference rates available</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
