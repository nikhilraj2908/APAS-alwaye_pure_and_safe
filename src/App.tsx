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
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
// import { Section } from "./pages/section/section";
import { Footer } from "./components/Footer/Footer";
import { AboutUs } from "./pages/Aboutus/AboutUs";
import { Home } from "./pages/home";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
// import { AboutUs } from "./pages/AboutUs/AboutUs"; // import About Us page
// import { Products } from "./pages/Products/Products"; // example
// import { Contact } from "./pages/Contact/Contact";   // example
import 'react-whatsapp-widget/dist/index.css';
// import { Widget } from 'react-whatsapp-widget';
// import { ChatBox } from "./components/ChatBox/ChatBox";
import { WhatsAppChat } from "./components/WhatsAppChat/WhatsAppChat";
import { CustomizationPage } from "./pages/CustomizationPage/CustomizationPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import ReceiptPage from "./pages/ReceiptPage/ReceiptPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <div className="global-floating-bg">
  <ul className="circles">
    {Array.from({ length: 7 }).map((_, i) => (
      <li key={i}></li>
    ))}
  </ul>
</div>


    <ScrollToTop />
      <Header /> {/* Header stays on top */}
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home / Section page */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route path='/customization' element={<CustomizationPage/>}></Route>
      </Routes>
      <div className="section-separator"></div>
      <Footer />
      <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
 {/* <ChatBox /> */}
 <WhatsAppChat phoneNumber="+917693074458" />
</div>

    </BrowserRouter>
  );
}

export default App;
