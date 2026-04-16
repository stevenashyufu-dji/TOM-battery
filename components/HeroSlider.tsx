"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// 在这里替换成你本地的图片路径
// 请先在你的 public 文件夹中新建一个 bg 文件夹，把你的电池图片命名为 battery-1.jpg 等放入其中
const BACKGROUND_IMAGES = [
  '/bg/1.webp',
  '/bg/2.webp',
  '/bg/3.webp'
];

export default function HeroSlider({ 
  children, 
  className = "min-h-[90vh] py-24 md:py-40" 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播逻辑 (5秒自动切换)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length);

  return (
    <section className={`relative px-6 md:px-16 flex flex-col justify-center overflow-hidden group ${className}`}>
      {/* 背景图片层 */}
      {BACKGROUND_IMAGES.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* object-cover 会自动居中裁剪画面铺满 */}
          <Image
            src={src}
            alt={`Battery Background ${idx + 1}`}
            fill
            className="object-cover object-center"
            priority={idx === 0}
          />
        </div>
      ))}

      {/* 遮罩，改成偏蓝色的深色半透明层，类似参考图的质感 */}
      <div className="absolute inset-0 bg-[#1e293b]/50 z-0 pointer-events-none"></div>

      {/* 左右切换按钮 - 移动到右下角 */}
      <div className="absolute bottom-10 right-10 md:bottom-16 md:right-16 z-20 flex space-x-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#1e293b] backdrop-blur-md transition-all font-bold text-xl cursor-pointer"
          aria-label="Previous image"
        >
          ←
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#1e293b] backdrop-blur-md transition-all font-bold text-xl cursor-pointer"
          aria-label="Next image"
        >
          →
        </button>
      </div>

      {/* 底部小圆点指示器 - 移动到左下角 */}
      <div className="absolute bottom-12 left-10 md:left-16 z-20 flex space-x-3">
        {BACKGROUND_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? 'bg-[#0055ff] w-10' : 'bg-black/20 hover:bg-black/40 w-2.5'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* 具体插进来的文字内容结构 */}
      {children}
    </section>
  );
}
