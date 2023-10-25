import HornedBeast from "./HornedBeast";

export default function Gallery({ handleShowModal, beastsArr }) {
  return (
    <div className="gallery">
      {beastsArr.map((e) => (
        <HornedBeast
          title={e.title}
          imageUrl={e.image_url}
          description={e.description}
          handleShowModal={handleShowModal}
        />
      ))}
    </div>
  );
}
