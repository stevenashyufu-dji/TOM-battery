import React from 'react';
import Link from 'next/link';

export default function ManufacturingPage() {
  const infrastructure = [
    {
      title: "Class 100,000 Cleanroom",
      desc: "Our facility operates under stringent environmental controls. Every production line is equipped with automated optical inspection (AOI) and real-time telemetry systems.",
      metric: "ISO"
    },
    {
      title: "Automated Stacking",
      desc: "High-precision Z-stacking technology ensuring consistent internal resistance and longer cycle life for demanding applications.",
      metric: "Z-Stack"
    },
    {
      title: "BMS Engineering",
      desc: "In-house advanced design of Smart BMS with SMBus, I2C, and HDQ communication protocols.",
      metric: "Smart"
    }
  ];

  const innovations = [
    "Proprietary Chemistry",
    "Rapid Prototyping",
    "Thermal Simulation",
    "OEM/ODM Certified"
  ];

  return (
    <div className="w-full pb-24">
      {/* Hero Section */}
      <section className="bg-[#f7f9fb] py-20 md:py-32 px-8 md:px-12 border-b border-[#e6e8ea]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-[#003f87]/10 text-[#003f87] text-xs font-bold uppercase tracking-widest">
            About Us & Manufacturing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#191c1e] mb-8 leading-tight max-w-4xl" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
            Leading the evolution of Lithium Polymer technology.
          </h1>
          <p className="text-[#5d6467] text-lg md:text-xl max-w-3xl leading-relaxed mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            DTP Battery has specialized in high-energy density solutions since 2008. Our focus is on the extreme precision required for medical, aerospace, and high-performance industrial applications where failure is not an option.
          </p>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-24 px-8 md:px-12">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Graphic Representation */}
            <div className="w-full aspect-square bg-gradient-to-br from-[#e6e8ea] to-[#f2f4f6] rounded-3xl relative overflow-hidden shadow-[inset_0_0_64px_rgba(25,28,30,0.05)] border border-white flex items-center justify-center p-12">
               <div className="w-full h-full bg-white rounded-2xl shadow-xl flex flex-col p-8 relative">
                  <div className="w-12 h-12 rounded-full bg-[#003f87]/10 flex items-center justify-center mb-6">
                     <span className="w-6 h-6 rounded-full bg-[#003f87]"></span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#191c1e]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Advanced Materials Lab</h3>
                  <div className="mt-8 space-y-4">
                     <div className="h-2 w-full bg-[#f2f4f6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#003f87] w-[85%]"></div>
                     </div>
                     <div className="flex justify-between text-xs font-semibold text-[#5d6467]">
                        <span>R&D Investment</span>
                        <span>15% Annual Revenue</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="space-y-10">
               <div>
                 <span className="text-[#003f87] text-sm font-bold uppercase tracking-widest">Innovation</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-[#191c1e] mt-2 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                   Relentless pursuit of energy density.
                 </h2>
                 <p className="text-[#5d6467] text-lg leading-relaxed">
                   15% of our annual revenue is reinvested directly into our Advanced Materials Laboratory to push the boundaries of lithium chemistry.
                 </p>
               </div>

               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {innovations.map((item, i) => (
                   <li key={i} className="flex items-center text-[#191c1e] font-semibold bg-[#f7f9fb] p-4 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-[#003f87]/10 flex items-center justify-center mr-3 flex-shrink-0">
                         <span className="w-2.5 h-2.5 bg-[#003f87] rounded-full"></span>
                      </div>
                      {item}
                   </li>
                 ))}
               </ul>
            </div>
         </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-24 px-8 md:px-12 bg-[#191c1e] text-white">
        <div className="max-w-7xl mx-auto">
           <div className="mb-16">
              <span className="text-[#c2c6d4] text-xs font-bold uppercase tracking-widest">Infrastructure</span>
              <h2 className="text-4xl font-bold mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Uncompromising Manufacturing
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {infrastructure.map((item, i) => (
                <div key={i} className="bg-[#24272c] rounded-xl p-10 border border-white/5 hover:bg-[#2c3035] transition-colors flex flex-col justify-between items-start">
                   <div>
                     <div className="w-16 h-16 rounded-lg bg-black/30 flex items-center justify-center mb-6 border border-white/10">
                       <span className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.metric}</span>
                     </div>
                     <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                     <p className="text-[#c2c6d4] text-base leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24 px-8 md:px-12 max-w-7xl mx-auto text-center">
         <h2 className="text-3xl font-bold text-[#191c1e] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Unyielding Quality Standards</h2>
         <p className="text-[#5d6467] text-lg max-w-2xl mx-auto mb-10">We adhere to the world's most stringent regulatory frameworks to ensure safety and reliability during transport and end-use.</p>
         <div className="flex flex-wrap justify-center gap-4">
            {['UN38.3', 'IEC 62133', 'UL 1642', 'RoHS / Reach', 'ISO 9001'].map((cert, i) => (
               <span key={i} className="px-6 py-3 rounded-full bg-white border border-[#e6e8ea] text-[#191c1e] font-semibold text-sm shadow-sm hover:border-[#003f87] transition-colors cursor-default">
                  {cert}
               </span>
            ))}
         </div>
      </section>
    </div>
  );
}
