function Modal({ title, description, imageUrl, handleShowModal }) {
  return (
    <div className="modal">
      <h2>{title}</h2>
      <img id="modalimage" alt={title} src={imageUrl} />
      <br />
      <p>{description}</p>
      <br />
      <button onClick={handleShowModal}>Close</button>
    </div>
  );
}

export default Modal;
