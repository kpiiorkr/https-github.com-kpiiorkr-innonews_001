
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-12 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
             <Link to="/" className="text-xl font-bold tracking-tighter text-blue-900 italic">INNO<span className="text-blue-600 not-italic ml-1">NEWS</span></Link>
             <p className="mt-4 text-xs text-gray-500 max-w-sm">
               한국프로세스혁신협회가 운영하는 혁신 전문 언론사 이노뉴스입니다. 기술과 경영, 우리 사회의 변화를 가장 먼저 전달합니다.
             </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 font-medium">
             <a href="#" className="hover:text-blue-600">회사소개</a>
             <a href="#" className="hover:text-blue-600">광고안내</a>
             <a href="#" className="hover:text-blue-600">구독신청</a>
             <a href="#" className="hover:text-blue-600">개인정보처리방침</a>
             <a href="#" className="hover:text-blue-600">청소년보호정책</a>
             <a href="#" className="hover:text-blue-600">편집윤리규정</a>
          </div>
        </div>
        
        <div className="border-t pt-8 text-xs text-gray-500 leading-relaxed">
          <p className="mb-2">본사 : 대구광역시 중구 서성로20 (계산 2가 71번지) 매일신문사 (우 41933) | TEL : (053) 255-5001~7</p>
          <p className="mb-2">경북본사 : 경북 안동시 풍천면 수호로 63, 3층(우 36759) | TEL : (054) 855-1700</p>
          <p className="mb-2">서울지사 : 서울 영등포구 국회대로74길 19 동우국제빌딩 4층 (우 07238) | TEL : (02) 733-0755~6</p>
          <p>인터넷신문등록번호 : 대구,아00201 | 등록일자 : 2016.11.28 | 발행인 : 이동관 | 편집인 : 이재협</p>
          <p className="mt-6 font-semibold">Copyright ⓒ INNO NEWS & MAEIL, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
