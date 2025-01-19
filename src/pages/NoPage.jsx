import React from 'react';
import { NavLink } from 'react-router-dom';

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404 PAGE NON TROUVÉE</h1>
      <NavLink to="/" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
        Retour à l'Accueil
      </NavLink>
    </div>
  );
}

export default NoPage;
