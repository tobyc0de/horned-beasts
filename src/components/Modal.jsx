function Modal({
  title,
  description,
  imageUrl,
  handleShowModal,
  backgroundColor,
  handleLikes,
  heartClass,
  textClass,
  likes,
}) {
  return (
    <div className="modal">
      <div className="modalbg" style={{ backgroundColor: backgroundColor }}>
        <h2>{title}</h2>
        <img id="modalimage" alt={title} src={imageUrl} />
        <br />
        <p>{description}</p>
        <br />
        <span id="likescontainer" className={heartClass} onClick={handleLikes}>
          <span id="hearticon">❤️</span>
          <span id="likestext" className={textClass}>
            {likes}
          </span>
        </span>
        <br />
        <button onClick={handleShowModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
