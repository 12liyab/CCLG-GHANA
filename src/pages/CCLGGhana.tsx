import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, Users, Target, Globe, Lightbulb, Building, DollarSign } from "lucide-react";

const CCLGGhana = () => {
  const panelTopics = [
    {
      title: "Mainstreaming Climate Communications into Local Development Plans",
      description: "Explore how local governments can strategically integrate climate communication into their development plans to ensure climate resilience and achieve sustainable development goals."
    },
    {
      title: "Innovative Climate Solutions at the Local Level",
      description: "Showcase innovative, community-led climate initiatives and projects from Ghana, highlighting successful approaches to climate adaptation and mitigation."
    },
    {
      title: "Climate Governance and Decentralization: Challenges and Opportunities",
      description: "Examine the critical role of local governments in climate governance, discussing challenges, opportunities, and strategies for strengthening local governance structures."
    },
    {
      title: "Climate Finance for Local Action: Accessing and Utilizing Resources",
      description: "Focus on challenges and opportunities for accessing climate finance at the local level, exploring practical ways for local governments to secure and utilize climate finance."
    },
    {
      title: "Youth Engagement and Climate Action",
      description: "Highlight the vital role of youth in climate action and explore innovative ways to engage young people in local climate governance."
    },
    {
      title: "Climate Change and Urban Planning: Building Resilient Cities",
      description: "Discuss how local governments can integrate climate change considerations into urban planning and development processes."
    },
    {
      title: "Community-Based Climate Adaptation: Lessons from Ghana",
      description: "Share valuable experiences and lessons learned from community-based climate adaptation projects in Ghana."
    }
  ];

  const partners = [
    { category: "Telecom Companies", items: ["MTN Ghana", "Telecel Ghana", "AirtelTigo Ghana"] },
    { category: "Environmental Organizations", items: ["Jospong Group", "Environmental Protection Agency (EPA)", "Centre for Energy Policy"] },
    { category: "Government Agencies", items: ["Ministry of Climate Change and Sustainability", "Ministry of Environment, Science and Technology", "Ministry Local Government and Religious Affairs", "Ministry of Finance", "Local Government Service"] },
    { category: "International Organizations", items: ["United Nations Development Programme (UNDP) Ghana", "World Bank Ghana"] }
  ];

  const panelists = [
    { category: "Government Representatives", items: ["Minister of Finance", "Minister of Climate Change and Sustainability", "Minister of Environment, Science and Technology", "Mayor of Accra or Kumasi"] },
    { category: "Climate Experts", items: ["Prof. Nana Ama Browne Klutse (EPA Ghana)", "Dr. Emmanuel Marfo (Climate Parliament)", "Nana Dr. Antwi-Boasiako Amoah (EPA)"] },
    { category: "Private Sector Representatives", items: ["CEO of MTN Ghana", "CEO of Jospong Group"] },
    { category: "Civil Society Representatives", items: ["Executive Director of the Centre for Energy Policy", "Representative from the Youth in Climate Action Network Ghana"] }
  ];

  const outcomes = [
    "Enhanced knowledge sharing on climate communication, adaptation, and mitigation strategies",
    "Identification of innovative climate solutions at the local level",
    "Strengthened local governance structures to support effective climate action",
    "Increased access to climate finance for local governments"
  ];

  const businessOpportunities = [
    "Networking opportunities: Connecting with government officials and climate experts",
    "Knowledge sharing: Learning about innovative climate solutions and best practices",
    "Access to climate finance: Exploring opportunities to access climate finance",
    "Brand visibility: Showcasing their commitment to climate action and sustainability"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">CCLG-GHANA</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Climate Communications and Local Governance
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-green-100">
            Strengthening Local Resilience: Climate Communication, Governance, and Innovation
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>2025 Conference</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Ghana</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Hybrid Format</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="panels">Panel Topics</TabsTrigger>
            <TabsTrigger value="partners">Partners</TabsTrigger>
            <TabsTrigger value="panelists">Panelists</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Conference Objective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  This conference will convene local governance practitioners, communication experts, CSOs, and other key stakeholders to share experiences, best practices, and knowledge on integrating climate communication, adaptation, and mitigation strategies into local governance structures. The goal is to promote sustainable development and enhance community resilience in the face of climate change.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-green-600" />
                  Expected Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{outcome}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  Conference Format
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The conference will be held in a hybrid format, combining in-person and virtual attendance, and will include:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge variant="outline">Keynote speeches</Badge>
                    <Badge variant="outline">Panel discussions</Badge>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline">Breakout sessions</Badge>
                    <Badge variant="outline">Networking opportunities</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="background" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  Climate in Ghana
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ghana has a tropical climate with two main seasons: a wet season (April to October) and a dry season (November to March). The country faces several climate challenges:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-green-700">Rising Temperatures</h4>
                    <p className="text-muted-foreground">Average temperatures have increased by 1°C since the 1960s.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-blue-700">Changing Rainfall Patterns</h4>
                    <p className="text-muted-foreground">Rainfall is becoming more unpredictable, affecting agriculture and water resources.</p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h4 className="font-semibold text-orange-700">Sea-level Rise</h4>
                    <p className="text-muted-foreground">Ghana's coastal regions are at risk of flooding and erosion due to sea-level rise.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="panels" className="space-y-6">
            <div className="grid gap-6">
              {panelTopics.map((topic, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700">{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{topic.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="partners" className="space-y-6">
            <div className="grid gap-6">
              {partners.map((partner, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700">{partner.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {partner.items.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="outline" className="text-sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="panelists" className="space-y-6">
            <div className="grid gap-6">
              {panelists.map((panelist, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700">{panelist.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {panelist.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="business" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Opportunities for Business Leaders in Ghana
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Business leaders can benefit from the conference through:
                </p>
                <div className="grid gap-4">
                  {businessOpportunities.map((opportunity, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 border rounded-lg hover:bg-green-50 transition-colors">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{opportunity}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-green-700 mb-4">Ready to Join the Conference?</h3>
                  <p className="text-muted-foreground mb-6">
                    Connect with climate experts, government officials, and business leaders to drive sustainable change in Ghana.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Register for CCLG-GHANA 2025
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CCLGGhana;