import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import "./App.css";
import MuiBottomNavigation from './components/MuiBottomNavigation';
import HomePage from "./pages/HomePage";
import Add from "./pages/Add";
import Redeem from "./pages/Redeem";

function AppContent() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = React.useState(getPageTitle(location.pathname));

  useEffect(() => {
    setCurrentPage(getPageTitle(location.pathname));
  }, [location]);

  function getPageTitle(pathname) {
    switch(pathname) {
      case '/':
        return 'Home';
      case '/add':
        return 'Add';
      case '/redeem':
        return 'Redeem';
      default:
        return 'Unknown Page';
    }
  }


  return (
      <div className='app-container'>
        <header className='top-header'>
          <p class="top-header-text">{currentPage}</p>
        </header>
        <div className="App">
          <Routes>
            <Route path="/" element={
                <HomePage />
            } />
            <Route path="/add" element={<Add />} />
            <Route path="/redeem" element={<Redeem />} />
          </Routes>
        </div>
        <div className="bottom-nav-app-div">
          <MuiBottomNavigation setCurrentPage={setCurrentPage} />
        </div>
      </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App;
