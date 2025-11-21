import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Project Purpose",
      description: "Developed as a B.Pharm student project to demonstrate practical pharmacy management concepts and digital healthcare solutions."
    },
    {
      icon: Lightbulb,
      title: "Key Innovation",
      description: "Combines stock management with intelligent expiry tracking to minimize waste and ensure medicine safety in pharmacy operations."
    },
    {
      icon: Users,
      title: "Target Users",
      description: "Designed for pharmacists, pharmacy managers, and healthcare professionals managing medicine inventory."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <div className="bg-gradient-primary p-4 rounded-2xl w-fit mx-auto mb-6">
            <GraduationCap className="h-12 w-12 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">About MediTrack</h1>
          <p className="text-muted-foreground text-lg">B.Pharm Student Project</p>
        </div>

        <Card className="border-2 mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              MediTrack is a comprehensive Pharmacy Medicine Stock & Expiry Tracking System developed as part of a 
              Bachelor of Pharmacy (B.Pharm) academic project. This system addresses the critical need for efficient 
              medicine inventory management in pharmacies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The application helps pharmacists maintain optimal stock levels, prevent medicine wastage due to expiry, 
              and ensure patient safety through systematic inventory management. It demonstrates the practical application 
              of pharmaceutical knowledge combined with modern web technologies.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 animate-fade-in">
              <CardContent className="pt-6">
                <div className="bg-primary-light p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 animate-fade-in">
          <CardHeader>
            <CardTitle>System Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-primary-light p-1 rounded-full mt-1">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Stock Management:</strong> Track medicine inventory with real-time updates and comprehensive details
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary-light p-1 rounded-full mt-1">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Expiry Tracking:</strong> Color-coded alerts for medicines approaching expiry or already expired
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary-light p-1 rounded-full mt-1">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Low Stock Alerts:</strong> Automatic notifications for medicines below threshold quantity
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary-light p-1 rounded-full mt-1">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Dashboard Analytics:</strong> Visual overview of inventory status and key metrics
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary-light p-1 rounded-full mt-1">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Search & Filter:</strong> Quick access to medicine information through advanced search
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 mt-6 bg-gradient-card animate-fade-in">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">
                This project demonstrates the integration of pharmaceutical knowledge with digital solutions 
                to improve healthcare delivery and pharmacy operations.
              </p>
              <p className="text-sm text-muted-foreground">
                Developed with modern web technologies for educational and demonstrative purposes.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
