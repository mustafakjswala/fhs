import React, { useState } from 'react';
import { Menu, X, Phone, Mail, CheckCircle, Package, Truck, ChevronRight, Download, Search } from 'lucide-react';
import { COMPANY_DETAILS, PRODUCTS, LOGO_URL } from './constants';
import { Category, Product } from './types';
import { Section } from './components/Section';
import { ProductCard } from './components/ProductCard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [logoError, setLogoError] = useState(false);

  const categories: Category[] = ['All', 'Chemicals', 'Tools & Mops', 'Dispensers', 'Bins & Bags', 'Amenities'];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans text-slate-600">
      
      {/* Top Bar */}
      <div className="bg-brand-secondary text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} /> {COMPANY_DETAILS.displayPhone}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> {COMPANY_DETAILS.email}
            </span>
          </div>
          <span className="opacity-80 font-light">Distributor of Hygiene Care Products</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-50 shadow-md border-b border-slate-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
             {/* Logo Implementation */}
             {!logoError ? (
               <img 
                 src={LOGO_URL} 
                 alt={`${COMPANY_DETAILS.name} Logo`} 
                 className="h-16 md:h-20 w-auto object-contain" 
                 onError={() => setLogoError(true)}
               />
             ) : (
               <div className="flex flex-col">
                  <h1 className="text-xl md:text-2xl font-black text-brand-primary tracking-tight leading-none">
                    FAKHRI
                  </h1>
                  <span className="text-brand-secondary font-bold text-xs md:text-sm tracking-widest uppercase">
                    Hygiene Solutions
                  </span>
               </div>
             )}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 font-medium text-slate-700">
            {['Home', 'About', 'Products', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-brand-primary transition-colors hover:font-bold"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href={`tel:${COMPANY_DETAILS.phone}`} 
              className="bg-brand-accent text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100 flex items-center gap-2"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="flex flex-col p-4 gap-4">
              {['Home', 'About', 'Products', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left font-medium py-2 border-b border-slate-50 last:border-0 hover:text-brand-primary"
                >
                  {item}
                </button>
              ))}
              <a 
                href={`tel:${COMPANY_DETAILS.phone}`} 
                className="bg-brand-accent text-white text-center py-3 rounded-lg font-bold mt-2"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative bg-brand-primary text-white overflow-hidden">
        {/* Adjusted background gradient to match Teal theme */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581578731117-104f2a417954?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-brand-primary to-transparent"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm">
              #1 Hygiene & Housekeeping Supplier
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Professional Cleaning <span className="text-brand-accent">Solutions For You</span>
            </h2>
            <p className="text-lg md:text-xl text-teal-50 max-w-lg">
              We provide a complete range of housekeeping materials and hygiene care products for homes and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-brand-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
              >
                Explore Catalogue <ChevronRight size={20} />
              </button>
              <a 
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                Request Quote
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
               <img src="https://images.unsplash.com/photo-1528740561666-dc24705f08a7?q=80&w=1000&auto=format&fit=crop" alt="Cleaning Products" className="rounded-xl" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-secondary p-6 rounded-xl shadow-xl z-20 text-white max-w-xs">
              <p className="font-bold text-2xl mb-1">1000+</p>
              <p className="text-sm opacity-90">Products from top National & International Brands</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <Section id="about" bg="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-primary/10 rounded-full blur-xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
               alt="Warehouse" 
               className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[500px]"
             />
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent/10 rounded-full blur-xl z-0"></div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-brand-primary font-bold uppercase tracking-wide">Company Profile</h3>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800">
              Commitment to Reliability, Efficiency & Quality
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              At <strong>{COMPANY_DETAILS.name}</strong>, we have over 1000+ products from top National and International brands. We are wholesale suppliers of housekeeping materials. Since our establishment, our company has tried to fulfill its commitment towards reliability.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                <div className="bg-white text-brand-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2 text-brand-primary">Our Vision</h4>
                <p className="text-sm text-slate-600">{COMPANY_DETAILS.vision}</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <div className="bg-white text-brand-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <Package size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2 text-brand-accent">Our Mission</h4>
                <p className="text-sm text-slate-600">{COMPANY_DETAILS.mission}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats / Features Banner */}
      <div className="bg-brand-secondary text-white py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-black text-brand-accent">1000+</div>
            <div className="text-slate-300 font-medium">Products Available</div>
          </div>
          <div className="space-y-2">
             <div className="flex justify-center mb-2 text-brand-primary"><Truck size={32} /></div>
             <div className="text-slate-300 font-medium">Wholesale Suppliers</div>
          </div>
           <div className="space-y-2">
            <div className="text-4xl font-black text-brand-accent">100%</div>
            <div className="text-slate-300 font-medium">Quality Assured</div>
          </div>
           <div className="space-y-2">
             <div className="flex justify-center mb-2 text-brand-primary"><CheckCircle size={32} /></div>
             <div className="text-slate-300 font-medium">Top Brands</div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <Section id="products" bg="gray">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-brand-primary font-bold uppercase tracking-wide mb-2">Our Catalogue</h3>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6">Explore Our Product Range</h2>
          <p className="text-slate-600">Browse through our extensive collection of high-quality hygiene and housekeeping solutions tailored for your needs.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10 sticky top-20 z-40 bg-white/90 backdrop-blur py-4 px-4 rounded-xl shadow-sm border border-slate-100">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-primary text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-4 rounded-full bg-slate-200 mb-4">
              <Search size={40} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-700">No products found</h3>
            <p className="text-slate-500">Try adjusting your category or search term.</p>
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Need a Custom Bulk Order?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">We offer competitive pricing for hotels, hospitals, offices, and bulk buyers. Get in touch today for a tailored quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
              href={`tel:${COMPANY_DETAILS.phone}`} 
              className="bg-white text-brand-primary px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Call {COMPANY_DETAILS.displayPhone}
            </a>
            <a 
              href={`https://wa.me/${COMPANY_DETAILS.phone.replace('+', '')}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-dark text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-black text-white mb-6">FAKHRI <span className="text-brand-primary">HYGIENE</span></h3>
              <p className="mb-6 leading-relaxed">
                Your one-stop destination for high-quality housekeeping and hygiene care products. Dedicated to keeping your environment clean and safe.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary cursor-pointer transition-colors text-white">
                  <span className="font-bold">fb</span>
                </div>
                 <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary cursor-pointer transition-colors text-white">
                  <span className="font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Catalogue', 'Privacy Policy', 'Terms of Service'].map(link => (
                  <li key={link}>
                    <button className="hover:text-brand-primary transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-primary p-2 rounded-full text-white">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase font-bold">Call Us</span>
                    <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-white hover:text-brand-primary transition-colors font-medium">
                      {COMPANY_DETAILS.displayPhone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-primary p-2 rounded-full text-white">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase font-bold">Email Us</span>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-white hover:text-brand-primary transition-colors font-medium break-all">
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-primary p-2 rounded-full text-white">
                     <Package size={16} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase font-bold">Address</span>
                    <span className="text-white font-medium">
                      {COMPANY_DETAILS.address}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;