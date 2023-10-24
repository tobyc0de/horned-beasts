import { useState } from "react";
const creatorsArr = [
  "Toby",
  "Gods of Code",
  "Your mum",
  "nobody",
  "stop clicking!",
  "now you've done it and reached the end",
];

export default function Footer() {
  const [selectedCreator, setSelectedCreator] = useState(0);
  const [creator, setCreator] = useState(creatorsArr[selectedCreator]);
  function handleFooterClick() {
    setCreator(creatorsArr[selectedCreator]);
    setSelectedCreator(selectedCreator + 1);
  }
  return (
    <div className="footer" onClick={handleFooterClick}>
      <div>Created by {creator}</div>
    </div>
  );
}
