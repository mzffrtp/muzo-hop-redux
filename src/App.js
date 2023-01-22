import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"


import HomePage from "./pages/HomePage";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/productlisting" element={<ProductListing />}/>
        <Route path="/product/:productId" element={<ProductDetails />}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
