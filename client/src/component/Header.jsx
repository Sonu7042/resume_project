import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center px-6 h-[80px] shadow fixed w-full bg-white z-10">
      <h2 className="font-bold text-2xl">
        <Link to="/">Assignment</Link>
      </h2>


     

      <div className="flex gap-2">
        {!localStorage.getItem('token') ? (
          <>
            <Link
              to="/signup"
              className="bg-blue-500 px-4 py-2 rounded-2xl font-medium text-white hover:bg-blue-600"
            >
              SignUp
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 px-4 py-2 rounded-2xl font-medium text-white hover:bg-blue-600"
            >
              Login
            </Link>
          </>
        ) : (
          <button
            className="bg-blue-500 px-4 py-2 rounded-2xl font-medium text-white hover:bg-blue-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
