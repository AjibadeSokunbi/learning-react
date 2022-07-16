import Header from "./CardComponents/Header";
import Footer from "./CardComponents/Footer";
import Home from "./CardComponents/Home";
import About from "./CardComponents/About";
import Product from "./CardComponents/Product";
import "./CardComponents/Component.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="vb">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

