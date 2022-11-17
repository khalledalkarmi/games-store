import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { GameProvider } from './Context/GameProvider';
import { PopularGamesProvider } from './Context/PopularGamesContext';
import { UpcomingGamesProvider } from './Context/UpcomingGamesContext';
import { NewGamesGetProvider } from './Context/NewGamesGetContext';
import { GamePlatformsProvider } from './Context/GamePlatformsContext';
// import AboutUs from './Components/AboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PopularGamesProvider>
        <GameProvider>
          <UpcomingGamesProvider>
            <NewGamesGetProvider>
              <GamePlatformsProvider>
                <App />
              </GamePlatformsProvider>
            </NewGamesGetProvider>
          </UpcomingGamesProvider>
        </GameProvider>
      </PopularGamesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
