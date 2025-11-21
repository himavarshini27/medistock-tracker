import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, Clock, ShieldCheck, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Package,
      title: "Stock Management",
      description: "Track medicine inventory with real-time updates and low-stock alerts"
    },
    {
      icon: Clock,
      title: "Expiry Tracking",
      description: "Monitor expiry dates with color-coded alerts for near-expiry and expired items"
    },
    {
      icon: ShieldCheck,
      title: "Quality Control",
      description: "Ensure medicine safety with batch tracking and manufacturer details"
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "View comprehensive insights with key metrics and statistics"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Pharmacy Medicine Stock & Expiry Tracking System
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in">
              Streamline your pharmacy operations with intelligent stock management and automated expiry alerts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/dashboard">
                <Button size="lg" variant="secondary" className="gap-2 text-base">
                  View Dashboard <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/add-medicine">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  Add Medicine
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to manage your pharmacy inventory efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in">
                <CardContent className="p-6">
                  <div className="bg-primary-light p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Begin managing your pharmacy inventory with our intuitive system
              </p>
              <Link to="/stock">
                <Button size="lg" className="gap-2">
                  Manage Stock <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
