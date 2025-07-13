import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Walmart Spark Logo */}
      <div className="mb-8">
        <div className="relative">
          {/* Yellow spark - simplified version */}
          <div className="w-24 h-24 bg-walmart-yellow rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-walmart-yellow relative">
              {/* Spark rays */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-walmart-yellow transform rotate-45 rounded-sm"></div>
              </div>
              {/* Central circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-walmart-yellow rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Walmart Text */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-walmart-blue mb-2">Walmart</h1>
        <p className="text-lg text-gray-600">Smart Shopping Assistant</p>
      </div>
      
      {/* Loading animation */}
      <div className="mt-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-walmart-blue"></div>
      </div>
    </div>
  );
};

export default SplashScreen;