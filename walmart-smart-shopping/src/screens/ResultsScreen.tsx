import React from 'react';

interface ShoppingItem {
  id: string;
  name: string;
  available: boolean;
  price: number;
  discountedPrice?: number;
  inCart: boolean;
}

interface ResultsScreenProps {
  items: ShoppingItem[];
  onNavigateToRoute: () => void;
  onNavigateToCart: () => void;
  onBack: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  items,
  onNavigateToRoute,
  onNavigateToCart,
  onBack
}) => {
  const availableItems = items.filter(item => item.available);
  const unavailableItems = items.filter(item => !item.available);
  const dealsItems = items.filter(item => item.discountedPrice);

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
        <h1 className="text-xl font-semibold">Shopping Results</h1>
        <div className="w-10"></div>
      </div>

      <div className="p-6">
        {/* Summary */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Item Summary</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{availableItems.length}</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{unavailableItems.length}</div>
              <div className="text-sm text-gray-600">Unavailable</div>
            </div>
          </div>
        </div>

        {/* Special Deals */}
        {dealsItems.length > 0 && (
          <div className="bg-walmart-yellow bg-opacity-20 rounded-lg p-6 mb-6 border border-walmart-yellow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🎉 Special Deals</h3>
            <div className="space-y-2">
              {dealsItems.map((item) => (
                <div key={item.id} className="text-sm">
                  <span className="font-medium">Buy {item.name}, get 30% off {item.name === 'Handwash' ? 'Toothpaste' : 'next item'}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Available Items */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Items</h3>
          <div className="space-y-3">
            {availableItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xl">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      <div className="flex items-center space-x-2">
                        {item.discountedPrice ? (
                          <>
                            <span className="text-gray-500 line-through text-sm">${item.price.toFixed(2)}</span>
                            <span className="text-walmart-blue font-semibold">${item.discountedPrice.toFixed(2)}</span>
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                              Save ${(item.price - item.discountedPrice).toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span className="text-gray-700">${item.price.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Aisle 5</div>
                    <div className="text-xs text-gray-500">In stock</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unavailable Items */}
        {unavailableItems.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Unavailable Items</h3>
            <div className="space-y-3">
              {unavailableItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 text-xl">❌</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <div className="text-sm text-red-600">Out of stock</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <button className="text-walmart-blue text-sm hover:underline">
                        Find alternative
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={onNavigateToRoute}
            className="w-full bg-walmart-blue text-white py-4 rounded-lg font-semibold text-lg
                     hover:bg-blue-700 transition-colors shadow-lg"
          >
            Get Store Route
          </button>
          
          <button
            onClick={onNavigateToCart}
            className="w-full bg-walmart-yellow text-gray-800 py-4 rounded-lg font-semibold text-lg
                     hover:bg-yellow-300 transition-colors shadow-lg"
          >
            View Cart ({availableItems.filter(item => item.inCart).length} items)
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;