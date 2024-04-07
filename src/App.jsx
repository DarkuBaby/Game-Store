import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-poppins bg-[#1f2937]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
