import React from 'react';
import Link from 'next/link';

export default function SelectorPage() {
  const mockDatabase = [
    { model: 'DTP-UL102', capacity: '120mAh', voltage: '3.7V', thickness: '0.8mm', type: 'Ultra-thin', crate: '1C' },
    { model: 'DTP-HC50', capacity: '1500mAh', voltage: '3.7V', thickness: '4.5mm', type: 'High C-Rate', crate: '50C' },
    { model: 'DTP-CV201', capacity: '240mAh', voltage: '3.8V', thickness: '2.1mm', type: 'Curved', crate: '2C' },
    { model: 'DTP-IN400', capacity: '4000mAh', voltage: '3.2V', thickness: '8.0mm', type: 'LiFePO4', crate: '3C' },
    { model: 'DTP-HC30', capacity: '850mAh', voltage: '3.7V', thickness: '5.2mm', type: 'High C-Rate', crate: '30C' },
    { model: 'DTP-UL088', capacity: '90mAh', voltage: '3.8V', thickness: '0.6mm', type: 'Ultra-thin', crate: '0.5C' },
    { model: 'DTP-CM30', capacity: '3000mAh', voltage: '7.4V', thickness: '12.0mm', type: 'Custom Pack', crate: '5C' },
  ];

  return (
    <div className="w-full bg-[#f7f9fb] min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white border-b border-[#e6e8ea] py-16 px-8 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-[#191c1e] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
              Battery Selector
            </h1>
            <p className="text-[#5d6467] text-lg leading-relaxed">
              Filter our industrial database of high-performance cells by exact mechanical and electrical requirements. Engineered for reliability in mission-critical hardware.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex space-x-4">
             <button className="px-6 py-3 rounded-md border border-[#e6e8ea] text-[#191c1e] font-semibold text-sm hover:bg-[#f2f4f6] transition">
               Clear Filters
             </button>
             <button className="px-6 py-3 rounded-md bg-[#003f87] text-white font-bold text-sm hover:bg-[#0056b3] transition shadow-md">
               Request Custom Spec
             </button>
          </div>
        </div>
      </section>

      {/* Main App Layout */}
      <section className="max-w-7xl mx-auto px-8 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* Sidebar Filters */}
         <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e6e8ea]">
               <h3 className="text-[#191c1e] font-bold mb-4 uppercase tracking-wider text-xs">Cell Chemistry</h3>
               <div className="space-y-3">
                  {['Lithium Polymer (LiPo)', 'LiFePO4', 'Solid State (Alpha)'].map((opt, i) => (
                     <label key={i} className="flex items-center space-x-3 cursor-pointer group">
                        <div className={`w-4 h-4 rounded border ${i === 0 ? 'bg-[#003f87] border-[#003f87]' : 'border-[#c2c6d4] group-hover:border-[#003f87]'} flex items-center justify-center transition-colors`}>
                           {i === 0 && <span className="w-1.5 h-1.5 bg-white rounded-sm"></span>}
                        </div>
                        <span className="text-sm font-medium text-[#5d6467] group-hover:text-[#191c1e] transition-colors">{opt}</span>
                     </label>
                  ))}
               </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e6e8ea]">
               <h3 className="text-[#191c1e] font-bold mb-4 uppercase tracking-wider text-xs">Form Factor</h3>
               <div className="space-y-3">
                  {['Ultra-thin (< 1.0mm)', 'High C-Rate (up to 50C)', 'Curved Shapes', 'Standard Prismatic'].map((opt, i) => (
                     <label key={i} className="flex items-center space-x-3 cursor-pointer group">
                        <div className="w-4 h-4 rounded border border-[#c2c6d4] group-hover:border-[#003f87] flex items-center justify-center transition-colors"></div>
                        <span className="text-sm font-medium text-[#5d6467] group-hover:text-[#191c1e] transition-colors">{opt}</span>
                     </label>
                  ))}
               </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e6e8ea]">
               <h3 className="text-[#191c1e] font-bold mb-4 uppercase tracking-wider text-xs">Certifications</h3>
               <div className="flex flex-wrap gap-2">
                  {['UN38.3', 'IEC 62133', 'UL 1642'].map((opt, i) => (
                     <span key={i} className="px-3 py-1 rounded-md border border-[#e6e8ea] text-xs font-semibold text-[#5d6467] bg-[#f7f9fb] cursor-pointer hover:bg-[#e6e8ea] transition-colors">
                        {opt}
                     </span>
                  ))}
               </div>
            </div>
         </div>

         {/* Results Table */}
         <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-[0_0_32px_rgba(25,28,30,0.04)] border border-[#e6e8ea] overflow-hidden">
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="bg-[#f7f9fb] border-b border-[#e6e8ea]">
                       <th className="py-4 px-6 text-xs font-bold text-[#5d6467] uppercase tracking-wider">Model Ref</th>
                       <th className="py-4 px-6 text-xs font-bold text-[#5d6467] uppercase tracking-wider">Type</th>
                       <th className="py-4 px-6 text-xs font-bold text-[#5d6467] uppercase tracking-wider">Cap.</th>
                       <th className="py-4 px-6 text-xs font-bold text-[#5d6467] uppercase tracking-wider">Voltage</th>
                       <th className="py-4 px-6 text-xs font-bold text-[#5d6467] uppercase tracking-wider">Thickness</th>
                       <th className="py-4 px-6 text-xs font-bold text-[#5d6467] uppercase tracking-wider">Max Discharge</th>
                       <th className="py-4 px-6 text-xs font-bold text-[#5d6467] uppercase tracking-wider">Action</th>
                     </tr>
                   </thead>
                   <tbody>
                     {mockDatabase.map((row, i) => (
                       <tr key={i} className="border-b border-[#f2f4f6] hover:bg-[#f8faff] transition-colors group">
                         <td className="py-4 px-6 font-bold text-[#003f87] text-sm" style={{ fontFamily: 'Inter, monospace' }}>{row.model}</td>
                         <td className="py-4 px-6">
                           <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-[#e6e8ea] text-[#424752]">
                             {row.type}
                           </span>
                         </td>
                         <td className="py-4 px-6 text-sm font-semibold text-[#191c1e]">{row.capacity}</td>
                         <td className="py-4 px-6 text-sm text-[#5d6467]">{row.voltage}</td>
                         <td className="py-4 px-6 text-sm text-[#5d6467]">{row.thickness}</td>
                         <td className="py-4 px-6 text-sm text-[#191c1e] font-semibold">{row.crate}</td>
                         <td className="py-4 px-6">
                            <span className="text-[#003f87] text-xs font-bold uppercase tracking-widest cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                              View Spec →
                            </span>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#003f87]/5 rounded-xl border border-[#003f87]/10 flex items-center justify-between">
              <div>
                <h4 className="text-[#003f87] font-bold text-sm mb-1">Custom Dimensions Needed?</h4>
                <p className="text-sm text-[#5d6467]">Our engineering team can customize cell sizes to maximize every cubic millimeter of your product design.</p>
              </div>
              <button className="px-5 py-2.5 rounded-md bg-white border border-[#003f87]/20 text-[#003f87] font-bold text-xs uppercase tracking-wider hover:bg-[#f2f4f6] transition">
                 Consult Engineers
              </button>
            </div>
         </div>
      </section>
    </div>
  );
}
