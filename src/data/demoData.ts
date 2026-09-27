export interface Medicine {
  id: string;
  name: string;
  generic_name: string;
  strength: string;
  dosage_form: string;
  manufacturer: string;
  reference_price: number;
  source: string;
  updated_at: string;
}

export interface PriceSource {
  source: string;
  price: number;
}

export interface NearbySource {
  id: string;
  name: string;
  type: 'pharmacy' | 'jan_aushadhi';
  address: string;
  distance_km: number;
  lat: number;
  lng: number;
  medicine_id?: string;
}

export const demoMedicines: Medicine[] = [
  {
    id: 'med-001',
    name: 'Paracetamol',
    generic_name: 'Acetaminophen',
    strength: '500 mg',
    dosage_form: 'Tablet',
    manufacturer: 'Cipla Ltd.',
    reference_price: 25,
    source: 'Demo Data',
    updated_at: '2026-09-15',
  },
  {
    id: 'med-002',
    name: 'Azithromycin',
    generic_name: 'Azithromycin',
    strength: '500 mg',
    dosage_form: 'Tablet',
    manufacturer: 'Sun Pharma',
    reference_price: 68,
    source: 'Demo Data',
    updated_at: '2026-09-15',
  },
  {
    id: 'med-003',
    name: 'Metformin',
    generic_name: 'Metformin Hydrochloride',
    strength: '500 mg',
    dosage_form: 'Tablet',
    manufacturer: 'USV Pvt Ltd',
    reference_price: 42,
    source: 'Demo Data',
    updated_at: '2026-09-15',
  },
  {
    id: 'med-004',
    name: 'Amoxicillin',
    generic_name: 'Amoxicillin',
    strength: '250 mg',
    dosage_form: 'Capsule',
    manufacturer: 'Hetero Drugs',
    reference_price: 55,
    source: 'Demo Data',
    updated_at: '2026-09-15',
  },
  {
    id: 'med-005',
    name: 'Omeprazole',
    generic_name: 'Omeprazole',
    strength: '20 mg',
    dosage_form: 'Capsule',
    manufacturer: 'Dr. Reddy\'s',
    reference_price: 38,
    source: 'Demo Data',
    updated_at: '2026-09-15',
  },
  {
    id: 'med-006',
    name: 'Cetirizine',
    generic_name: 'Cetirizine Hydrochloride',
    strength: '10 mg',
    dosage_form: 'Tablet',
    manufacturer: 'Mankind Pharma',
    reference_price: 15,
    source: 'Demo Data',
    updated_at: '2026-09-15',
  },
  {
    id: 'med-007',
    name: 'Atorvastatin',
    generic_name: 'Atorvastatin Calcium',
    strength: '10 mg',
    dosage_form: 'Tablet',
    manufacturer: 'Lupin Ltd',
    reference_price: 72,
    source: 'Demo Data',
    updated_at: '2026-09-15',
  },
  {
    id: 'med-008',
    name: 'Ranitidine',
    generic_name: 'Ranitidine',
    strength: '150 mg',
    dosage_form: 'Tablet',
    manufacturer: 'Zydus Cadila',
    reference_price: 22,
    source: 'Demo Data',
    updated_at: '2026-09-15',
  },
];

export const demoPrices: Record<string, PriceSource[]> = {
  'med-001': [
    { source: 'Local Pharmacy A', price: 25 },
    { source: 'Local Pharmacy B', price: 28 },
    { source: 'Jan Aushadhi Kendra', price: 5 },
  { source: 'Online Pharmacy', price: 22 },
  ],
  'med-002': [
    { source: 'Local Pharmacy A', price: 68 },
    { source: 'Local Pharmacy B', price: 72 },
    { source: 'Jan Aushadhi Kendra', price: 18 },
    { source: 'Online Pharmacy', price: 65 },
  ],
  'med-003': [
    { source: 'Local Pharmacy A', price: 42 },
    { source: 'Local Pharmacy B', price: 45 },
    { source: 'Jan Aushadhi Kendra', price: 10 },
    { source: 'Online Pharmacy', price: 40 },
  ],
  'med-004': [
    { source: 'Local Pharmacy A', price: 55 },
    { source: 'Local Pharmacy B', price: 58 },
    { source: 'Jan Aushadhi Kendra', price: 15 },
    { source: 'Online Pharmacy', price: 52 },
  ],
  'med-005': [
    { source: 'Local Pharmacy A', price: 38 },
    { source: 'Local Pharmacy B', price: 40 },
    { source: 'Jan Aushadhi Kendra', price: 8 },
    { source: 'Online Pharmacy', price: 35 },
  ],
  'med-006': [
    { source: 'Local Pharmacy A', price: 15 },
    { source: 'Local Pharmacy B', price: 18 },
    { source: 'Jan Aushadhi Kendra', price: 3 },
    { source: 'Online Pharmacy', price: 14 },
  ],
  'med-007': [
    { source: 'Local Pharmacy A', price: 72 },
    { source: 'Local Pharmacy B', price: 75 },
    { source: 'Jan Aushadhi Kendra', price: 20 },
    { source: 'Online Pharmacy', price: 70 },
  ],
  'med-008': [
    { source: 'Local Pharmacy A', price: 22 },
    { source: 'Local Pharmacy B', price: 25 },
    { source: 'Jan Aushadhi Kendra', price: 6 },
    { source: 'Online Pharmacy', price: 20 },
  ],
};

