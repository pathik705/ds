import React, { useState } from 'react';

interface ShoppingListScreenProps {
  onSubmit: (listText: string) => void;
  onBack: () => void;
}

const ShoppingListScreen: React.FC<ShoppingListScreenProps> = ({ onSubmit, onBack }) => {
  const [listText, setListText] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSubmit = () => {
    if (listText.trim()) {
      onSubmit(listText);
    }
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    // Simulate voice input
    if (!isListening) {
      setListText('Milk, Bread, Eggs, Handwash, Toothpaste');
      setTimeout(() => setIsListening(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
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
        <h1 className="text-xl font-semibold">Shopping List</h1>
        <div className="w-10"></div>
      </div>

      <div className="p-6">
        {/* Instructions */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What do you need today?
          </h2>
          <p className="text-gray-600">
            Type your shopping list or use voice input to get started
          </p>
        </div>

        {/* Input Section */}
        <div className="mb-6">
          <label htmlFor="shopping-list" className="block text-sm font-medium text-gray-700 mb-2">
            Your Shopping List
          </label>
          <div className="relative">
            <textarea
              id="shopping-list"
              value={listText}
              onChange={(e) => setListText(e.target.value)}
              placeholder="Enter your shopping list... (e.g., Milk, Bread, Eggs)"
              className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-walmart-blue focus:border-transparent resize-none"
              style={{ fontSize: '16px' }} // Prevent zoom on mobile
            />
            {isListening && (
              <div className="absolute inset-0 bg-walmart-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                <div className="text-walmart-blue">
                  <div className="animate-pulse">🎤 Listening...</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Voice Input Button */}
        <div className="mb-8 text-center">
          <button
            onClick={handleVoiceInput}
            className={`p-4 rounded-full transition-all duration-200 ${
              isListening
                ? 'bg-red-500 text-white shadow-lg animate-pulse'
                : 'bg-walmart-yellow text-gray-800 hover:bg-yellow-300 shadow-md hover:shadow-lg'
            }`}
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          </button>
          <p className="text-sm text-gray-600 mt-2">
            {isListening ? 'Listening...' : 'Tap to use voice input'}
          </p>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!listText.trim()}
          className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
            listText.trim()
              ? 'bg-walmart-blue text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Find My Items
        </button>

        {/* Quick Add Suggestions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Add</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Milk & Dairy',
              'Fresh Produce',
              'Meat & Seafood',
              'Bakery Items',
              'Household',
              'Personal Care'
            ].map((category) => (
              <button
                key={category}
                onClick={() => {
                  const current = listText ? listText + ', ' : '';
                  setListText(current + category);
                }}
                className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-left"
              >
                <span className="text-sm font-medium">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingListScreen;