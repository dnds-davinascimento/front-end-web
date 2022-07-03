import React from "react";
import { Routes, Route,
  
} from "react-router-dom";

import Cadastro from "./pages/cadastro";
import Estoque from "./pages/estoque";
import Home from "./pages/home";
import Login from "./pages/login";
export default function MainRoutes (){
return (

    <Routes>
    <Route path="/cadastro" element={<Cadastro/>}/>
    <Route path="/estoque" element={<Estoque/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>

);
}



