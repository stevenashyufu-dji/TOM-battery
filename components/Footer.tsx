import React from 'react';

export default function Footer() {
   return (
      <footer className="bg-[#191c1e] py-16 px-8 md:px-12 text-[#eff1f3] mt-auto">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
               <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>TOM Battery</h2>
               <p className="text-[#c2c6d4] text-sm">Industrial Power Systems</p>
            </div>
            <div className="text-xs tracking-widest uppercase text-[#727784] flex space-x-6">
               <a href="#" className="hover:text-white transition">Privacy Policy</a>
               <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
         </div>
      </footer>
   );
}
