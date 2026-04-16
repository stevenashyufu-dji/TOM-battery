import React from 'react';

export default function BatterySelector() {
  return (
    <div className="min-h-screen bg-[#f2f4f6] font-sans text-[#191c1e] antialiased pb-24">
      {/* Header */}
      <header className="bg-[#003f87] py-16 px-8 md:px-12 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003f87] to-[#0056b3]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
           <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>System Configurator</h1>
           <p className="text-[#bbd0ff] text-lg font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
             Define your load, chemistry, and environmental requirements to find the exact cell match for your application.
           </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto -mt-12 px-6 relative z-20">
         <form className="bg-white rounded-2xl shadow-[0_0_64px_rgba(25,28,30,0.1)] p-8 md:p-12 space-y-12">
            
            {/* Step 1 */}
            <div className="space-y-6">
               <div className="flex items-center space-x-4 border-b-2 border-[#f2f4f6] pb-4">
                  <div className="w-8 h-8 rounded-full bg-[#003f87] text-white flex items-center justify-center font-bold text-sm">1</div>
                  <h2 className="text-2xl font-bold text-[#191c1e]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Application Requirements</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Technical Input Field matching design spec */}
                  <div className="space-y-2 relative group">
                     <label className="text-[0.75rem] uppercase tracking-widest text-[#5d6467] font-bold block">Target Voltage (V)</label>
                     <input 
                        type="number" 
                        placeholder="e.g. 48"
                        className="w-full bg-[#e0e3e5] text-[#191c1e] p-4 rounded-t-md border-b-2 border-transparent focus:border-[#003f87] focus:bg-[#d8dadc] transition-all outline-none"
                     />
                  </div>
                  <div className="space-y-2 relative group">
                     <label className="text-[0.75rem] uppercase tracking-widest text-[#5d6467] font-bold block">Target Capacity (mAh)</label>
                     <input 
                        type="number" 
                        placeholder="e.g. 20000"
                        className="w-full bg-[#e0e3e5] text-[#191c1e] p-4 rounded-t-md border-b-2 border-transparent focus:border-[#003f87] focus:bg-[#d8dadc] transition-all outline-none"
                     />
                  </div>
               </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-6">
               <div className="flex items-center space-x-4 border-b-2 border-[#f2f4f6] pb-4">
                  <div className="w-8 h-8 rounded-full bg-[#e0e3e5] text-[#424752] flex items-center justify-center font-bold text-sm">2</div>
                  <h2 className="text-2xl font-bold text-[#191c1e]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Chemistry Preference</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                     { name: 'Lithium-Ion', desc: 'Highest energy density', active: true },
                     { name: 'LiFePO4', desc: 'Maximum lifecycle & safety', active: false },
                     { name: 'Li-Po', desc: 'Flexible form factor', active: false }
                  ].map((chem, i) => (
                     <div key={i} className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${chem.active ? 'border-[#003f87] bg-[#f7f9fb]' : 'border-[#e0e3e5] hover:border-[#c2c6d4]'}`}>
                        <div className="flex justify-between items-center mb-2">
                           <span className={`font-bold ${chem.active ? 'text-[#003f87]' : 'text-[#191c1e]'}`}>{chem.name}</span>
                           <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${chem.active ? 'border-[#003f87]' : 'border-[#c2c6d4]'}`}>
                              {chem.active && <div className="w-2 h-2 rounded-full bg-[#003f87]"></div>}
                           </div>
                        </div>
                        <span className="text-[0.65rem] uppercase tracking-widest text-[#727784] font-bold">{chem.desc}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Submit Action */}
            <div className="pt-8 flex justify-end">
               <button type="button" className="px-8 py-4 rounded-md bg-[#003f87] text-white hover:bg-[#0056b3] transition flex items-center justify-center font-bold text-sm shadow-[0_0_24px_rgba(0,63,135,0.3)]">
                  Compute Configurations →
               </button>
            </div>
         </form>

         {/* Results Area Placeholder */}
         <div className="mt-12 bg-white rounded-xl shadow-[0_0_32px_rgba(25,28,30,0.06)] p-8 text-center border border-[#e0e3e5] border-dashed">
             <div className="w-16 h-16 rounded-full bg-[#f2f4f6] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
             </div>
             <h3 className="text-xl font-bold text-[#191c1e] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Awaiting Parameters</h3>
             <p className="text-[#5d6467] text-sm">Enter your system requirements above to run the matching algorithm against our cell database.</p>
         </div>
      </main>
    </div>
  );
}
