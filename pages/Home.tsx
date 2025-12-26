
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_ARTICLES } from '../constants';
import { ArrowRight, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const featured = MOCK_ARTICLES.find(a => a.isFeatured) || MOCK_ARTICLES[0];
  const latest = MOCK_ARTICLES.filter(a => a.id !== featured.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Featured Section (Samsung Newsroom Style) */}
      <section className="mb-12">
        <Link to={`/article/${featured.id}`} className="group relative block overflow-hidden rounded-2xl bg-black">
          <img 
            src={featured.imageUrl} 
            alt={featured.title} 
            className="w-full h-[400px] md:h-[600px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-12">
            <span className="text-blue-400 font-bold uppercase text-sm tracking-widest mb-4">{featured.category}</span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight drop-shadow-lg">
              {featured.title}
            </h1>
            <p className="text-gray-200 text-lg md:text-xl line-clamp-2 max-w-3xl mb-8 opacity-90">
              {featured.content}
            </p>
            <div className="flex items-center text-white/70 text-sm">
              <Clock size={16} className="mr-2" />
              <span>{featured.publishDate}</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Grid Section (Ask Inno Style) */}
      <section>
        <div className="flex justify-between items-end mb-8 border-b-2 border-gray-900 pb-2">
          <h2 className="text-2xl font-black">최신 이슈</h2>
          <Link to="/category/Latest" className="text-sm font-bold text-blue-600 flex items-center hover:underline">
            전체보기 <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {latest.map(article => (
            <Link key={article.id} to={`/article/${article.id}`} className="group">
              <div className="aspect-[16/10] overflow-hidden rounded-lg mb-4">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-blue-600 text-xs font-black mb-2 block">{article.category}</span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4">
                {article.content}
              </p>
              <div className="text-gray-400 text-xs flex items-center">
                <Clock size={12} className="mr-1" />
                {article.publishDate}
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Association Promo */}
      <section className="mt-20 bg-blue-900 rounded-3xl p-8 md:p-16 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-6 italic">Innovation is Our Duty.</h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          한국프로세스혁신협회는 기업의 미래 성장 가치를 발굴하고 공정 혁신을 통한 사회적 가치 실현을 위해 노력합니다.
        </p>
        <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors">
          협회 소개 바로가기
        </button>
      </section>
    </div>
  );
};

export default Home;
