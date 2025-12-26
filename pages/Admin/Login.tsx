
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ShieldCheck } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple simulation
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('비밀번호가 올바르지 않습니다. (Tip: admin123)');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 border border-blue-50">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
            <ShieldCheck size={40} />
          </div>
        </div>
        <h2 className="text-center text-3xl font-black text-gray-900 mb-2">관리자 로그인</h2>
        <p className="text-center text-gray-500 text-sm mb-10">인증된 관리자만 시스템에 접근할 수 있습니다.</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Administrator Password</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={18} />
              </span>
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>
          
          <button 
            type="submit"
            className="w-full py-4 bg-blue-900 text-white font-black rounded-2xl hover:bg-blue-800 shadow-lg shadow-blue-900/20 transition-all transform hover:-translate-y-1"
          >
            접속하기
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-gray-400">
          관리자 계정 분실 시 전산팀(053-255-5001)으로 문의 바랍니다.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