export const demoNearbySources: NearbySource[] = [
  {
    id: 'src-001',
    name: 'City Medical Store',
    type: 'pharmacy',
    address: '123 Main Street, Near Bus Stand, Delhi',
    distance_km: 0.8,
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: 'src-002',
    name: 'Jan Aushadhi Kendra - Sector 12',
    type: 'jan_aushadhi',
    address: 'Sector 12 Market, Rohini, Delhi',
    distance_km: 1.5,
    lat: 28.73,
    lng: 77.08,
  },
  {
    id: 'src-003',
    name: 'Health Plus Pharmacy',
    type: 'pharmacy',
    address: '45 Park Road, Civil Lines, Delhi',
    distance_km: 2.1,
    lat: 28.6892,
    lng: 77.227,
  },
  {
    id: 'src-004',
    name: 'Jan Aushadhi Kendra - Karol Bagh',
    type: 'jan_aushadhi',
    address: 'Ajmal Khan Road, Karol Bagh, Delhi',
    distance_km: 2.8,
    lat: 28.6519,
    lng: 77.1909,
  },
  {
    id: 'src-005',
    name: 'Wellness Medical Store',
    type: 'pharmacy',
    address: '78 Market Road, Lajpat Nagar, Delhi',
    distance_km: 3.5,
    lat: 28.5677,
    lng: 77.241,
  },
  {
    id: 'src-006',
    name: 'Jan Aushadhi Kendra - Saket',
    type: 'jan_aushadhi',
    address: 'Saket District Centre, Delhi',
    distance_km: 4.2,
    lat: 28.5245,
    lng: 77.2066,
  },
];

export interface PrescriptionRecord {
  id: string;
  date: string;
  medicineCount: number;
  medicines: ExtractedMedicine[];
}

export interface ExtractedMedicine {
  name: string;
  strength: string;
  dosage_form: string;
  quantity: string;
  confidence: 'high' | 'medium' | 'low';
  needs_verification: boolean;
}

export const demoPrescriptions: PrescriptionRecord[] = [
  {
    id: 'rx-001',
    date: '2026-09-20',
    medicineCount: 3,
    medicines: [
      {
        name: 'Paracetamol',
        strength: '500 mg',
        dosage_form: 'Tablet',
        quantity: '10',
        confidence: 'high',
        needs_verification: false,
      },
      {
        name: 'Azithromycin',
        strength: '500 mg',
        dosage_form: 'Tablet',
        quantity: '5',
        confidence: 'high',
        needs_verification: false,
      },
      {
        name: 'Cetirizine',
        strength: '10 mg',
        dosage_form: 'Tablet',
        quantity: '7',
        confidence: 'medium',
        needs_verification: true,
      },
    ],
  },
  {
    id: 'rx-002',
    date: '2026-09-18',
    medicineCount: 2,
    medicines: [
      {
        name: 'Metformin',
        strength: '500 mg',
        dosage_form: 'Tablet',
        quantity: '30',
        confidence: 'high',
        needs_verification: false,
      },
      {
        name: 'Atorvastatin',
        strength: '10 mg',
        dosage_form: 'Tablet',
        quantity: '30',
        confidence: 'high',
        needs_verification: false,
      },
    ],
  },
];
