import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const AddMedicine = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    batchNumber: "",
    quantity: "",
    manufacturer: "",
    mrp: "",
    expiryDate: "",
    category: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Medicine name is required";
    if (!formData.batchNumber.trim()) newErrors.batchNumber = "Batch number is required";
    if (!formData.quantity || parseInt(formData.quantity) <= 0) {
      newErrors.quantity = "Valid quantity is required";
    }
    if (!formData.manufacturer.trim()) newErrors.manufacturer = "Manufacturer is required";
    if (!formData.mrp || parseFloat(formData.mrp) <= 0) {
      newErrors.mrp = "Valid MRP is required";
    }
    if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Medicine Added Successfully",
        description: `${formData.name} has been added to the inventory.`,
      });
      
      // Reset form
      setFormData({
        name: "",
        batchNumber: "",
        quantity: "",
        manufacturer: "",
        mrp: "",
        expiryDate: "",
        category: ""
      });
      
      // Navigate to stock page after 1 second
      setTimeout(() => navigate("/stock"), 1000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <Link to="/stock">
            <Button variant="ghost" className="gap-2 mb-4">
              <ArrowLeft className="h-4 w-4" /> Back to Stock
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Add New Medicine</h1>
          <p className="text-muted-foreground">Fill in the details to add a medicine to inventory</p>
        </div>

        <Card className="border-2 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Medicine Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Medicine Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Paracetamol 500mg"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="batchNumber">Batch Number *</Label>
                  <Input
                    id="batchNumber"
                    placeholder="e.g., PCM2024001"
                    value={formData.batchNumber}
                    onChange={(e) => handleChange("batchNumber", e.target.value)}
                    className={errors.batchNumber ? "border-destructive" : ""}
                  />
                  {errors.batchNumber && <p className="text-sm text-destructive">{errors.batchNumber}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity *</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="Number of units"
                    value={formData.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                    className={errors.quantity ? "border-destructive" : ""}
                  />
                  {errors.quantity && <p className="text-sm text-destructive">{errors.quantity}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="manufacturer">Manufacturer *</Label>
                  <Input
                    id="manufacturer"
                    placeholder="e.g., PharmaCare Ltd."
                    value={formData.manufacturer}
                    onChange={(e) => handleChange("manufacturer", e.target.value)}
                    className={errors.manufacturer ? "border-destructive" : ""}
                  />
                  {errors.manufacturer && <p className="text-sm text-destructive">{errors.manufacturer}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mrp">MRP (₹) *</Label>
                  <Input
                    id="mrp"
                    type="number"
                    step="0.01"
                    placeholder="e.g., 45.00"
                    value={formData.mrp}
                    onChange={(e) => handleChange("mrp", e.target.value)}
                    className={errors.mrp ? "border-destructive" : ""}
                  />
                  {errors.mrp && <p className="text-sm text-destructive">{errors.mrp}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date *</Label>
                  <Input
                    id="expiryDate"
                    type="date"
                    value={formData.expiryDate}
                    onChange={(e) => handleChange("expiryDate", e.target.value)}
                    className={errors.expiryDate ? "border-destructive" : ""}
                  />
                  {errors.expiryDate && <p className="text-sm text-destructive">{errors.expiryDate}</p>}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="category">Category (Optional)</Label>
                  <Input
                    id="category"
                    placeholder="e.g., Pain Relief, Antibiotic"
                    value={formData.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1 gap-2">
                  <Plus className="h-4 w-4" />
                  Add Medicine
                </Button>
                <Button type="button" variant="outline" onClick={() => navigate("/stock")}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddMedicine;
