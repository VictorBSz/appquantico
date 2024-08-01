import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home/index";
import Sobre from "../pages/Sobre/index"
import Contato from "../pages/Contato/index"
import Produtos from "../pages/Produtos/index"


export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Sobre />} />
                <Route path="/contact" element={<Contato />}/>
                <Route path="/products" element={<Produtos />}/>
            </Routes>
        </BrowserRouter>
    );
}