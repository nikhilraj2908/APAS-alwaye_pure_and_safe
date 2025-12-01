// import { useState } from 'react'
// import './App.css'
// import Header from './components/header/Header.js'
// import { Section } from './pages/section/section.js'
// import { Footer } from './components/Footer/Footer.js'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Header/>
//     <Section/>
// <div className="section-separator"></div>
//     <Footer/>
//     </>
//   )
// }

// export default App
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { Section } from "./pages/section/section";
import { Footer } from "./components/Footer/Footer";
import { AboutUs } from "./pages/Aboutus/AboutUs";
import { Home } from "./pages/home";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
// import { AboutUs } from "./pages/AboutUs/AboutUs"; // import About Us page
// import { Products } from "./pages/Products/Products"; // example
// import { Contact } from "./pages/Contact/Contact";   // example

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header /> {/* Header stays on top */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home / Section page */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <div className="section-separator"></div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
