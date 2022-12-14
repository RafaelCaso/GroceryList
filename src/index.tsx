import React from 'react';
import ReactDOM from 'react-dom/client';
import { GroceryListProvider } from './Context/GroceryListContext';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GroceryListProvider>
      <App />
    </GroceryListProvider>
    
  </React.StrictMode>
);

