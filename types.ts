export type Category = 'All' | 'Chemicals' | 'Tools & Mops' | 'Dispensers' | 'Bins & Bags' | 'Amenities';

export interface Product {
  id: string;
  code: string;
  name: string;
  category: Category;
  image: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
}