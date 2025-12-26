
import React from 'react';
import { MOCK_VIDEOS } from '../constants';
import { Play } from 'lucide-react';

const VideoPage: React.FC = () => {
  const getEmbedUrl = (url: string) => {
    const id = url.split('v=')[1];
    return `https://www.youtube.com/embed/${id}`;
  };

  const getThumbnail = (video: any) => {
    const id = video.youtubeUrl.split('v=')[1];
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 border-b-2 border-blue-900 pb-4">
        <h1 className="text-4xl font-black italic text-blue-900">INNO <span className="not-italic text-gray-900">VISION</span></h1>
        <p className="mt-2 text-gray-500 font-medium">생생한 현장의 목소리를 영상으로 전달합니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {MOCK_VIDEOS.map((video) => (
          <div key={video.id} className="group">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-xl mb-6">
              {video.thumbnailType === 'text' ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-900 p-12 text-center">
                  <span className="text-3xl font-black text-white leading-tight underline decoration-yellow-400 underline-offset-8">
                    {video.thumbnailText}
                  </span>
                </div>
              ) : (
                <img 
                  src={getThumbnail(video)} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              )}
              
              <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform">
                  <Play size={32} className="text-white fill-white ml-1" />
                </div>
              </div>
              
              <iframe 
                className="absolute inset-0 w-full h-full hidden group-active:block focus-within:block"
                src={getEmbedUrl(video.youtubeUrl)}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {video.title}
            </h3>
            <div className="mt-2 text-sm text-gray-400 font-medium uppercase tracking-widest">
              Innovation Insight Series
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
