import React from 'react';
import Link from 'next/link';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import HeroSlider from '@/components/HeroSlider';

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '600', '800'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] });

export default function Homepage() {
  const capabilities = [
    { id: '01', title: 'Massive Mold Library', desc: 'Access over 3,000+ existing molds. Our extensive tooling inventory reduces lead times and development costs for custom form factors.' },
    { id: '02', title: 'Extreme Range', desc: 'Advanced chemistry engineered for performance from -40°C to 85°C for the most demanding applications.' },
    { id: '03', title: 'Global Compliance', desc: 'Certified for global distribution. UN38.3, MSDS, UL, CE, and RoHS compliant manufacturing processes.' },
    { id: '04', title: 'R&D Capabilities', desc: 'Internal labs conduct 24/7 stress testing to ensure cycle life exceeding 500+ charges at 80% capacity retention.' }
  ];

  const categories = [
    { title: 'Ultra-thin', spec: '0.4MM', desc: 'Specialized cells for smart cards, wearables, and thin electronics.' },
    { title: 'High-discharge UAV', spec: '75C', desc: 'High-C rate discharge optimized for drones, racing UAVs, and power tools.' },
    { title: 'Curved/Round', spec: '360°', desc: 'Ergonomic shapes for next-gen wearables, medical devices, and circular enclosures.' },
    { title: 'Standard LiPo', spec: '∞', desc: 'Reliable, high-density standard pouches available in thousands of off-the-shelf sizes.' }
  ];

  return (
    <div className={`w-full min-h-screen bg-[#fafbfc] text-[#0a0d14] ${outfit.className} selection:bg-[#00f0ff] selection:text-black overflow-x-hidden`}>
      
      {/* Decorative Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
      </div>

      {/* Hero Section */}
      <HeroSlider>
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col items-start px-4">
           <div className={`mb-6 tracking-[0.2em] uppercase text-xs md:text-sm text-white/80 font-semibold ${jetbrains.className}`}>
             Tier 1 Manufacturing Standard
           </div>
           
           <h1 className="text-5xl md:text-[5rem] font-bold leading-[1.1] max-w-4xl text-white tracking-tight">
             Leading the Charge in Sustainable Battery Innovation
           </h1>
           
           <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/90 font-medium leading-relaxed">
             As one of the leading lithium-ion battery manufacturers and a global leader in power battery and energy storage solutions, DTP Battery is dedicated to advancing renewable energy for a cleaner, more affordable, and sustainable future.
           </p>

           <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/catalog" className="px-8 py-4 bg-white text-[#1e3a8a] text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] rounded-full transition-all duration-300 flex items-center justify-center">
                 Contact For More Now
              </Link>
           </div>
        </div>
      </HeroSlider>

      {/* Engineering Excellence */}
      <section className="relative px-6 py-32 md:px-16 border-t border-[#e2e8f0] bg-white z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
             <div className="lg:col-span-4 sticky top-32 self-start bg-white/80 p-6 rounded-2xl backdrop-blur-sm -ml-6">
               <h2 className={`text-[#0055ff] text-sm uppercase tracking-[0.3em] mb-4 ${jetbrains.className}`}>Why DTP Battery</h2>
               <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6 text-[#05070a]">Engineering<br/>Excellence</h3>
               <p className="text-[#64748b] text-lg">Precision architecture translated into uncompromising cycle endurance and thermal stability.</p>
             </div>
             
             <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e2e8f0]">
                {capabilities.map((cap) => (
                  <div key={cap.id} className="bg-white p-10 md:p-14 group hover:bg-[#f8fafc] transition-colors duration-500 shadow-[inset_0_0_0_1px_transparent] hover:shadow-[inset_0_0_0_1px_rgba(0,85,255,0.1)]">
                    <div className={`text-[#00f0ff] mix-blend-difference text-xl font-bold mb-8 ${jetbrains.className}`}>{cap.id}</div>
                    <h4 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0f172a]">{cap.title}</h4>
                    <p className="text-[#64748b] font-light leading-relaxed">{cap.desc}</p>
                    {cap.title === 'R&D Capabilities' && (
                      <button className={`mt-10 flex items-center text-[#0055ff] text-xs uppercase tracking-widest group-hover:tracking-[0.25em] transition-all duration-300 ${jetbrains.className}`}>
                         View Lab Report <span className="ml-2 w-4 h-px bg-[#0055ff]"></span>
                      </button>
                    )}
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="relative px-6 py-32 md:py-48 z-10 overflow-hidden bg-[#0a1128]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
             <div>
               <h2 className={`text-[#00f0ff] text-sm uppercase tracking-[0.3em] mb-4 ${jetbrains.className}`}>Our Form Factors</h2>
               <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-none text-white">Specialized Cell<br/>Series</h3>
             </div>
             <Link href="/catalog" className={`px-8 py-5 border border-[#00f0ff]/50 hover:bg-[#00f0ff] hover:text-black text-[#00f0ff] text-sm uppercase tracking-widest transition-all duration-300 ${jetbrains.className}`}>
                View Full Catalog
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
             {categories.map((cat, i) => (
                <div key={i} className="group relative bg-[#ffffff] border border-[#e2e8f0] hover:border-[#0055ff]/50 shadow-[0_4px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,85,255,0.08)] rounded-2xl p-10 md:p-14 overflow-hidden transition-all duration-500">
                   {/* Hover Gradient Sweep */}
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#00f0ff]/5 to-transparent transition-opacity duration-700 pointer-events-none"></div>
                   
                   <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
                      <div>
                         <h4 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">{cat.title}</h4>
                         <p className="text-[#64748b] text-lg max-w-md">{cat.desc}</p>
                      </div>
                      <div className={`shrink-0 flex items-center justify-center w-24 h-24 rounded-full border border-[#0055ff]/20 bg-[#0055ff]/5 text-[#0055ff] font-bold text-lg md:text-xl shadow-[0_0_30px_rgba(0,85,255,0.05)] group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(0,85,255,0.15)] transition-all duration-500 ${jetbrains.className}`}>
                        {cat.spec}
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="relative px-6 py-24 mb-16 z-10">
        <div className="max-w-[1400px] mx-auto bg-[#0055ff] rounded-[2rem] p-12 md:p-24 overflow-hidden relative shadow-[0_20px_80px_rgba(0,85,255,0.3)]">
          <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-white mix-blend-overlay blur-[80px] rounded-full opacity-40"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">Ready to scale your energy architecture?</h2>
              <p className="text-[#e2e8f0] text-xl font-medium">Access our global manufacturing network and bring precision power to your next generation of hardware.</p>
            </div>
            <button className={`shrink-0 px-10 py-6 bg-white text-[#0055ff] text-sm uppercase tracking-widest font-bold hover:bg-[#00f0ff] hover:text-black transition-colors duration-300 ${jetbrains.className}`}>
               Contact Engineering
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
