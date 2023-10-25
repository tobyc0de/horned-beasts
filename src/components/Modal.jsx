function Modal({ handleShowModal }) {
  return (
    <div className="modal">
      <h2>Modal</h2>
      <img id="modalimage" src="" />
      <button onClick={handleShowModal}>Close</button>
    </div>
  );
}

export default Modal;
