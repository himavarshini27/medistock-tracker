import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Pencil, Trash2, Plus } from "lucide-react";
import { mockMedicines } from "@/lib/mockData";
import { Link } from "react-router-dom";
import { Medicine } from "@/types/medicine";

const StockManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [medicines] = useState<Medicine[]>(mockMedicines);

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.batchNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStockStatus = (quantity: number) => {
    if (quantity < 10) return { color: "text-destructive", bg: "bg-destructive-light", label: "Critical" };
    if (quantity < 20) return { color: "text-warning", bg: "bg-warning-light", label: "Low" };
    return { color: "text-success", bg: "bg-success-light", label: "Good" };
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Stock Management</h1>
            <p className="text-muted-foreground">Manage and track your medicine inventory</p>
          </div>
          <Link to="/add-medicine">
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> Add New Medicine
            </Button>
          </Link>
        </div>

        <Card className="border-2 animate-fade-in">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle>Medicine Inventory</CardTitle>
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
                    <TableHead>Quantity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Manufacturer</TableHead>
                    <TableHead>MRP (₹)</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMedicines.map((medicine) => {
                    const status = getStockStatus(medicine.quantity);
                    return (
                      <TableRow key={medicine.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{medicine.name}</TableCell>
                        <TableCell className="text-muted-foreground">{medicine.batchNumber}</TableCell>
                        <TableCell>
                          <span className="font-semibold">{medicine.quantity}</span> units
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}>
                            {status.label}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{medicine.manufacturer}</TableCell>
                        <TableCell className="font-medium">₹{medicine.mrp.toFixed(2)}</TableCell>
                        <TableCell>{new Date(medicine.expiryDate).toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="icon" className="hover:bg-primary-light hover:text-primary">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:bg-destructive-light hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
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

export default StockManagement;
