import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RootStoreProvider } from './hooks/useStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RootStoreProvider>
      <App />
    </RootStoreProvider>
  </React.StrictMode>
);

