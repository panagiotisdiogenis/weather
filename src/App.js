import React, { useContext } from 'react';
import { WeatherProvider, WeatherContext } from './contexts/WeatherContext';
import { DarkModeProvider, DarkModeContext } from './contexts/DarkModeContext';
import Forecast from './components/Forecast/Forecast';
import Nav from './components/Nav/Nav';
import SubNav from './components/SubNav/SubNav';
import Loading from './components/Loading/Loading';
import Overview from './components/Overview/Overview';
import './index.css';

function AppContent() {
  const { loading } = useContext(WeatherContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`min-h-screen p-6 ${darkMode ? 'bg-zinc-950 text-white' : 'bg-white text-black'}`}
    >
      {loading ? (
        <Loading />
      ) : (
        <div className="p-4">
          <Nav />
          <SubNav />
          <Forecast />
          <Overview />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <WeatherProvider>
        <AppContent />
      </WeatherProvider>
    </DarkModeProvider>
  );
}

export default App;
