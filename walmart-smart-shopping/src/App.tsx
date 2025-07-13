import React, { useState } from 'react';
import './App.css';

// Screen components
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import ShoppingListScreen from './screens/ShoppingListScreen';
import ResultsScreen from './screens/ResultsScreen';
import StoreRouteScreen from './screens/StoreRouteScreen';
import CartSummaryScreen from './screens/CartSummaryScreen';

type Screen = 'splash' | 'home' | 'shopping-list' | 'results' | 'store-route' | 'cart-summary';

interface ShoppingItem {
  id: string;
  name: string;
  available: boolean;
  price: number;
  discountedPrice?: number;
  inCart: boolean;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);
  const [shoppingList, setShoppingList] = useState<string>('');

  // Sample data for demonstration
  const sampleItems: ShoppingItem[] = [
    { id: '1', name: 'Milk', available: true, price: 3.99, inCart: true },
    { id: '2', name: 'Bread', available: true, price: 2.49, inCart: true },
    { id: '3', name: 'Eggs', available: false, price: 2.99, inCart: false },
    { id: '4', name: 'Handwash', available: true, price: 4.99, discountedPrice: 3.49, inCart: true },
    { id: '5', name: 'Toothpaste', available: true, price: 3.49, discountedPrice: 2.44, inCart: true },
  ];

  const handleStartShopping = () => {
    setCurrentScreen('shopping-list');
  };

  const handleSubmitShoppingList = (listText: string) => {
    setShoppingList(listText);
    setShoppingItems(sampleItems);
    setCurrentScreen('results');
  };

  const handleNavigateToRoute = () => {
    setCurrentScreen('store-route');
  };

  const handleNavigateToCart = () => {
    setCurrentScreen('cart-summary');
  };

  const handleGoBack = () => {
    if (currentScreen === 'shopping-list') {
      setCurrentScreen('home');
    } else if (currentScreen === 'results') {
      setCurrentScreen('shopping-list');
    } else if (currentScreen === 'store-route') {
      setCurrentScreen('results');
    } else if (currentScreen === 'cart-summary') {
      setCurrentScreen('results');
    }
  };

  const handleGoHome = () => {
    setCurrentScreen('home');
  };

  // Auto-navigate from splash to home after 3 seconds
  React.useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('home');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'home':
        return <HomeScreen onStartShopping={handleStartShopping} />;
      case 'shopping-list':
        return (
          <ShoppingListScreen
            onSubmit={handleSubmitShoppingList}
            onBack={handleGoBack}
          />
        );
      case 'results':
        return (
          <ResultsScreen
            items={shoppingItems}
            onNavigateToRoute={handleNavigateToRoute}
            onNavigateToCart={handleNavigateToCart}
            onBack={handleGoBack}
          />
        );
      case 'store-route':
        return (
          <StoreRouteScreen
            onNavigateToCart={handleNavigateToCart}
            onBack={handleGoBack}
          />
        );
      case 'cart-summary':
        return (
          <CartSummaryScreen
            items={shoppingItems.filter(item => item.inCart)}
            onBack={handleGoBack}
            onGoHome={handleGoHome}
          />
        );
      default:
        return <SplashScreen />;
    }
  };

  return (
    <div className="App min-h-screen bg-white">
      {renderScreen()}
    </div>
  );
}

export default App;
