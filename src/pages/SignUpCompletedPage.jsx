import React, { useState, useEffect } from 'react';

import logo from '../Assests/Frame 27.svg';
import { useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';
import avatar from '../Assests/Rectangle.svg';
import completeLogo from '../Assests/Variant8.svg';

const SignUpCompletedPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
// Automatically navigate after 3 seconds
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/Persona');
    }, 3000);

    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, [navigate]);

  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <nav className="h-[100px] bg-white px-6 flex items-center justify-between">
          <div className="h-[100px] flex items-center px-3 pt-6">
            <img src={logo} alt="Finsum logo" className="h-8 w-auto" />
          </div>
          <div className="flex items-center space-x-6">
            <button className="relative text-gray-600 hover:text-gray-800 focus:outline-none">
              <Bell className="h-6 w-6" />
            </button>
            <img
              src={avatar}
              alt="User Avatar"
              className="h-10 w-10 rounded-full object-cover border border-gray-300"
            />
          </div>
        </nav>

     
        <div className="min-h-screen flex flex-col items-center justify-center">
          <img src={completeLogo} alt="Success logo" className="mb-6" />
          <p className="text-black text-lg font-bold text-center">
            You’ve successfully created your player financial persona!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpCompletedPage;
