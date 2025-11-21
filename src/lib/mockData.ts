import { Medicine } from "@/types/medicine";

export const mockMedicines: Medicine[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    batchNumber: "PCM2024001",
    quantity: 250,
    manufacturer: "PharmaCare Ltd.",
    mrp: 45.00,
    expiryDate: "2025-06-15",
    category: "Pain Relief"
  },
  {
    id: "2",
    name: "Amoxicillin 250mg",
    batchNumber: "AMX2024002",
    quantity: 15,
    manufacturer: "MediCorp",
    mrp: 120.00,
    expiryDate: "2024-12-30",
    category: "Antibiotic"
  },
  {
    id: "3",
    name: "Cetirizine 10mg",
    batchNumber: "CTZ2024003",
    quantity: 180,
    manufacturer: "HealthPlus",
    mrp: 85.00,
    expiryDate: "2025-09-20",
    category: "Antihistamine"
  },
  {
    id: "4",
    name: "Vitamin D3 1000IU",
    batchNumber: "VTD2024004",
    quantity: 8,
    manufacturer: "NutriMed",
    mrp: 350.00,
    expiryDate: "2026-03-10",
    category: "Supplement"
  },
  {
    id: "5",
    name: "Ibuprofen 400mg",
    batchNumber: "IBU2023005",
    quantity: 95,
    manufacturer: "PharmaCare Ltd.",
    mrp: 65.00,
    expiryDate: "2024-11-25",
    category: "Pain Relief"
  },
  {
    id: "6",
    name: "Omeprazole 20mg",
    batchNumber: "OMP2024006",
    quantity: 220,
    manufacturer: "GastroHealth",
    mrp: 95.00,
    expiryDate: "2025-08-15",
    category: "Antacid"
  },
];
