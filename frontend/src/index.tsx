import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Auth0Provider 
      domain = 'dev-tjazj88j3nvb4idg.us.auth0.com' 
      clientId='zIT0TUWpaEqCcHXs2VlJc7zLLo35ZP7z'
      redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>
  </React.StrictMode>
);
defineCustomElements(window);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
