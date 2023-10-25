import { useState } from "react";
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
let textClass;
let heartClass;
export default function HornedBeast(props) {
  useState(0);

  const [likes, setLikes] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    Math.floor(Math.random() * colorArray.length)
  );

  function handleLikes() {
    setLikes(likes + 1);
    setSelectedColor(selectedColor + 1);
    textClass = "turnred";
    heartClass = "beat";
  }

  return (
    <div
      className="hornedbeast"
      style={{
        backgroundColor: colorArray[selectedColor],
        borderRadius: 10,
        margin: 20,
      }}
      // style={colorArray[selectedColor]}
    >
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.title} />
      <span id="likescontainer" className={heartClass} onClick={handleLikes}>
        <span id="hearticon">❤️</span>
        <span id="likestext" className={textClass}>
          {likes}
        </span>
      </span>
      <p>{props.description}</p>
    </div>
  );
}
