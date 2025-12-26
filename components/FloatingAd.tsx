
import React from 'react';
import { AdConfig } from '../types';

interface FloatingAdProps {
  ad: AdConfig | null;
}

const FloatingAd: React.FC<FloatingAdProps> = ({ ad }) => {
  if (!ad || !ad.isActive) return null;

  return (
    <div 
      className="hidden xl:block fixed top-32 right-8 z-40 transition-all duration-300"
      style={{ width: ad.width, height: ad.height }}
    >
      <a href={ad.linkUrl} target="_blank" rel="noopener noreferrer" className="block relative group shadow-lg">
        <img 
          src={ad.imageUrl} 
          alt="광고" 
          className="w-full h-full object-cover rounded border border-gray-200"
        />
        <div className="absolute top-0 right-0 bg-gray-800/50 text-[10px] text-white px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
          AD
        </div>
      </a>
    </div>
  );
};

export default FloatingAd;
