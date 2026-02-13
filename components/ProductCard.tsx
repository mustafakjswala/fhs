import React from 'react';
import { Product } from '../types';
import { Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col">
      <div className="relative h-64 overflow-hidden bg-slate-100 p-4 flex items-center justify-center">
        {/* In production, object-cover would be used if images were perfect fit, object-contain ensures product is seen fully */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-brand-secondary text-white text-xs font-bold px-2 py-1 rounded">
          {product.code}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-xs font-bold text-brand-primary mb-1 uppercase tracking-wide">
          {product.category}
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-4">
          <a 
            href={`https://wa.me/${COMPANY_DETAILS.phone.replace('+', '')}?text=I am interested in ${product.name} (${product.code})`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-brand-primary hover:text-white text-brand-primary border border-brand-primary/20 font-medium py-2 px-4 rounded-lg transition-colors"
          >
            <Phone size={16} />
            <span>Enquire Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};