
import React, { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';

const ReportPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    contents: '',
    chkAgree: false
  });
  const [fileName, setFileName] = useState('선택된 파일 없음');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('선택된 파일 없음');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.chkAgree) {
      alert('필수 동의사항에 체크하여 주십시오.');
      return;
    }
    // Simulation
    console.log('Sending report to /api.php...', formData);
    alert('제보가 성공적으로 접수되었습니다. 감사합니다.');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-white p-12 rounded-3xl shadow-xl border border-blue-100">
          <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-black mb-4">제보 완료</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            보내주신 소중한 제보는 담당 기자가 검토 후 연락드리겠습니다.<br />
            이노뉴스는 여러분의 목소리에 항상 귀 기울입니다.
          </p>
          <button 
            onClick={() => window.location.href = '#/'}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
          >
            홈으로 이동
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-black mb-4">기사제보</h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          이노뉴스는 주변의 따뜻한 미담부터 사건사고, 불편부당, 부정부패 고발까지 여러분의 소중한 제보를 기다립니다.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
        <div className="p-8 md:p-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">이름 <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="이름을 입력해주세요"
                className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-600 outline-none transition-colors"
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">이메일 <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="이메일주소를 입력해주세요"
                className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-600 outline-none transition-colors"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">연락처 <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="phone"
              required
              placeholder="예) 010-1234-5678"
              className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-600 outline-none transition-colors"
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">제목 <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="title"
              required
              placeholder="제목을 입력해주세요"
              className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-600 outline-none transition-colors"
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">내용 <span className="text-red-500">*</span></label>
            <textarea 
              name="contents"
              required
              rows={8}
              placeholder="제보 내용을 상세히 입력해주세요"
              className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-600 rounded-lg outline-none transition-colors resize-none"
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-bold text-gray-700">파일첨부</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors text-gray-700 font-bold gap-2">
                <Upload size={18} />
                파일 선택
                <input type="file" className="hidden" onChange={handleFileChange} />
              </label>
              <span className="text-sm text-gray-400 truncate max-w-xs">{fileName}</span>
            </div>
            <p className="text-[11px] text-gray-400 italic">※ 2Mb 이하의 사진, 문서 파일만 업로드 가능합니다.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
             <h4 className="text-sm font-bold mb-4">개인정보 보호를 위한 이용자 동의사항</h4>
             <div className="h-32 overflow-y-auto text-xs text-gray-500 leading-relaxed bg-white p-4 border rounded mb-4">
                <strong>개인정보취급방침</strong><br />
                회사는 기사제보를 위해 이름, 연락처, 이메일을 수집하고 있습니다. 수집된 정보는 제보 내용 확인 및 처리 결과 통보를 위해서만 사용되며, 목적 달성 후 지체 없이 파기합니다.
             </div>
             <label className="flex items-center gap-2 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  name="chkAgree"
                  checked={formData.chkAgree}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded text-blue-600"
                />
                <span className="text-sm font-bold text-gray-700">이용약관 및 개인정보 수집에 동의합니다. (필수)</span>
             </label>
          </div>
        </div>

        <div className="flex">
          <button 
            type="submit"
            className="flex-1 py-6 bg-blue-900 text-white font-black text-xl hover:bg-blue-800 transition-colors"
          >
            제보하기
          </button>
          <button 
            type="button"
            onClick={() => window.history.back()}
            className="flex-1 py-6 bg-gray-100 text-gray-500 font-black text-xl hover:bg-gray-200 transition-colors"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportPage;
