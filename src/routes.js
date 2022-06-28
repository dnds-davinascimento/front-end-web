import React from "react";
import { Routes, Route,
  
} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import New from "./pages/new";
import Estoque from "./pages/estoque/estoque";

export default function MainRoutes (){
return (

    <Routes>
    <Route path="/cadastro" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/new" element={<New/>}/>
    <Route path="/estoque" element={<Estoque/>}/>
    </Routes>

);
}



