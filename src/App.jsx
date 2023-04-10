import { useState } from "react";
import Home from "./components/pages/Home/Home";
import Footer from "./components/shared/footer/Footer";
import Nav from "./components/shared/nav/Nav";

function App() {
  return (
    <>
    <div className="my-container">
      <Nav />
      <Home />
    </div>

      <Footer />
    </>
  );
}

export default App;
