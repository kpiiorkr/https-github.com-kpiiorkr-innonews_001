
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_ARTICLES, CATEGORIES } from '../constants';
import { Clock, ChevronRight } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  const currentCat = CATEGORIES.find(c => c.key === category) || { name: '뉴스', key: 'Latest' };
  const articles = category === 'Latest' 
    ? MOCK_ARTICLES 
    : MOCK_ARTICLES.filter(a => a.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <nav className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight size={12} className="mx-2" />
          <span className="text-blue-600">{currentCat.name}</span>
        </nav>
        <h1 className="text-4xl font-black text-gray-900 border-l-8 border-blue-600 pl-6">{currentCat.name}</h1>
      </div>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {articles.map(article => (
            <Link key={article.id} to={`/article/${article.id}`} className="flex flex-col md:flex-row gap-6 group">
              <div className="w-full md:w-56 h-40 flex-shrink-0 rounded-xl overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                  {article.content}
                </p>
                <div className="flex items-center text-gray-400 text-xs font-medium">
                  <Clock size={12} className="mr-1" />
                  {article.publishDate}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center text-gray-400 border-2 border-dashed rounded-3xl">
          등록된 기사가 없습니다.
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
