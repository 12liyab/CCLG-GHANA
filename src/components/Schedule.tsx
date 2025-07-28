import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Users } from "lucide-react";

const Schedule = () => {
  const scheduleData = [
    { time: "08:30 AM", activity: "Registration & Networking", speaker: "Participants", type: "networking" },
    { time: "08:55 – 09:00 AM", activity: "Opening Prayer", speaker: "Rev. Cyril Fayose", type: "ceremony" },
    { time: "09:00 – 09:05 AM", activity: "Welcome Address", speaker: "Prof. Kwamena Kwansah-Aidoo", type: "address" },
    { time: "09:05 – 09:10 AM", activity: "Statements", speaker: "Prof. Kwadwo Owusu", type: "address" },
    { time: "09:10 – 09:15 AM", activity: "Statements", speaker: "Kofi Don-Agor", type: "address" },
    { time: "09:15 – 09:25 AM", activity: "Statements on the Theme", speaker: "Hon. Dr. Emmanuel Marfo", type: "keynote" },
    { time: "09:25 – 09:35 AM", activity: "Statements on the Theme", speaker: "Hon. Ursula Owusu-Ekuful", type: "keynote" },
    { time: "09:35 – 09:45 AM", activity: "Statements on the Theme", speaker: "UNEP Coordinator Ghana", type: "keynote" },
    { time: "09:45 – 10:00 AM", activity: "Key Note Speaker", speaker: "Hon. Dr. Kwaku Afriyie", type: "keynote" },
    { time: "10:00 – 10:30 AM", activity: "Brief Messages from Sponsors/Partners", speaker: "Sponsors and Partners", type: "sponsors" },
    { time: "10:30 – 11:00 AM", activity: "Tea/Coffee Break", speaker: "Participants", type: "break" },
    { time: "11:00 – 11:30 AM", activity: "Session 1: Communicating Climate Resilience in Rural & Urban Areas", speaker: "Dr. Antwi-Boasiako Amoah", type: "session" },
    { time: "11:30 – 11:45 AM", activity: "Panel Discussion", speaker: "Moderator: Dr. Collins Gameli Hodoli", type: "panel" },
    { time: "", activity: "", speaker: "Panelists: Dr. Nii Addo-Bruce, Prof. Nana Ama Browne Klutse, Hon. Dr. Godfred Jasaw", type: "panel-detail" },
    { time: "11:45 – 12:15 PM", activity: "Q & A Session", speaker: "Participants/Moderators", type: "qa" },
    { time: "12:15 – 01:00 PM", activity: "Lunch Break", speaker: "Participants", type: "break" },
    { time: "01:00 – 01:30 PM", activity: "Session 2: Media and Communicators' Role in Climate Change Mitigation", speaker: "Prof. Abeiku Blankson", type: "session" },
    { time: "01:30 – 02:15 PM", activity: "Panel Discussion", speaker: "Moderator: Margaret Impraim", type: "panel" },
    { time: "", activity: "", speaker: "Panelists: Dr. Lawrencia Agyepong, Hon. Prof. Hamsa Adam, Dr. Maxwell Ampong", type: "panel-detail" },
    { time: "02:15 – 02:45 PM", activity: "Q & A Session", speaker: "Participants/Moderators", type: "qa" },
    { time: "02:45 – 03:00 PM", activity: "Closing Remarks & Conference Summary", speaker: "Prof. Kwamena Kwansah-Aidoo", type: "closing" },
    { time: "", activity: "Closing Prayer", speaker: "Rev. Nicolas Appiah", type: "ceremony" },
    { time: "03:00 PM", activity: "Networking & Refreshments", speaker: "All Participants, Okyeame Kwame/ Nana Yaa Nyarkoa Amoah", type: "networking" },
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-earth-green/10 border-earth-green/30 text-earth-green";
      case "session":
        return "bg-forest-green/10 border-forest-green/30 text-forest-green";
      case "panel":
        return "bg-leaf-green/10 border-leaf-green/30 text-leaf-green";
      case "panel-detail":
        return "bg-leaf-green/5 border-leaf-green/20 text-leaf-green ml-4";
      case "break":
        return "bg-sage-green/10 border-sage-green/30 text-sage-green";
      case "networking":
        return "bg-mint-green/10 border-mint-green/30 text-mint-green";
      case "ceremony":
        return "bg-primary/10 border-primary/30 text-primary";
      case "address":
        return "bg-accent/50 border-accent text-accent-foreground";
      case "sponsors":
        return "bg-secondary/50 border-secondary text-secondary-foreground";
      case "qa":
        return "bg-muted/50 border-muted text-muted-foreground";
      case "closing":
        return "bg-destructive/10 border-destructive/30 text-destructive";
      default:
        return "bg-card border-border text-card-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "keynote":
      case "session":
        return <Users className="h-4 w-4" />;
      case "break":
      case "networking":
        return <MapPin className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-earth-green mb-4">Conference Schedule</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Detailed program for September 25th - 26th, 2025
          </p>
          <div className="bg-mint-green/10 p-4 rounded-lg border border-mint-green/30 max-w-2xl mx-auto">
            <p className="text-forest-green font-semibold">
              Interactive schedule with session details and speaker information
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="card-climate mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-earth-green">Day 1 - September 25th, 2025</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                UniMAC, Accra, Ghana
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="space-y-4">
            {scheduleData.map((item, index) => (
              <Card 
                key={index} 
                className={`transition-all duration-300 hover:shadow-lg hover:scale-[1.01] ${getTypeStyles(item.type)} animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    {item.time && (
                      <div className="flex items-center gap-2 min-w-[140px]">
                        {getTypeIcon(item.type)}
                        <span className="font-semibold text-sm">{item.time}</span>
                      </div>
                    )}
                    
                    <div className="flex-1">
                      {item.activity && (
                        <h3 className="font-semibold text-lg mb-1">{item.activity}</h3>
                      )}
                      {item.speaker && (
                        <p className="text-sm opacity-80">
                          <span className="font-medium">Speaker/Facilitator:</span> {item.speaker}
                        </p>
                      )}
                    </div>

                    <div className="hidden md:block">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-current/10 capitalize">
                        {item.type.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Day 2 placeholder */}
          <Card className="card-climate mt-12">
            <CardHeader>
              <CardTitle className="text-2xl text-earth-green">Day 2 - September 26th, 2025</CardTitle>
              <CardDescription>
                Additional sessions and workshops (Schedule to be announced)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  Detailed schedule for Day 2 will be published soon.
                </p>
                <div className="bg-sage-green/10 p-4 rounded-lg border border-sage-green/30">
                  <p className="text-forest-green">
                    Expected activities include workshops, breakout sessions, and closing ceremonies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legend */}
          <Card className="card-climate mt-8">
            <CardHeader>
              <CardTitle className="text-lg text-earth-green">Schedule Legend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { type: "keynote", label: "Keynote" },
                  { type: "session", label: "Sessions" },
                  { type: "panel", label: "Panels" },
                  { type: "break", label: "Breaks" },
                  { type: "networking", label: "Networking" },
                  { type: "ceremony", label: "Ceremony" },
                ].map((item) => (
                  <div key={item.type} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded border ${getTypeStyles(item.type)}`} />
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Schedule;