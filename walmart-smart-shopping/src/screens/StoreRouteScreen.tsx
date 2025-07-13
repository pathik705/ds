import React from 'react';

interface StoreRouteScreenProps {
  onNavigateToCart: () => void;
  onBack: () => void;
}

const StoreRouteScreen: React.FC<StoreRouteScreenProps> = ({ onNavigateToCart, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-walmart-blue text-white p-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold">Store Route</h1>
        <div className="w-10"></div>
      </div>

      <div className="p-6">
        {/* Route Info */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Optimized Route</h2>
            <div className="text-walmart-blue font-semibold">
              <span className="text-2xl">12</span>
              <span className="text-sm ml-1">min</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold text-gray-800">4</div>
              <div className="text-sm text-gray-600">Items to collect</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-800">3</div>
              <div className="text-sm text-gray-600">Aisles to visit</div>
            </div>
          </div>
        </div>

        {/* Store Map */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Store Map</h3>
          
          {/* Simple store layout */}
          <div className="relative bg-gray-100 rounded-lg p-4 h-64">
            {/* Entrance */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
              🚪 Entrance
            </div>
            
            {/* Aisles */}
            <div className="grid grid-cols-6 gap-2 h-full">
              {/* Aisle 1 */}
              <div className="bg-gray-300 rounded flex items-center justify-center text-xs">
                <div className="text-center">
                  <div>Aisle 1</div>
                  <div className="text-gray-600">Electronics</div>
                </div>
              </div>
              
              {/* Aisle 2 */}
              <div className="bg-gray-300 rounded flex items-center justify-center text-xs">
                <div className="text-center">
                  <div>Aisle 2</div>
                  <div className="text-gray-600">Clothing</div>
                </div>
              </div>
              
              {/* Aisle 3 - Highlighted */}
              <div className="bg-walmart-yellow bg-opacity-50 border-2 border-walmart-yellow rounded flex items-center justify-center text-xs">
                <div className="text-center">
                  <div className="font-semibold">Aisle 3</div>
                  <div className="text-gray-700">Health & Beauty</div>
                  <div className="text-xs text-walmart-blue">✓ Handwash</div>
                </div>
              </div>
              
              {/* Aisle 4 */}
              <div className="bg-gray-300 rounded flex items-center justify-center text-xs">
                <div className="text-center">
                  <div>Aisle 4</div>
                  <div className="text-gray-600">Home & Garden</div>
                </div>
              </div>
              
              {/* Aisle 5 - Highlighted */}
              <div className="bg-walmart-yellow bg-opacity-50 border-2 border-walmart-yellow rounded flex items-center justify-center text-xs">
                <div className="text-center">
                  <div className="font-semibold">Aisle 5</div>
                  <div className="text-gray-700">Groceries</div>
                  <div className="text-xs text-walmart-blue">✓ Milk, Bread</div>
                </div>
              </div>
              
              {/* Aisle 6 */}
              <div className="bg-gray-300 rounded flex items-center justify-center text-xs">
                <div className="text-center">
                  <div>Aisle 6</div>
                  <div className="text-gray-600">Frozen</div>
                </div>
              </div>
            </div>
            
            {/* Route Path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path
                d="M 50 240 Q 100 200 150 150 Q 200 100 250 150 Q 300 200 350 150"
                stroke="#0071CE"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
              {/* Start point */}
              <circle cx="50" cy="240" r="6" fill="#0071CE" />
              {/* End point */}
              <circle cx="350" cy="150" r="6" fill="#0071CE" />
            </svg>
            
            {/* You are here marker */}
            <div className="absolute bottom-4 left-12 text-xs text-walmart-blue font-semibold">
              📍 You are here
            </div>
          </div>
        </div>

        {/* Step by Step Route */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Step by Step</h3>
          
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-walmart-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <div>
                <div className="font-semibold text-gray-800">Go to Aisle 3 - Health & Beauty</div>
                <div className="text-sm text-gray-600">Pick up: Handwash, Toothpaste</div>
                <div className="text-xs text-walmart-blue">~3 minutes</div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-walmart-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <div>
                <div className="font-semibold text-gray-800">Go to Aisle 5 - Groceries</div>
                <div className="text-sm text-gray-600">Pick up: Milk, Bread</div>
                <div className="text-xs text-walmart-blue">~5 minutes</div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-walmart-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <div>
                <div className="font-semibold text-gray-800">Head to Checkout</div>
                <div className="text-sm text-gray-600">Proceed to self-checkout or cashier</div>
                <div className="text-xs text-walmart-blue">~4 minutes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => alert('Navigation started!')}
            className="w-full bg-walmart-blue text-white py-4 rounded-lg font-semibold text-lg
                     hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span>Start Navigation</span>
          </button>
          
          <button
            onClick={onNavigateToCart}
            className="w-full bg-walmart-yellow text-gray-800 py-4 rounded-lg font-semibold text-lg
                     hover:bg-yellow-300 transition-colors shadow-lg"
          >
            View Cart & Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreRouteScreen;