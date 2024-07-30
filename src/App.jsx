import React from "react";
import AppRoutes from "./routes/Routes";
import Footer from "./components/Footer/index";
import Nav from "./components/Nav"

export default function App() {
  return (
    <>
	<div id= 'app page'>
        <AppRoutes />
	  <Footer />
  </div>
    </>
  );
}