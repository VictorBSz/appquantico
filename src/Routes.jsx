import React from "react"

import { BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"

export default function AppRoutes() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="./src/components/Header" element={<Home />} />
                <Route path="./pages/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}