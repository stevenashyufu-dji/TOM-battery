import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import { Outfit, JetBrains_Mono } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '600', '800'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] });

export default function ProductCatalog() {
   const products = [
      { id: 1, name: 'TOM-XR High Drain', type: 'Lithium-Ion', capacity: '12,000 mAh', voltage: '3.7V', status: 'In Production' },
      { id: 2, name: 'TOM-MT Standard', type: 'Li-Po', capacity: '8,000 mAh', voltage: '7.4V', status: 'In Production' },
      { id: 3, name: 'TOM-LT Cold Temp', type: 'LiFePO4', capacity: '10,000 mAh', voltage: '3.2V', status: 'Special Order' },
      { id: 4, name: 'TOM-EV Traction', type: 'Lithium-Ion', capacity: '50,000 mAh', voltage: '48V', status: 'In Production' },
      { id: 5, name: 'TOM-MC Medical', type: 'Li-Po', capacity: '5,000 mAh', voltage: '3.7V', status: 'Certified' },
      { id: 6, name: 'TOM-Aero Light', type: 'Lithium-Ion', capacity: '20,000 mAh', voltage: '24V', status: 'In Production' },
   ];

   return (
      <div className={`min-h-screen bg-[#fafbfc] text-[#0a0d14] antialiased pb-24 overflow-x-hidden ${outfit.className}`}>

         {/* 顶部英雄横幅 (HeroSlider) */}
         <HeroSlider className="min-h-[50vh] py-24 md:py-32">
            <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col md:flex-row md:items-end justify-between px-4 md:px-8 gap-8">
               <div>
                  <div className={`mb-6 text-xs uppercase font-bold tracking-widest text-[#00f0ff] ${jetbrains.className}`}>
                     CELL DATABASE
                  </div>

                  <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                     Product Catalog
                  </h1>
               </div>

               <button className={`shrink-0 px-8 py-4 border-2 border-white/30 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#1e293b] backdrop-blur-sm transition-all duration-300 rounded ${jetbrains.className}`}>
                  Export List (CSV)
               </button>
            </div>
         </HeroSlider>

         <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 flex flex-col md:flex-row gap-12">
            {/* Filter Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0 space-y-12">
               <div>
                  <h3 className={`text-[11px] uppercase tracking-[0.15em] text-[#64748b] font-bold mb-5 ${jetbrains.className}`}>Cell Chemistry</h3>
                  <div className="space-y-3 p-1">
                     {['Lithium-Ion', 'Li-Po', 'LiFePO4', 'Solid State (Proto)'].map(chem => (
                        <label key={chem} className="flex items-center space-x-4 cursor-pointer group">
                           <input type="checkbox" suppressHydrationWarning className="w-4 h-4 rounded border-[#cbd5e1] text-[#0055ff] focus:ring-[#0055ff] focus:ring-offset-2 transition-colors cursor-pointer" />
                           <span className="text-sm font-medium text-[#475569] group-hover:text-[#0f172a] transition-colors">{chem}</span>
                        </label>
                     ))}
                  </div>
               </div>

               <div>
                  <h3 className={`text-[11px] uppercase tracking-[0.15em] text-[#64748b] font-bold mb-5 ${jetbrains.className}`}>Capacity Range</h3>
                  {/* Custom Range Slider placeholder */}
                  <div className="h-1.5 w-full bg-[#cbd5e1] rounded-full relative mb-3">
                     <div className="absolute left-1/4 right-1/4 h-full bg-[#0055ff] rounded-full"></div>
                     <div className="absolute left-1/4 -ml-2 -top-1.5 w-4 h-4 bg-white border-2 border-[#0055ff] rounded-full cursor-grab"></div>
                     <div className="absolute right-1/4 -mr-2 -top-1.5 w-4 h-4 bg-white border-2 border-[#0055ff] rounded-full cursor-grab"></div>
                  </div>
                  <div className={`flex justify-between text-[11px] text-[#64748b] font-bold uppercase ${jetbrains.className}`}>
                     <span>5k mAh</span>
                     <span>50k+ mAh</span>
                  </div>
               </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
               {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl p-8 shadow-[0_4px_40px_rgba(0,0,0,0.02)] border border-[#e2e8f0] hover:border-[#0055ff]/40 hover:shadow-[0_20px_60px_rgba(0,85,255,0.06)] transition-all duration-300 cursor-pointer flex flex-col group relative overflow-hidden">

                     {/* Hover Accent Bar */}
                     <div className="absolute top-0 left-0 w-1 h-0 bg-[#0055ff] group-hover:h-full transition-all duration-300"></div>

                     <div className="flex justify-between items-start mb-8">
                        <div>
                           <span className={`text-[10px] uppercase tracking-[0.15em] text-[#64748b] font-bold bg-[#f1f5f9] px-2.5 py-1 rounded ${jetbrains.className}`}>{product.type}</span>
                           <h2 className="text-2xl font-bold mt-4 text-[#0f172a]">{product.name}</h2>
                        </div>
                        <span className={`text-[10px] uppercase tracking-[0.15em] font-bold text-[#0055ff] ${jetbrains.className}`}>{product.status}</span>
                     </div>

                     {/* Specs Table inside Card */}
                     <div className="space-y-[2px] mt-auto">
                        <div className="flex rounded overflow-hidden">
                           <div className="bg-[#f8fafc] px-4 py-3 w-1/3"><span className={`text-[10px] uppercase tracking-[0.15em] text-[#64748b] font-bold ${jetbrains.className}`}>Capacity</span></div>
                           <div className="bg-white px-4 py-3 w-2/3 border-l border-[#f1f5f9]"><span className="text-sm font-semibold text-[#0f172a]">{product.capacity}</span></div>
                        </div>
                        <div className="flex rounded overflow-hidden">
                           <div className="bg-[#f8fafc] px-4 py-3 w-1/3"><span className={`text-[10px] uppercase tracking-[0.15em] text-[#64748b] font-bold ${jetbrains.className}`}>Voltage</span></div>
                           <div className="bg-white px-4 py-3 w-2/3 border-l border-[#f1f5f9]"><span className="text-sm font-semibold text-[#0f172a]">{product.voltage}</span></div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </main>
      </div>
   );
}
