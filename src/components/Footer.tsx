import { Pill, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Pill className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">MediTrack</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Smart pharmacy management system for efficient medicine stock and expiry tracking.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
              <li><a href="/stock" className="hover:text-primary transition-colors">Stock Management</a></li>
              <li><a href="/expiry" className="hover:text-primary transition-colors">Expiry Tracker</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground mb-2">
              B.Pharm Student Project
            </p>
            <p className="text-sm text-muted-foreground">
              Developed for academic purposes to demonstrate pharmacy management concepts.
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-destructive fill-current" /> for better pharmacy management
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 MediTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
