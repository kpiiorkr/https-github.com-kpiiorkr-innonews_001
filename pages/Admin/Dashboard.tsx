
import React, { useState } from 'react';
import { Settings, Video, Image as ImageIcon, FileText, User, Bell } from 'lucide-react';
import { INITIAL_ADS, MOCK_VIDEOS } from '../../constants';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ads' | 'videos' | 'articles'>('ads');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-gray-900">시스템 관리 센터</h1>
            <p className="text-gray-500">이노뉴스 플랫폼의 모든 콘텐츠와 설정을 관리합니다.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400">
               <Bell size={20} />
             </div>
             <div className="flex items-center gap-3 bg-white p-2 rounded-full shadow-sm border px-4">
                <span className="text-sm font-bold">마스터 관리자</span>
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
             </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Nav */}
          <aside className="w-full lg:w-64 space-y-2">
            <button 
              onClick={() => setActiveTab('ads')}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'ads' ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-blue-50'}`}
            >
              <Settings size={20} /> 광고 관리
            </button>
            <button 
              onClick={() => setActiveTab('videos')}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'videos' ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-blue-50'}`}
            >
              <Video size={20} /> 영상 관리
            </button>
            <button 
              onClick={() => setActiveTab('articles')}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'articles' ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-blue-50'}`}
            >
              <FileText size={20} /> 기사 관리
            </button>
          </aside>

          {/* Content Area */}
          <main className="flex-1">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              {activeTab === 'ads' && (
                <div className="p-8">
                  <h2 className="text-xl font-bold mb-8">배너 및 플로팅 광고 설정</h2>
                  <div className="space-y-10">
                    {INITIAL_ADS.map(ad => (
                      <div key={ad.id} className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                        <div className="flex justify-between items-center mb-6">
                           <h3 className="font-black text-gray-700">{ad.type === 'floating' ? '사이드 플로팅 광고' : '상단 중앙 배너'}</h3>
                           <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-green-600">활성 상태</span>
                              <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                              </div>
                           </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-4">
                             <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400">연결 링크 URL</label>
                                <input type="text" defaultValue={ad.linkUrl} className="w-full p-3 border rounded-xl text-sm outline-none focus:border-blue-500" />
                             </div>
                             <div className="grid grid-cols-2 gap-4">
                               <div className="space-y-1">
                                  <label className="text-xs font-bold text-gray-400">가로 너비</label>
                                  <input type="text" defaultValue={ad.width} className="w-full p-3 border rounded-xl text-sm outline-none" />
                               </div>
                               <div className="space-y-1">
                                  <label className="text-xs font-bold text-gray-400">세로 높이</label>
                                  <input type="text" defaultValue={ad.height} className="w-full p-3 border rounded-xl text-sm outline-none" />
                               </div>
                             </div>
                           </div>
                           <div className="space-y-4">
                              <label className="text-xs font-bold text-gray-400">현재 광고 이미지</label>
                              <div className="relative aspect-video rounded-xl overflow-hidden bg-white border flex items-center justify-center group cursor-pointer">
                                 <img src={ad.imageUrl} className="max-h-full object-contain" alt="ad preview" />
                                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <button className="bg-white px-4 py-2 rounded-lg font-bold text-sm">이미지 변경</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 flex justify-end">
                    <button className="px-8 py-3 bg-blue-900 text-white rounded-xl font-bold hover:shadow-lg transition-all">설정 저장하기</button>
                  </div>
                </div>
              )}

              {activeTab === 'videos' && (
                <div className="p-8">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold">영상 갤러리 관리</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold">+ 새 영상 추가</button>
                  </div>
                  <div className="space-y-4">
                    {MOCK_VIDEOS.map(video => (
                      <div key={video.id} className="flex gap-6 p-4 border rounded-2xl items-center hover:bg-gray-50 transition-colors">
                        <div className="w-32 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center">
                          {video.thumbnailType === 'text' ? <span className="text-[10px] p-2 text-center font-bold">T: {video.thumbnailText}</span> : <ImageIcon size={20} className="text-gray-400" />}
                        </div>
                        <div className="flex-grow">
                           <h4 className="font-bold text-gray-800">{video.title}</h4>
                           <p className="text-xs text-gray-400 truncate max-w-sm">{video.youtubeUrl}</p>
                        </div>
                        <div className="flex gap-2">
                           <button className="p-2 text-gray-400 hover:text-blue-600"><Settings size={18} /></button>
                           <button className="p-2 text-gray-400 hover:text-red-500"><Bell size={18} /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'articles' && (
                <div className="p-8 text-center py-20">
                  <FileText size={60} className="text-gray-200 mx-auto mb-4" />
                  <h2 className="text-xl font-bold mb-2">기사 관리 시스템</h2>
                  <p className="text-gray-500 mb-8">등록된 기사의 편집 및 삭제, 기자 프로필 설정을 관리합니다.</p>
                  <button className="bg-blue-900 text-white px-10 py-4 rounded-2xl font-black text-lg">새 기사 작성하기</button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
