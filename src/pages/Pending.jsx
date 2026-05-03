import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';

export default function Pending() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-100 rounded-full p-4">
            <Clock size={32} className="text-yellow-500" />
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Account Pending Approval</h2>
        <p className="text-gray-500 text-sm mb-6">
          Your account is under review. You'll receive an email once approved.
        </p>
        <button
          onClick={handleLogout}
          className="text-sm text-red-500 hover:text-red-700 transition-colors"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}