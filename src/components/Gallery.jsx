import HornedBeast from "./HornedBeast";
import beastsArr from "../assets/data.json";
import { useState } from "react";

export default function Gallery({}) {
  const [selectedFilter, setSelectedFilter] = useState(0);
  function handleChange(dropdown) {
    dropdown.preventDefault();
    setSelectedFilter(dropdown.target.value);
    console.log(dropdown.target.value);
  }
  return (
    <div id="main">
      <form>
        <select name="filter" onChange={handleChange}>
          <option value="0">All</option>
          <option value="1">1 horn</option>
          <option value="2">2 horns</option>
          <option value="3">3 horn</option>
          <option value="100">100 horns!</option>
        </select>
      </form>
      <div className="gallery">
        {selectedFilter === 0
          ? beastsArr.map((beast) => (
              <HornedBeast
                key={beast.title}
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
              />
            ))
          : beastsArr
              .filter((beast) => beast.horns === parseInt(selectedFilter))
              .map((beast) => (
                <HornedBeast
                  key={beast.title}
                  title={beast.title}
                  imageUrl={beast.image_url}
                  description={beast.description}
                />
              ))}
      </div>
    </div>
  );
}
