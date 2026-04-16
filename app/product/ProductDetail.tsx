import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import { Outfit, JetBrains_Mono } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '600', '800'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] });

export default function ProductDetail() {
  return (
    <div className={`min-h-screen bg-[#fafbfc] text-[#0a0d14] antialiased pb-24 overflow-x-hidden ${outfit.className}`}>

      {/* 顶部英雄横幅 (HeroSlider) */}
      <HeroSlider className="min-h-[60vh] py-24 md:py-32">
        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col items-start px-4 md:px-8">
          <a href="/catalog" className={`inline-block mb-12 text-xs uppercase font-bold tracking-widest text-[#00f0ff] hover:text-white transition ${jetbrains.className}`}>
             ← Back to Catalog
          </a>
          
          <div className={`mb-6 text-xs uppercase font-bold tracking-widest text-white/90 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded ${jetbrains.className}`}>
            Lithium-Ion &bull; Cylindrical
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight">
            DTP-XR High Drain Cell
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl font-light">
            Engineered for continuous high-current discharge. This cylindrical cell utilizes a proprietary cathode structure to minimize internal resistance, making it ideal for power tools, robotics, and heavy-duty motor applications.
          </p>
        </div>
      </HeroSlider>

      {/* 主体内容 */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           
           {/* 左侧：视觉与行为号召 */}
           <div className="lg:col-span-5 space-y-8">
              <div className="aspect-square bg-white rounded-2xl p-8 shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-[#e2e8f0] relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-[#0055ff]/5 mix-blend-multiply pointer-events-none"></div>
                 <div className="w-2/3 h-2/3 border-2 border-[#cbd5e1] border-dashed rounded flex flex-col justify-center items-center opacity-60">
                    <span className={`text-[#64748b] font-bold text-xs uppercase tracking-widest mb-2 ${jetbrains.className}`}>Schematic View</span>
                    <span className={`text-[#0055ff] text-sm font-bold ${jetbrains.className}`}>DTP-XR-12K</span>
                 </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-[#e2e8f0]">
                 <div className="flex flex-col items-start mb-8">
                    <span className="text-[#64748b] text-sm font-medium mb-1">Volume Pricing</span>
                    <span className="text-4xl font-extrabold text-[#0f172a]">$42.50 <span className="text-sm text-[#94a3b8] font-medium tracking-normal ml-1">/ unit (MoQ 1000)</span></span>
                 </div>
                 <div className="space-y-4">
                    <button className={`w-full py-5 rounded bg-[#0055ff] text-white hover:bg-[#00f0ff] hover:text-black transition-colors duration-300 flex items-center justify-center font-bold text-sm uppercase tracking-widest ${jetbrains.className}`}>
                       Request Formal Quote
                    </button>
                    <button className={`w-full py-5 rounded text-[#0055ff] border border-[#0055ff]/30 hover:border-[#0055ff] hover:bg-[#0055ff]/5 transition-colors duration-300 flex items-center justify-center font-bold text-sm uppercase tracking-widest ${jetbrains.className}`}>
                       Download Datasheet (PDF)
                    </button>
                 </div>
              </div>
           </div>

           {/* 右侧：规格详情 */}
           <div className="lg:col-span-7">
              {/* 参数列表 */}
              <div className="bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-[#e2e8f0] p-10 mb-8">
                 <h3 className="text-2xl font-extrabold text-[#0f172a] mb-8">Technical Specifications</h3>
                 
                 <div className="space-y-1">
                    {[
                      { l: 'Nominal Capacity', v: '12,000 mAh' },
                      { l: 'Nominal Voltage', v: '3.7V' },
                      { l: 'Max Continuous Discharge', v: '30A' },
                      { l: 'Peak Pulse Discharge', v: '50A (10s)' },
                      { l: 'Internal Impedance', v: '< 15 mΩ' },
                      { l: 'Weight', v: '78g ± 2g' },
                      { l: 'Operating Temp', v: '-20°C ~ 60°C' }
                    ].map((row, i) => (
                       <div key={i} className="flex rounded overflow-hidden">
                          <div className={`px-6 py-4 w-2/5 flex items-center ${i % 2 === 0 ? 'bg-[#f8fafc]' : 'bg-[#f1f5f9]'}`}>
                             <span className={`text-[11px] uppercase tracking-[0.1em] text-[#475569] font-bold ${jetbrains.className}`}>{row.l}</span>
                          </div>
                          <div className={`px-6 py-4 w-3/5 flex items-center ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafbfc]'}`}>
                             <span className="text-sm font-semibold text-[#0f172a]">{row.v}</span>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              
              {/* 性能指标条 */}
              <div className="bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-[#e2e8f0] border-l-4 border-l-[#0055ff] p-10">
                 <h3 className="text-xl font-extrabold text-[#0f172a] mb-6">Discharge Profile Efficiency</h3>
                 <div className="flex justify-between mb-3">
                    <span className={`text-xs uppercase tracking-[0.1em] font-bold text-[#64748b] ${jetbrains.className}`}>At 20A Load</span>
                    <span className={`text-sm font-bold text-[#0055ff] ${jetbrains.className}`}>94%</span>
                 </div>
                 <div className="w-full h-4 rounded-full bg-[#e2e8f0] overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#0055ff] to-[#00f0ff]" style={{ width: '94%' }}></div>
                 </div>
              </div>

           </div>
        </div>
      </main>
    </div>
  );
}
