import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { FileText, User, Briefcase, Calendar, Phone, Shield, MessageCircle } from "lucide-react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    // Section 1: Personal Information
    title: "",
    firstName: "",
    lastName: "",
    preferredName: "",
    gender: "",
    nationality: "",
    countryOfResidence: "",
    email: "",
    mobile: "",
    
    // Section 2: Professional Details
    organization: "",
    department: "",
    jobTitle: "",
    address: "",
    city: "",
    postalCode: "",
    primaryArea: "",
    isStudent: "",
    studentInstitution: "",
    studentId: "",
    
    // Section 3: Conference Participation
    participationType: "",
    willPresent: "",
    presentationType: "",
    dietaryRestrictions: "",
    specialAssistance: "",
    
    // Section 4: Emergency Contact
    emergencyName: "",
    emergencyRelationship: "",
    emergencyMobile: "",
    
    // Section 5: Terms
    agreeTerms: false,
    signature: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "Terms & Conditions Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Registration Successful!",
      description: "Thank you for registering for ACCCE 2025. We'll send you a confirmation email shortly.",
    });

    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="registration" className="py-20 bg-sage-green/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-earth-green mb-4">Conference Registration</h2>
            <p className="text-xl text-muted-foreground">ACCCE2025 Conference Online Registration Form</p>
            <div className="mt-4 p-4 bg-mint-green/20 rounded-lg border border-mint-green/30">
              <p className="text-forest-green font-semibold">Complete all sections accurately to secure your spot at ACCCE 2025</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Personal Information */}
            <Card className="card-climate animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-earth-green">
                  <User className="h-5 w-5" />
                  Section 1: Personal Information
                </CardTitle>
                <CardDescription>Please provide your personal details</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Select onValueChange={(value) => handleInputChange('title', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select title" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mr">Mr.</SelectItem>
                        <SelectItem value="ms">Ms.</SelectItem>
                        <SelectItem value="dr">Dr.</SelectItem>
                        <SelectItem value="prof">Prof.</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="gender">Gender *</Label>
                    <Select onValueChange={(value) => handleInputChange('gender', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="prefer-not-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="preferredName">Preferred Name for Badge (if different)</Label>
                  <Input
                    id="preferredName"
                    value={formData.preferredName}
                    onChange={(e) => handleInputChange('preferredName', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nationality">Nationality *</Label>
                    <Input
                      id="nationality"
                      value={formData.nationality}
                      onChange={(e) => handleInputChange('nationality', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="countryOfResidence">Country of Residence *</Label>
                    <Input
                      id="countryOfResidence"
                      value={formData.countryOfResidence}
                      onChange={(e) => handleInputChange('countryOfResidence', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile Number (including country code) *</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                      placeholder="+233 55 628 2306"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Professional Details */}
            <Card className="card-climate animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-earth-green">
                  <Briefcase className="h-5 w-5" />
                  Section 2: Professional / Affiliation Details
                </CardTitle>
                <CardDescription>Provide your organizational and professional information</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="organization">Organization/Institution *</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="department">Department/Faculty</Label>
                    <Input
                      id="department"
                      value={formData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="jobTitle">Job Title/Position *</Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="primaryArea">Primary Area of Work/Interest *</Label>
                  <Select onValueChange={(value) => handleInputChange('primaryArea', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="climate-science">Climate Science</SelectItem>
                      <SelectItem value="economics">Economics</SelectItem>
                      <SelectItem value="policy">Policy</SelectItem>
                      <SelectItem value="communications">Communications</SelectItem>
                      <SelectItem value="civil-society">Civil Society</SelectItem>
                      <SelectItem value="academia">Academia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Are you a student? *</Label>
                  <RadioGroup 
                    value={formData.isStudent} 
                    onValueChange={(value) => handleInputChange('isStudent', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="student-yes" />
                      <Label htmlFor="student-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="student-no" />
                      <Label htmlFor="student-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.isStudent === 'yes' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-mint-green/10 rounded-lg border border-mint-green/30">
                    <div>
                      <Label htmlFor="studentInstitution">Institution *</Label>
                      <Input
                        id="studentInstitution"
                        value={formData.studentInstitution}
                        onChange={(e) => handleInputChange('studentInstitution', e.target.value)}
                        required={formData.isStudent === 'yes'}
                      />
                    </div>
                    <div>
                      <Label htmlFor="studentId">Student ID Number *</Label>
                      <Input
                        id="studentId"
                        value={formData.studentId}
                        onChange={(e) => handleInputChange('studentId', e.target.value)}
                        required={formData.isStudent === 'yes'}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Section 3: Conference Participation */}
            <Card className="card-climate animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-earth-green">
                  <Calendar className="h-5 w-5" />
                  Section 3: Conference Participation
                </CardTitle>
                <CardDescription>How do you plan to participate in the conference?</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div>
                  <Label>How do you plan to participate? *</Label>
                  <RadioGroup 
                    value={formData.participationType} 
                    onValueChange={(value) => handleInputChange('participationType', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="in-person" id="in-person" />
                      <Label htmlFor="in-person">In-person</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="virtual" id="virtual" />
                      <Label htmlFor="virtual">Virtually (Online)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Will you be presenting a paper/poster? *</Label>
                  <RadioGroup 
                    value={formData.willPresent} 
                    onValueChange={(value) => handleInputChange('willPresent', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="present-yes" />
                      <Label htmlFor="present-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="present-no" />
                      <Label htmlFor="present-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.willPresent === 'yes' && (
                  <div className="p-4 bg-mint-green/10 rounded-lg border border-mint-green/30">
                    <Label>Presentation Type *</Label>
                    <RadioGroup 
                      value={formData.presentationType} 
                      onValueChange={(value) => handleInputChange('presentationType', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="oral" id="oral" />
                        <Label htmlFor="oral">Oral Presentation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="poster" id="poster" />
                        <Label htmlFor="poster">Poster Presentation</Label>
                      </div>
                    </RadioGroup>
                    <p className="text-sm text-muted-foreground mt-2">
                      Note: Abstract submission guidelines and deadlines are separate.
                    </p>
                  </div>
                )}

                <div>
                  <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
                  <Select onValueChange={(value) => handleInputChange('dietaryRestrictions', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select any dietary restrictions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                      <SelectItem value="gluten-free">Gluten-free</SelectItem>
                      <SelectItem value="halal">Halal</SelectItem>
                      <SelectItem value="kosher">Kosher</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="specialAssistance">Special Assistance or Accommodation</Label>
                  <Textarea
                    id="specialAssistance"
                    value={formData.specialAssistance}
                    onChange={(e) => handleInputChange('specialAssistance', e.target.value)}
                    placeholder="e.g., wheelchair access, sign language interpreter"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Emergency Contact */}
            <Card className="card-climate animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-earth-green">
                  <Phone className="h-5 w-5" />
                  Section 4: Emergency Contact
                </CardTitle>
                <CardDescription>Provide emergency contact information</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  <Label htmlFor="emergencyName">Name *</Label>
                  <Input
                    id="emergencyName"
                    value={formData.emergencyName}
                    onChange={(e) => handleInputChange('emergencyName', e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="emergencyRelationship">Relationship *</Label>
                    <Input
                      id="emergencyRelationship"
                      value={formData.emergencyRelationship}
                      onChange={(e) => handleInputChange('emergencyRelationship', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyMobile">Mobile Number (including country code) *</Label>
                    <Input
                      id="emergencyMobile"
                      type="tel"
                      value={formData.emergencyMobile}
                      onChange={(e) => handleInputChange('emergencyMobile', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Terms and Conditions */}
            <Card className="card-climate animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-earth-green">
                  <Shield className="h-5 w-5" />
                  Section 5: Terms and Conditions
                </CardTitle>
                <CardDescription>Please review and accept the terms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-mint-green/10 p-4 rounded-lg border border-mint-green/30">
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• I confirm that all the information provided in this form is accurate to the best of my knowledge.</li>
                    <li>• I understand that registration fees are non-refundable after 10th September 2025.</li>
                    <li>• I agree to abide by the conference code of conduct.</li>
                    <li>• I consent to CCLG-Africa processing my data to organize and manage ACCCE2025.</li>
                  </ul>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm font-medium">
                    I have read and agree to the terms and conditions *
                  </Label>
                </div>

                <div>
                  <Label htmlFor="signature">Signature (or type full name for online submission) *</Label>
                  <Input
                    id="signature"
                    value={formData.signature}
                    onChange={(e) => handleInputChange('signature', e.target.value)}
                    placeholder="Type your full name"
                    required
                  />
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Date of Registration: {new Date().toLocaleDateString()}
                  </p>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="btn-hero px-12 py-3 text-lg hover:scale-105 transition-all duration-300"
                  >
                    Submit Registration
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>

          {/* Contact Information */}
          <div className="mt-12 text-center p-6 bg-earth-green/10 rounded-lg border border-earth-green/20">
            <h3 className="text-xl font-semibold text-earth-green mb-4">Thank you for registering for ACCCE2025!</h3>
            <p className="text-muted-foreground mb-4">We look forward to your participation.</p>
            <div className="space-y-3 text-sm">
              <p className="font-medium text-lg text-earth-green">For any inquiries, please contact:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="space-y-2">
                  <p className="font-medium">Email: accce2025@cclg-africa.org</p>
                  <p className="font-medium">Phone: +233 55 628 2306</p>
                  <p className="font-medium">Website: accce.cclg-africa.org</p>
                </div>
                <div className="mx-4 hidden sm:block h-16 w-px bg-earth-green/30"></div>
                <div className="flex flex-col items-center">
                  <a 
                    href="https://wa.me/233208118539?text=Hello,%20I%20have%20an%20inquiry%20about%20ACCCE2025%20Conference%20registration."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Support
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">+233 20 811 8539</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;