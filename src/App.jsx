import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
