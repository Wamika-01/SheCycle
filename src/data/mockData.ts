export interface WasteType {
  id: string;
  name: string;
  category: string;
  minRate: number;
  maxRate: number;
  averageRate: number;
  unit: string;
  description: string;
}

export interface RecyclingCenter {
  id: string;
  name: string;
  area: string;
  address: string;
  distance: number;
  phone: string;
  isOpen: boolean;
  type: string;
  verified: boolean;
}

export interface SafeZone {
  id: string;
  name: string;
  area: string;
  address: string;
  distance: number;
  type: string;
  timings: string;
  badges: string[];
}

export interface Transaction {
  id: string;
  wasteType: string;
  weight: number;
  earnings: number;
  date: string;
  category: string;
}

export const wasteTypes: WasteType[] = [
  {
    id: '1',
    name: 'Aluminum Cans',
    category: 'Metal',
    minRate: 75,
    maxRate: 90,
    averageRate: 82,
    unit: 'kg',
    description: 'High value due to energy savings in recycling',
  },
  {
    id: '2',
    name: 'Steel Scrap',
    category: 'Metal',
    minRate: 40,
    maxRate: 135,
    averageRate: 85,
    unit: 'kg',
    description: 'Market rate varies by quality and cleanliness',
  },
  {
    id: '3',
    name: 'PET Bottles',
    category: 'Plastic',
    minRate: 20,
    maxRate: 60,
    averageRate: 35,
    unit: 'kg',
    description: 'Clear PET bottles fetch higher rates',
  },
  {
    id: '4',
    name: 'Glass Bottles',
    category: 'Glass',
    minRate: 2,
    maxRate: 15,
    averageRate: 8,
    unit: 'kg',
    description: 'Rates depend on color and condition',
  },
  {
    id: '5',
    name: 'Mixed Plastic',
    category: 'Plastic',
    minRate: 10,
    maxRate: 30,
    averageRate: 18,
    unit: 'kg',
    description: 'Lower rates for mixed varieties',
  },
  {
    id: '6',
    name: 'Cardboard',
    category: 'Paper',
    minRate: 5,
    maxRate: 12,
    averageRate: 8,
    unit: 'kg',
    description: 'Clean, dry cardboard preferred',
  },
];

export const recyclingCenters: RecyclingCenter[] = [
  {
    id: '1',
    name: 'Green Jalandhar Recyclers',
    area: 'GT Road',
    address: 'Near Bus Stand, GT Road, Jalandhar',
    distance: 2.3,
    phone: '+91 98765 43210',
    isOpen: true,
    type: 'Full Service Recycler',
    verified: true,
  },
  {
    id: '2',
    name: 'EcoPunjab Hub',
    area: 'Model Town',
    address: 'Sector 12, Model Town, Jalandhar',
    distance: 1.8,
    phone: '+91 98765 43211',
    isOpen: true,
    type: 'Collection Center',
    verified: true,
  },
  {
    id: '3',
    name: 'CleanCity Scrap Center',
    area: 'Nakodar Chowk',
    address: 'Main Road, Nakodar Chowk, Jalandhar',
    distance: 3.5,
    phone: '+91 98765 43212',
    isOpen: false,
    type: 'Scrap Dealer',
    verified: true,
  },
  {
    id: '4',
    name: 'Hari Om Kabadi Wala',
    area: 'Basti Bawa Khel',
    address: 'Basti Bawa Khel Road, Jalandhar',
    distance: 4.1,
    phone: '+91 98765 43213',
    isOpen: true,
    type: 'Traditional Scrap',
    verified: false,
  },
];

export const safeZones: SafeZone[] = [
  {
    id: '1',
    name: 'PAP Colony Community Hall',
    area: 'PAP Colony',
    address: 'Community Center, PAP Colony, Jalandhar',
    distance: 1.2,
    type: 'Community Center',
    timings: '6 AM - 8 PM',
    badges: ['Verified', 'Well Lit', 'CCTV', 'Security Guard'],
    lat: 31.3260,
  lng: 75.5762,
mapLink: "https://www.google.com/maps/place/P.+A.+P.+Marriage+Palace/@31.3121102,75.6121135,17z/data=!3m1!4b1!4m6!3m5!1s0x391a5b384e7d49b7:0x17dd9e56d240c794!8m2!3d31.3121102!4d75.6146884!16s%2Fg%2F11ffvh6rcv?entry=ttu"
  },
  {
    id: '2',
    name: 'Model Town Park',
    area: 'Model Town',
    address: 'Central Park, Model Town, Jalandhar',
    distance: 1.9,
    type: 'Public Park',
    timings: '6 AM - 7 PM',
    badges: ['Verified', 'Well Lit', 'Public Area'],
  },
  {
    id: '3',
    name: 'Civil Lines Community Center',
    area: 'Civil Lines',
    address: 'Civil Lines, Near Court Complex, Jalandhar',
    distance: 2.7,
    type: 'Community Center',
    timings: '7 AM - 9 PM',
    badges: ['Verified', 'CCTV', 'Security Guard', 'Well Lit'],
  },
  {
    id: '4',
    name: 'Jalandhar Cantt Secure Pickup Point',
    area: 'Cantt Area',
    address: 'Cantonment Area, Near Railway Station, Jalandhar',
    distance: 3.4,
    type: 'Secure Pickup',
    timings: '6 AM - 8 PM',
    badges: ['Verified', 'Military Area', 'CCTV', 'Well Lit'],
  },
];

export const recentTransactions: Transaction[] = [
  {
    id: '1',
    wasteType: 'PET Bottles',
    weight: 3.5,
    earnings: 122.5,
    date: '2026-03-27',
    category: 'Plastic',
  },
  {
    id: '2',
    wasteType: 'Steel Scrap',
    weight: 5.2,
    earnings: 442,
    date: '2026-03-26',
    category: 'Metal',
  },
  {
    id: '3',
    wasteType: 'Aluminum Cans',
    weight: 2.1,
    earnings: 172.2,
    date: '2026-03-25',
    category: 'Metal',
  },
  {
    id: '4',
    wasteType: 'Glass Bottles',
    weight: 8.0,
    earnings: 64,
    date: '2026-03-24',
    category: 'Glass',
  },
  {
    id: '5',
    wasteType: 'Cardboard',
    weight: 12.5,
    earnings: 100,
    date: '2026-03-23',
    category: 'Paper',
  },
];

export const safetyTips = [
  'Always use verified safe zones during daylight hours',
  'Share your location with family or team members',
  'Contact emergency helpline immediately if you feel unsafe',
  'Prefer collection points in well-populated areas',
  'Keep emergency numbers saved in your phone',
];

export const emergencyContacts = [
  { name: 'Women Helpline', number: '1091', type: 'emergency' },
  { name: 'Police Emergency', number: '112', type: 'emergency' },
  { name: 'Police Control Room', number: '100', type: 'police' },
];
