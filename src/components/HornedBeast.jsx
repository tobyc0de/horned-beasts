import { useState } from "react";

export default function HornedBeast(props) {
  useState(0);
  const [likes, setLikes] = useState(0);
  function handleLikes() {
    setLikes(likes + 1);
  }

  return (
    <div className="hornedbeast">
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.title} onClick={handleLikes} />
      <p>{props.description}</p>
      <span>❤️{likes}</span>
    </div>
  );
}
