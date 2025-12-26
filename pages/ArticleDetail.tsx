
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_ARTICLES, MOCK_REPORTERS, INITIAL_ADS } from '../constants';
import { Article, Reporter } from '../types';
import TopBannerAd from '../components/TopBannerAd';
import { Calendar, Clock, Share2, Printer } from 'lucide-react';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [reporter, setReporter] = useState<Reporter | null>(null);

  useEffect(() => {
    const found = MOCK_ARTICLES.find(a => a.id === id);
    if (found) {
      setArticle(found);
      const rep = MOCK_REPORTERS.find(r => r.id === found.reporterId);
      if (rep) setReporter(rep);
    }
  }, [id]);

  if (!article) return <div className="p-20 text-center">기사를 찾을 수 없습니다.</div>;

  return (
    <div className="bg-white min-h-screen">
      <TopBannerAd ad={INITIAL_ADS.find(a => a.type === 'banner') || null} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="text-blue-600 font-black mb-4 tracking-wider uppercase text-sm">[{article.category}]</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-8 text-gray-900">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between py-6 border-y border-gray-100 gap-4">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>발행일: {article.publishDate.split(' ')[0]}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>업데이트: {article.updateDate}</span>
              </div>
              <div className="font-bold text-gray-800">기자: {reporter?.name}</div>
            </div>
            <div className="flex space-x-3">
              <button className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-blue-600 transition-colors">
                <Share2 size={18} />
              </button>
              <button className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-blue-600 transition-colors">
                <Printer size={18} />
              </button>
            </div>
          </div>
        </header>

        <figure className="mb-10 rounded-xl overflow-hidden shadow-sm">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-auto"
          />
          <figcaption className="p-4 bg-gray-50 text-gray-500 text-sm text-center italic">
            ▲ {article.title} 관련 이미지 (제공: 이노뉴스)
          </figcaption>
        </figure>

        <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6 whitespace-pre-line mb-20">
          {article.content}
          <p>
            또한 한국프로세스혁신협회는 향후 지속적으로 업계 리더들과의 네트워크를 강화하고, 최신 트렌드를 빠르게 공유하여 국내 산업 경쟁력 강화에 이바지할 계획이라고 밝혔다. 이번 혁신 방안은 향후 5년 내 가시적인 성과를 거둘 것으로 기대된다.
          </p>
        </article>

        {/* Reporter Section */}
        {reporter && (
          <section className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-100">
            <div className="w-24 h-24 flex-shrink-0">
              <img 
                src={reporter.image} 
                alt={reporter.name} 
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <div className="text-xs font-bold text-blue-600 mb-1">DESIGNATED REPORTER</div>
              <h3 className="text-xl font-black mb-3">{reporter.name} 기자</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {reporter.bio}
              </p>
              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-xs font-medium text-gray-400">
                <span>이메일: reporter@innonews.co.kr</span>
                <span>문의: 053-255-5001</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;
