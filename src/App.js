import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';


import MainRoutes from './routes';


function App() {

 

  return (
    <>
    <Router>
    <div className='container' >
      

      <div className="content">
       
      
      <MainRoutes/>
      </div>
    </div>
    </Router>
    </>
  );
}

export default App;
