import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { useState } from "react";
import Modal from "./components/Modal";
import beastsArr from "./assets/data.json";

function App() {
  return (
    <>
      <Header />
      <Gallery beastsArr={beastsArr} />
      <Footer />
    </>
  );
}

export default App;
