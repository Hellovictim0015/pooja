import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './compo/Navbar/Navbar';
import Home from './page/Home/Home';
import Footer from './compo/Footer/Footer';
import About from './page/About/About';
import Product from './page/Products/Product';
import CategoryPage from './page/CategoryPage/CategoryPage';
import ProductDetail from './page/ProductDetail/ProductDetail';
import Contact from './page/Contact.js/Contact';





function Routing() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="/category/:categoryName" element={<CategoryPage/>} />
            <Route path="/product/:productName" element={<ProductDetail/>} />
            <Route path="/contact" element={<Contact/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default Routing;
