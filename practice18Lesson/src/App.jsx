import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/layout/navBar";
import Footer from "./components/layout/footer";

import MainPage from "./pages/mainPage";
import CartPage from "./pages/cartPage";
import ContactPage from "./pages/contactPage";

import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />

      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
