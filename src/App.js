import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Header from './Componets/header';
import Rodape from './Componets/rodape';


import MainRoutes from './routes';


function App() {
  
  return (
    <>
      <Router>
        <div className="content">
          <Header/>
          <MainRoutes/>
          <Rodape/>
        
        </div>
    
      </Router>
    </>
  );
}

export default App;
