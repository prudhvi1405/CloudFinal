import React from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation
import { ShieldCheck } from 'lucide-react';

function Dashboard() {
  const navigate = useNavigate(); // Initialize the useNavigate hook for routing

  const handleNavigate = (route: string) => {
    navigate(route); // Navigate to the specified route
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <ShieldCheck className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Welcome to the Dashboard</h1>
          <p className="mt-2 text-lg text-gray-600">
            You have successfully logged in to your account.
          </p>

          {/* Buttons Section */}
          <div className="mt-8 space-y-4">
            <button
              onClick={() => handleNavigate('/interactive')}
              className="w-full py-3 px-6 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Webpage
            </button>

            <button
              onClick={() => handleNavigate('/dashdashboard')}
              className="w-full py-3 px-6 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Dashboard
            </button>

            <button
              onClick={() => handleNavigate('/chatbot')}
              className="w-full py-3 px-6 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Chatbot
            </button>

            <button
              onClick={() => handleNavigate('/mlmodel')}
              className="w-full py-3 px-6 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              ML Model
            </button>

            <button
              onClick={() => handleNavigate('/predictions')}
              className="w-full py-3 px-6 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Predictions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;