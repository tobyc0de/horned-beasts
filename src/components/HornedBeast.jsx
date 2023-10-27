import { useState } from "react";
import Modal from "./Modal";

const colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

export default function HornedBeast({ title, description, imageUrl }) {
  const [heartClass, setHeartClass] = useState("bla");
  const [textClass, setTextClass] = useState("bli");
  const [likes, setLikes] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    Math.floor(Math.random() * (colorArray.length - 5) + 1)
  );

  function handleLikes() {
    setLikes(likes + 1);
    setSelectedColor(selectedColor + 1);
    setHeartClass("beat");
    setTextClass("turnred");
  }

  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(!showModal);
  }
  return (
    <>
      <div
        className="hornedbeast"
        style={{
          backgroundColor: colorArray[selectedColor],
          borderRadius: 10,
          margin: 20,
        }}
      >
        {showModal && (
          <Modal
            handleShowModal={handleShowModal}
            title={title}
            imageUrl={imageUrl}
            description={description}
            backgroundColor={colorArray[selectedColor]}
            handleLikes={handleLikes}
            heartClass={heartClass}
            setHeartClass={setHeartClass}
            textClass={textClass}
            setTextClass={setTextClass}
            likes={likes}
          />
        )}

        <h2 onClick={handleShowModal}>{title}</h2>
        <img src={imageUrl} alt={title} onClick={handleShowModal} />
        <span id="likescontainer" className={heartClass} onClick={handleLikes}>
          <span id="hearticon">❤️</span>
        </span>
      </div>
    </>
  );
}
