import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-sm p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-500">
          Connexion
        </h2>
        <form>
          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-700 mb-2 text-center"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Votre email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-md font-medium text-gray-700 mb-3 text-center"
            >
              Mot de passe
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Votre mot de passe"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {/* Password Toggle Icon */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? <AiOutlineEyeInvisible className='text-center align-middle pt-4' size={30} /> : <AiOutlineEye className='text-center align-middle pt-4' size={30} />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition duration-300"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
