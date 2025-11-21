import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, AlertTriangle, Clock, TrendingUp } from "lucide-react";
import { mockMedicines } from "@/lib/mockData";
import { useMemo } from "react";

const Dashboard = () => {
  const stats = useMemo(() => {
    const today = new Date();
    const thirtyDaysFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
    
    const total = mockMedicines.length;
    const lowStock = mockMedicines.filter(m => m.quantity < 20).length;
    const nearExpiry = mockMedicines.filter(m => {
      const expiry = new Date(m.expiryDate);
      return expiry > today && expiry <= thirtyDaysFromNow;
    }).length;
    const expired = mockMedicines.filter(m => new Date(m.expiryDate) < today).length;
    
    return { total, lowStock, nearExpiry, expired };
  }, []);

  const cards = [
    {
      title: "Total Medicines",
      value: stats.total,
      icon: Package,
      gradient: "bg-gradient-primary",
      textColor: "text-primary"
    },
    {
      title: "Low Stock Alerts",
      value: stats.lowStock,
      icon: AlertTriangle,
      gradient: "bg-gradient-to-br from-warning to-warning/80",
      textColor: "text-warning"
    },
    {
      title: "Near Expiry",
      value: stats.nearExpiry,
      icon: Clock,
      gradient: "bg-gradient-to-br from-warning to-warning/80",
      textColor: "text-warning"
    },
    {
      title: "Expired Items",
      value: stats.expired,
      icon: TrendingUp,
      gradient: "bg-gradient-to-br from-destructive to-destructive/80",
      textColor: "text-destructive"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your pharmacy inventory status</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((card, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 animate-fade-in overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </CardTitle>
                  <div className={`${card.gradient} p-2 rounded-lg`}>
                    <card.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className={`text-4xl font-bold ${card.textColor}`}>
                  {card.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border-2 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Low Stock Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockMedicines
                  .filter(m => m.quantity < 20)
                  .slice(0, 5)
                  .map(medicine => (
                    <div key={medicine.id} className="flex items-center justify-between p-3 bg-warning-light rounded-lg">
                      <div>
                        <p className="font-medium">{medicine.name}</p>
                        <p className="text-sm text-muted-foreground">{medicine.manufacturer}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-warning">{medicine.quantity} units</p>
                        <p className="text-xs text-muted-foreground">Batch: {medicine.batchNumber}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-destructive" />
                Expiry Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockMedicines
                  .filter(m => {
                    const expiry = new Date(m.expiryDate);
                    const today = new Date();
                    const thirtyDays = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
                    return expiry <= thirtyDays;
                  })
                  .slice(0, 5)
                  .map(medicine => {
                    const isExpired = new Date(medicine.expiryDate) < new Date();
                    return (
                      <div key={medicine.id} className={`flex items-center justify-between p-3 rounded-lg ${isExpired ? 'bg-destructive-light' : 'bg-warning-light'}`}>
                        <div>
                          <p className="font-medium">{medicine.name}</p>
                          <p className="text-sm text-muted-foreground">{medicine.manufacturer}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${isExpired ? 'text-destructive' : 'text-warning'}`}>
                            {new Date(medicine.expiryDate).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {isExpired ? 'Expired' : 'Expiring Soon'}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
