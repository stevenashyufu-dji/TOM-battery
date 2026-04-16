"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Selector', path: '/selector' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f7f9fb]/80 backdrop-blur-[20px] border-b-0 py-6 px-12 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center space-x-3">
        <Link href="/">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#003f87] to-[#0056b3] shadow-[0_0_32px_rgba(25,28,30,0.06)] flex items-center justify-center cursor-pointer">
            <span className="text-white font-bold text-xl tracking-tighter self-center">TOM</span>
          </div>
        </Link>
        <span className="text-2xl font-bold tracking-tight text-[#003f87]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Battery
        </span>
      </div>
      <nav className="hidden md:flex space-x-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-semibold uppercase tracking-widest pb-1 transition-colors ${isActive
                  ? 'text-[#003f87] border-b-2 border-[#003f87]'
                  : 'text-[#5d6467] hover:text-[#191c1e]'
                }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <button className="px-6 py-3 rounded-md bg-[#003f87] text-white hover:bg-[#0056b3] transition flex items-center justify-center font-bold text-sm">
        Contact Sales
      </button>
    </header>
  );
}
