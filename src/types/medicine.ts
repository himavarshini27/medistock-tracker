export interface Medicine {
  id: string;
  name: string;
  batchNumber: string;
  quantity: number;
  manufacturer: string;
  mrp: number;
  expiryDate: string;
  category?: string;
}

export type MedicineFormData = Omit<Medicine, 'id'>;
