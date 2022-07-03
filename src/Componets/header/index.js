import React from "react";
import { Link } from "react-router-dom";
import './index.css';

 export default function Header() {
   return (
    <header className="main-header">
      <div className="title"><h1>ALAGOO</h1></div>
      
       <div className="header-content">
      
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastre-se</Link>
      <Link to="/estoque">Estoque</Link>
      </div>
    </header>
    
      
      
      
   );
   }