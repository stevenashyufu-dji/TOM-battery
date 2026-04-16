import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#eceef0] font-sans text-[#191c1e] antialiased">
      {/* Editorial Header */}
      <section className="bg-white px-8 py-24 md:px-12 md:py-32">
        <div className="max-w-4xl">
          <span className="text-[#003f87] text-sm font-bold uppercase tracking-widest border-b-2 border-[#003f87] pb-1">Our Origins</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6 text-[#191c1e] tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Precision Chemistry.<br/>Mass Scale.
          </h1>
        </div>
      </section>

      {/* Narrative Section - Kinetic Asymmetry & Generous Whitespace */}
      <section className="py-24 px-8 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-5 md:col-start-2">
           <h2 className="text-3xl font-bold mb-6 text-[#191c1e]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
             The Architecture of Power
           </h2>
           <p className="text-lg text-[#424752] leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
             Founded on the principle that energy storage should not be the limiting factor in industrial innovation, DTP Battery has rebuilt the manufacturing process from the molecular level up.
           </p>
           <p className="text-lg text-[#424752] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
             Our facilities operate at a microscopic tolerance, ensuring that every cell produced meets the rigorous demands of next-generation electric vehicles, medical devices, and aerospace applications.
           </p>
        </div>

        {/* Ambient Tonal Shadow Image Container */}
        <div className="md:col-span-10 md:col-start-3 bg-white p-4 rounded-xl shadow-[0_0_64px_rgba(25,28,30,0.08)] mt-12 relative overflow-hidden">
           {/* Primary Tint Overlay (5-10% opacity) over the image */}
           <div className="absolute inset-4 bg-[#003f87]/5 z-10 pointer-events-none mix-blend-multiply rounded-lg"></div>
           <div className="w-full aspect-[21/9] bg-[#e6e8ea] rounded-lg overflow-hidden flex items-center justify-center relative">
              <span className="text-[#a0aab2] font-bold text-sm uppercase tracking-widest absolute z-0">Clean-Room Facility View</span>
              {/* If an image was available, it goes here */}
           </div>
        </div>
      </section>

      {/* Manufacturing Specs */}
      <section className="bg-[#191c1e] text-white py-24 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Facility Tolerances
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {/* Dark mode variant spec cards */}
             {[
               { label: 'Ambient Humidity', value: '< 1%' },
               { label: 'Particulate Count', value: 'ISO Class 5' },
               { label: 'Coating Precision', value: '± 0.5 μm' },
               { label: 'Daily Output', value: '2.5 GWh' },
             ].map((spec, i) => (
                <div key={i} className="bg-[#2d3133] border-l-2 border-[#acc7ff] pl-6 py-6 p-4 rounded-r-lg">
                   <h3 className="text-xs uppercase tracking-widest text-[#c2c6d4] font-bold mb-2">{spec.label}</h3>
                   <span className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{spec.value}</span>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
