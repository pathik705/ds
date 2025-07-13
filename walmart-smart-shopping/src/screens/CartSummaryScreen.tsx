import React from 'react';

interface ShoppingItem {
  id: string;
  name: string;
  available: boolean;
  price: number;
  discountedPrice?: number;
  inCart: boolean;
}

interface CartSummaryScreenProps {
  items: ShoppingItem[];
  onBack: () => void;
  onGoHome: () => void;
}

const CartSummaryScreen: React.FC<CartSummaryScreenProps> = ({ items, onBack, onGoHome }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.discountedPrice || item.price), 0);
  const originalTotal = items.reduce((sum, item) => sum + item.price, 0);
  const savings = originalTotal - subtotal;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const handleCheckout = () => {
    alert('Redirecting to checkout...');
    onGoHome();
  };

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
        <h1 className="text-xl font-semibold">Cart Summary</h1>
        <div className="w-10"></div>
      </div>

      <div className="p-6">
        {/* Cart Items */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Your Items ({items.length})
          </h2>
          
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">
                      {item.name === 'Milk' ? '🥛' : 
                       item.name === 'Bread' ? '🍞' : 
                       item.name === 'Handwash' ? '🧴' : 
                       item.name === 'Toothpaste' ? '🦷' : '📦'}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <div className="text-sm text-gray-600">Qty: 1</div>
                  </div>
                </div>
                
                <div className="text-right">
                  {item.discountedPrice ? (
                    <div>
                      <div className="text-gray-500 line-through text-sm">${item.price.toFixed(2)}</div>
                      <div className="font-semibold text-walmart-blue">${item.discountedPrice.toFixed(2)}</div>
                    </div>
                  ) : (
                    <div className="font-semibold text-gray-800">${item.price.toFixed(2)}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Savings Banner */}
        {savings > 0 && (
          <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-green-600 text-xl">🎉</span>
              <span className="text-green-800 font-semibold">
                You're saving ${savings.toFixed(2)} today!
              </span>
            </div>
          </div>
        )}

        {/* Price Breakdown */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal ({items.length} items)</span>
              <span className="text-gray-800">${subtotal.toFixed(2)}</span>
            </div>
            
            {savings > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Savings</span>
                <span>-${savings.toFixed(2)}</span>
              </div>
            )}
            
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="text-gray-800">${tax.toFixed(2)}</span>
            </div>
            
            <div className="border-t pt-3">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-walmart-blue">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">💳</span>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Credit Card</div>
                <div className="text-sm text-gray-600">•••• •••• •••• 1234</div>
              </div>
            </div>
            
            <button className="text-walmart-blue text-sm hover:underline">
              Change payment method
            </button>
          </div>
        </div>

        {/* Pickup/Delivery Options */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Pickup Options</h3>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 border border-walmart-blue rounded-lg bg-blue-50">
              <input type="radio" name="pickup" checked readOnly className="text-walmart-blue" />
              <div>
                <div className="font-semibold text-gray-800">Store Pickup</div>
                <div className="text-sm text-gray-600">Ready in 2 hours • FREE</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <input type="radio" name="pickup" className="text-walmart-blue" />
              <div>
                <div className="font-semibold text-gray-800">Curbside Pickup</div>
                <div className="text-sm text-gray-600">Ready in 2 hours • FREE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="space-y-4">
          <button
            onClick={handleCheckout}
            className="w-full bg-walmart-blue text-white py-4 rounded-lg font-semibold text-lg
                     hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 
                     transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Proceed to Checkout
          </button>
          
          <button
            onClick={onGoHome}
            className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold
                     hover:bg-gray-200 transition-colors"
          >
            Continue Shopping
          </button>
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 6.48 9 12 10 12s10-5.52 10-12V7L12 2z"/>
            </svg>
            <span>Your payment information is secure and encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummaryScreen;