
import React from 'react';
import { AdConfig } from '../types';

interface TopBannerAdProps {
  ad: AdConfig | null;
}

const TopBannerAd: React.FC<TopBannerAdProps> = ({ ad }) => {
  if (!ad || !ad.isActive) return null;

  return (
    <div className="w-full flex justify-center py-6 bg-gray-50 border-b">
      <div className="max-w-7xl px-4 flex justify-center w-full">
         <a 
          href={ad.linkUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative block border bg-white"
          style={{ width: ad.width, height: ad.height }}
         >
           <img 
            src={ad.imageUrl} 
            alt="배너 광고" 
            className="w-full h-full object-cover"
           />
           <span className="absolute top-0 left-0 bg-black/30 text-[9px] text-white px-1">AD</span>
         </a>
      </div>
    </div>
  );
};

export default TopBannerAd;
