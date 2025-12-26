
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { Menu, X, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-black tracking-tighter text-blue-900 italic">INNO<span className="text-blue-600 not-italic ml-1">NEWS</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.key}
                to={cat.key === 'Report' ? '/report' : cat.key === 'Video' ? '/video' : `/category/${cat.key}`}
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                  location.pathname.includes(cat.key.toLowerCase()) ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'
                }`}
              >
                {cat.name}
              </Link>
            ))}
            <Link to="/admin/login" className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <User size={20} />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.key}
                to={cat.key === 'Report' ? '/report' : cat.key === 'Video' ? '/video' : `/category/${cat.key}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              to="/admin/login"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-blue-600 bg-gray-50"
            >
              관리자 로그인
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
