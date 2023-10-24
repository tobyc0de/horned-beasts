import { useState } from "react";

let characters = [
  "B",
  "e",
  "a",
  "u",
  "t",
  "i",
  "f",
  "u",
  "l",
  " ",
  "H",
  "o",
  "r",
  "n",
  "e",
  "d",
  " ",
  "B",
  "e",
  "a",
  "s",
  "t",
  "s",
];

var colorArray = [
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

export default function Header() {
  const [selectedChar, setSelectedChar] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  function handleHeaderClick() {
    // user clicks on header onClick
    // select character in characters array and turn it into unicorn
    characters[selectedChar] = "🦄";
    // change the selected char to the next one in the array
    setSelectedChar(selectedChar + 1);
    // change the selected color to the next one in the array
    setSelectedColor(selectedColor + 1);
  }
  return (
    <div
      className="header"
      style={{ backgroundColor: colorArray[selectedColor] }}
      onClick={handleHeaderClick}
    >
      <h1>{characters}</h1>
    </div>
  );
}
