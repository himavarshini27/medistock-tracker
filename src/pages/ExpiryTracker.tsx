import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, AlertCircle, Clock } from "lucide-react";
import { mockMedicines } from "@/lib/mockData";
import { Medicine } from "@/types/medicine";

const ExpiryTracker = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getExpiryStatus = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const daysUntilExpiry = Math.floor((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (daysUntilExpiry < 0) {
      return { color: "text-destructive", bg: "bg-destructive-light", label: "Expired", icon: AlertCircle, days: Math.abs(daysUntilExpiry) };
    } else if (daysUntilExpiry <= 30) {
      return { color: "text-warning", bg: "bg-warning-light", label: "Expiring Soon", icon: Clock, days: daysUntilExpiry };
    } else if (daysUntilExpiry <= 90) {
      return { color: "text-warning", bg: "bg-warning-light/50", label: "Monitor", icon: Clock, days: daysUntilExpiry };
    }
    return { color: "text-success", bg: "bg-success-light", label: "Good", icon: Clock, days: daysUntilExpiry };
  };

  const sortedMedicines = useMemo(() => {
    return [...mockMedicines].sort((a, b) => {
      const dateA = new Date(a.expiryDate).getTime();
      const dateB = new Date(b.expiryDate).getTime();
      return dateA - dateB;
    });
  }, []);

  const filteredMedicines = sortedMedicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.batchNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = useMemo(() => {
    const today = new Date();
    const expired = mockMedicines.filter(m => new Date(m.expiryDate) < today).length;
    const expiringSoon = mockMedicines.filter(m => {
      const expiry = new Date(m.expiryDate);
      const days = Math.floor((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      return days >= 0 && days <= 30;
    }).length;
    
    return { expired, expiringSoon };
  }, []);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Expiry Tracker</h1>
          <p className="text-muted-foreground">Monitor medicine expiry dates and get timely alerts</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 border-destructive/20 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertCircle className="h-5 w-5" />
                Expired Medicines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-destructive">{stats.expired}</div>
              <p className="text-sm text-muted-foreground mt-2">Items past expiry date</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-warning/20 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-warning">
                <Clock className="h-5 w-5" />
                Expiring Soon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-warning">{stats.expiringSoon}</div>
              <p className="text-sm text-muted-foreground mt-2">Items expiring within 30 days</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 animate-fade-in">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle>Expiry Status</CardTitle>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search medicines..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Medicine Name</TableHead>
                    <TableHead>Batch No.</TableHead>
                    <TableHead>Manufacturer</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Days Remaining</TableHead>
                    <TableHead>Quantity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMedicines.map((medicine) => {
                    const status = getExpiryStatus(medicine.expiryDate);
                    const StatusIcon = status.icon;
                    
                    return (
                      <TableRow key={medicine.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{medicine.name}</TableCell>
                        <TableCell className="text-muted-foreground">{medicine.batchNumber}</TableCell>
                        <TableCell className="text-muted-foreground">{medicine.manufacturer}</TableCell>
                        <TableCell className="font-medium">
                          {new Date(medicine.expiryDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color} flex items-center gap-1 w-fit`}>
                            <StatusIcon className="h-3 w-3" />
                            {status.label}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`font-semibold ${status.color}`}>
                            {status.days} days {status.label === "Expired" ? "ago" : "left"}
                          </span>
                        </TableCell>
                        <TableCell>{medicine.quantity} units</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExpiryTracker;
