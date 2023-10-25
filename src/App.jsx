import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  function handleShowModal() {
    setShowModal(!showModal);
  }
  return (
    <>
      <button onClick={handleShowModal}>Show modal</button>
      {showModal && <Modal handleShowModal={handleShowModal} />}

      <Header />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
