import React from 'react';

// You will need to import Space Grotesk and Inter fonts in your Next.js layout:
// import { Space_Grotesk, Inter } from 'next/font/google';
// const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] font-sans text-[#191c1e] flex flex-col md:flex-row antialiased selection:bg-[#003f87] selection:text-white">
      {/* 
        Ensure you have your custom fonts configured in your Tailwind config or layout.
        For this example, standard sans is used as fallback, but styles are prepared 
        assuming a global configuration or font-family utility classes.
      */}
      
      {/* Sidebar: Skinny Layout for Technical Info */}
      <aside className="w-full md:w-64 bg-[#f2f4f6] flex flex-col p-8 space-y-8">
        <div className="flex items-center space-x-2">
          {/* Logo / Brand */}
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#003f87] to-[#0056b3] shadow-[0_0_32px_rgba(25,28,30,0.06)] flex items-center justify-center">
            <span className="text-white font-bold text-lg tracking-tighter self-center">DTP</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#003f87]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Battery
          </span>
        </div>

        <nav className="flex flex-col space-y-2">
          <a href="#" className="flex items-center space-x-3 p-3 rounded-md bg-[#e6e8ea] text-[#003f87] font-semibold text-sm transition-colors">
             <span className="uppercase tracking-wide text-xs">Overview</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-md hover:bg-[#e6e8ea] text-[#424752] font-semibold text-sm transition-colors">
             <span className="uppercase tracking-wide text-xs">Analytics</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-md hover:bg-[#e6e8ea] text-[#424752] font-semibold text-sm transition-colors">
             <span className="uppercase tracking-wide text-xs">Cells</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-md hover:bg-[#e6e8ea] text-[#424752] font-semibold text-sm transition-colors">
             <span className="uppercase tracking-wide text-xs">Reports</span>
          </a>
        </nav>

        <div className="mt-auto pt-8">
           <div className="p-4 bg-[#e0e3e5] rounded-md relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#003f87]"></div>
              <label className="text-[0.65rem] uppercase tracking-widest text-[#5d6467] font-bold mb-1 block">System Status</label>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#003f87] animate-pulse"></div>
                <span className="text-sm font-semibold text-[#191c1e]">Nominal</span>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 md:p-12 space-y-12">
        
        {/* Hero Section: Glass & Gradient */}
        <section className="relative rounded-2xl p-10 overflow-hidden shadow-[0_0_32px_rgba(25,28,30,0.06)] bg-gradient-to-br from-[#003f87] to-[#0056b3]">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl text-white font-bold leading-tight tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
                Power Your Idea.
              </h1>
              <p className="text-[#bbd0ff] text-base md:text-lg max-w-xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                High-capacity energy storage specifications. Monitoring cluster performance and cellular integrity across all actively deployed power units.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex space-x-4">
               {/* Ghost Button */}
               <button className="px-6 py-3 rounded-md text-white border border-white/40 hover:bg-white/10 transition flex items-center justify-center font-semibold text-sm">
                  Run Diagnostics
               </button>
               {/* Primary Button Equivalent (White here for contrast on dark bg) */}
               <button className="px-6 py-3 rounded-md bg-white text-[#003f87] hover:bg-[#f2f4f6] transition flex items-center justify-center font-bold text-sm shadow-[0_0_16px_rgba(0,63,135,0.4)]">
                  Export Data
               </button>
            </div>
          </div>
        </section>

        {/* Data Grid: Kinetic Asymmetry & split card layouts */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Energy Gauge Card */}
          <div className="col-span-1 lg:col-span-2 bg-[#ffffff] rounded-xl p-8 shadow-[0_0_32px_rgba(25,28,30,0.06)] flex flex-col">
            <div className="flex justify-between items-center mb-8">
               <h2 className="text-2xl font-bold text-[#191c1e]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Energy Reserves</h2>
               <span className="text-[#003f87] text-sm uppercase tracking-widest font-bold">Live</span>
            </div>
            
            <div className="space-y-8 flex-1 flex flex-col justify-center">
              {/* Gauge 1 */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5d6467]">Main Cluster Alpha</span>
                  <span className="text-sm font-semibold text-[#191c1e]">84%</span>
                </div>
                {/* Track */}
                <div className="w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(194, 198, 212, 0.2)' }}>
                  {/* Fill */}
                  <div className="h-full rounded-full bg-gradient-to-r from-[#003f87] to-[#acc7ff]" style={{ width: '84%' }}></div>
                </div>
              </div>

              {/* Gauge 2 */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5d6467]">Auxiliary Cluster Beta</span>
                  <span className="text-sm font-semibold text-[#191c1e]">62%</span>
                </div>
                <div className="w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(194, 198, 212, 0.2)' }}>
                  <div className="h-full rounded-full bg-gradient-to-r from-[#003f87] to-[#acc7ff]" style={{ width: '62%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Spec List */}
          <div className="col-span-1 bg-[#ffffff] rounded-xl p-8 shadow-[0_0_32px_rgba(25,28,30,0.06)] flex flex-col">
            <h2 className="text-2xl font-bold text-[#191c1e] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Specifications</h2>
            
            <div className="space-y-2 flex-1">
               {/* Split Card Item */}
               <div className="flex items-center rounded-lg overflow-hidden">
                 <div className="bg-[#e0e3e5] px-4 py-3 w-2/5 flex items-center">
                   <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#424752]">Cell Type</span>
                 </div>
                 <div className="bg-white px-4 py-3 w-3/5">
                   <span className="text-sm font-semibold text-[#191c1e]">Lithium-Ion</span>
                 </div>
               </div>
               
               <div className="flex items-center rounded-lg overflow-hidden">
                 <div className="bg-[#e0e3e5] px-4 py-3 w-2/5 flex items-center">
                   <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#424752]">Capacity</span>
                 </div>
                 <div className="bg-white px-4 py-3 w-3/5">
                   <span className="text-sm font-semibold text-[#191c1e]">10,000 mAh</span>
                 </div>
               </div>

               <div className="flex items-center rounded-lg overflow-hidden">
                 <div className="bg-[#e0e3e5] px-4 py-3 w-2/5 flex items-center">
                   <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#424752]">Cycle Life</span>
                 </div>
                 <div className="bg-white px-4 py-3 w-3/5">
                   <span className="text-sm font-semibold text-[#191c1e]">{">"} 500 Cycles</span>
                 </div>
               </div>

               <div className="flex items-center rounded-lg overflow-hidden">
                 <div className="bg-[#e0e3e5] px-4 py-3 w-2/5 flex items-center">
                   <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#424752]">Voltage</span>
                 </div>
                 <div className="bg-white px-4 py-3 w-3/5">
                   <span className="text-sm font-semibold text-[#191c1e]">3.7V Nominal</span>
                 </div>
               </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
