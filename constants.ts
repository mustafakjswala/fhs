import { Product } from './types';

export const LOGO_URL = 'logo.png'; // Simplified path

export const COMPANY_DETAILS = {
  name: "FAKHRI HYGIENE SOLUTIONS",
  tagline: "DISTRIBUTOR OF HYGIENE CARE PRODUCTS",
  email: "fakhrihygienesolutions@gmail.com",
  phone: "+918143573651", // Formatted for tel link
  displayPhone: "+91 81435 73651",
  address: "Wholesale Suppliers of Housekeeping Materials",
  mission: "To provide best of the products/brands at the lowest prices with great shopping experience.",
  vision: "To become a one-window gateway for all housekeeping items."
};

// Product images from FHS HOUSEKEEPING PRODUCT CATALOGUE
export const PRODUCTS: Product[] = [
  // --- CHEMICALS ---
  { id: '1', code: 'TE01', name: 'Trick Herbal Phenyle', category: 'Chemicals', image: '/images/43.jpg' },
  { id: '2', code: 'TE02', name: 'Trick Soap Oil', category: 'Chemicals', image: '/images/44.jpg' },
  { id: '3', code: 'TE03', name: 'Trick TR1 Bathroom Cleaner', category: 'Chemicals', image: '/images/47.jpg' },
  { id: '4', code: 'TE04', name: 'TR2 Floor Cleaner', category: 'Chemicals', image: '/images/51.jpg' },
  { id: '5', code: 'TE05', name: 'Trick TR3 Glass Cleaner', category: 'Chemicals', image: '/images/53.jpg' },
  { id: '6', code: 'TE06', name: 'Trick TR5 Room Freshners', category: 'Chemicals', image: '/images/55.jpg' },
  { id: '7', code: 'TE07', name: 'Trick TR6 Toilet Cleaner', category: 'Chemicals', image: '/images/57.png' },
  { id: '8', code: 'TE08', name: 'Trick TR7 Floor Cleaner', category: 'Chemicals', image: '/images/59.jpg' },
  { id: '9', code: 'TE09', name: 'Trick TH100 Hand Wash', category: 'Chemicals', image: '/images/63.png' },
  { id: '10', code: 'TE10', name: 'Trick Dishwash Liquid', category: 'Chemicals', image: '/images/67.jpg' },
  { id: '11', code: 'TE11', name: 'Trick HCL Acid', category: 'Chemicals', image: '/images/72.png' },
  { id: '12', code: 'TE21', name: 'Dims DH 100 Hand Wash', category: 'Chemicals', image: '/images/110.jpg' },
  { id: '13', code: 'TE22', name: 'Dims Lime Dish Wash', category: 'Chemicals', image: '/images/112.png' },
  { id: '14', code: 'TE23', name: 'Caustic Soda', category: 'Chemicals', image: '/images/114.jpg' },
  { id: '15', code: 'TE24', name: 'Bleaching Powder', category: 'Chemicals', image: '/images/116.jpg' },

  // --- TOOLS & MOPS ---
  { id: '16', code: 'TE34', name: 'Dry Mop Set', category: 'Tools & Mops', image: '/images/156.jpg' },
  { id: '17', code: 'TE35', name: 'Kitchen Wiper', category: 'Tools & Mops', image: '/images/158.jpg' },
  { id: '18', code: 'TE36', name: 'Floor Wiper', category: 'Tools & Mops', image: '/images/162.png' },
  { id: '19', code: 'TE39', name: 'Spin Mop Set', category: 'Tools & Mops', image: '/images/165.png' },
  { id: '20', code: 'TE41', name: 'Wet Mop Set (Clip & Fit)', category: 'Tools & Mops', image: '/images/173.jpg' },
  { id: '21', code: 'TE57', name: 'Soft Broom', category: 'Tools & Mops', image: '/images/236.png' },
  { id: '22', code: 'TE58', name: 'Hard Broom', category: 'Tools & Mops', image: '/images/240.jpg' },
  { id: '23', code: 'TE59', name: 'Kharata Broom', category: 'Tools & Mops', image: '/images/242.png' },
  { id: '24', code: 'TE43', name: 'Floor Scrubbing Brush Hardy', category: 'Tools & Mops', image: '/images/181.jpg' },
  { id: '25', code: 'TE47', name: 'Cob Web Brush Round', category: 'Tools & Mops', image: '/images/194.jpg' },
  { id: '26', code: 'TE81', name: 'Mini Wringer Bucket 20L', category: 'Tools & Mops', image: '/images/305.jpg' },
  { id: '27', code: 'TE82', name: 'Double Bucket Wringer Trolley', category: 'Tools & Mops', image: '/images/308.jpg' },

  // --- DISPENSERS ---
  { id: '28', code: 'TE88', name: 'C&M Tissue Dispenser Small', category: 'Dispensers', image: '/images/339.png' },
  { id: '29', code: 'TE89', name: 'C&M Tissue Dispenser Big', category: 'Dispensers', image: '/images/341.png' },
  { id: '30', code: 'TE90', name: 'Soap Dispenser 500ml', category: 'Dispensers', image: '/images/343.jpg' },
  { id: '31', code: 'TE91', name: 'Soap Dispenser DC 800', category: 'Dispensers', image: '/images/349.png' },
  { id: '32', code: 'TE93', name: 'Soap Dispenser Steel', category: 'Dispensers', image: '/images/356.jpg' },
  { id: '33', code: 'TE96', name: 'Toilet Roll Dispenser', category: 'Dispensers', image: '/images/369.png' },
  { id: '34', code: 'TE95', name: 'HRT Roll Dispenser Auto Cut', category: 'Dispensers', image: '/images/367.jpg' },

  // --- BINS & BAGS ---
  { id: '35', code: 'TE25', name: 'Garbage Bag 35x45', category: 'Bins & Bags', image: '/images/118.jpg' },
  { id: '36', code: 'TE26', name: 'Pearl Garbage Bag', category: 'Bins & Bags', image: '/images/120.jpg' },
  { id: '37', code: 'TE109', name: 'Steel Dustbin Pedal', category: 'Bins & Bags', image: '/images/409.png' },
  { id: '38', code: 'TE110', name: 'Steel Dustbin Purporated', category: 'Bins & Bags', image: '/images/411.png' },
  { id: '39', code: 'TE111', name: 'Steel Dustbin Swing', category: 'Bins & Bags', image: '/images/414.jpg' },
  { id: '40', code: 'TE112', name: 'Plastic Dustbin', category: 'Bins & Bags', image: '/images/416.png' },

  // --- AMENITIES ---
  { id: '41', code: 'TE69', name: 'Urinal V Screen', category: 'Amenities', image: '/images/280.jpg' },
  { id: '42', code: 'TE72', name: 'Odonil Room Freshener Spray', category: 'Amenities', image: '/images/287.jpg' },
  { id: '43', code: 'TE101', name: 'M Fold Tissue', category: 'Amenities', image: '/images/387.jpg' },
  { id: '44', code: 'TE100', name: 'Tissue Roll', category: 'Amenities', image: '/images/385.png' },
  { id: '45', code: 'TE67', name: 'Napthalene Ball White/Colors', category: 'Amenities', image: '/images/276.png' },
  { id: '46', code: 'TE77', name: '3ply Face Mask (1x100)', category: 'Amenities', image: '/images/297.png' },
  { id: '47', code: 'TE78', name: 'Rubber Hand Gloves Gold Touch', category: 'Amenities', image: '/images/299.jpg' },
];