import React from 'react';

interface HomeScreenProps {
  onStartShopping: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onStartShopping }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      {/* Walmart Logo */}
      <div className="mb-12">
        <div className="flex items-center space-x-4">
          {/* Walmart Spark */}
          <div className="w-12 h-12 bg-walmart-yellow rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-walmart-yellow relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-walmart-yellow transform rotate-45 rounded-sm"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-walmart-yellow rounded-full"></div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-walmart-blue">Walmart</h1>
        </div>
      </div>
      
      {/* Welcome message */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome to Smart Shopping
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
          Find products, get deals, and navigate your store with ease
        </p>
      </div>
      
      {/* Start Shopping Button */}
      <button
        onClick={onStartShopping}
        className="bg-walmart-blue text-white px-8 py-4 rounded-full text-lg font-semibold 
                   hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 
                   transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl
                   focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Start My Smart Shopping
      </button>
      
      {/* Features preview */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-walmart-yellow rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">🛒</span>
          </div>
          <h3 className="font-semibold text-gray-800">Easy Lists</h3>
          <p className="text-sm text-gray-600">Create shopping lists with voice or text</p>
        </div>
        
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-walmart-yellow rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">💰</span>
          </div>
          <h3 className="font-semibold text-gray-800">Smart Deals</h3>
          <p className="text-sm text-gray-600">Get personalized deals and offers</p>
        </div>
        
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-walmart-yellow rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">📍</span>
          </div>
          <h3 className="font-semibold text-gray-800">Store Navigation</h3>
          <p className="text-sm text-gray-600">Find the shortest path to your items</p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;