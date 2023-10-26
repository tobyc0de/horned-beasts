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
  const [creator, setCreator] = useState(0);
  function handleFooterClick() {
    setCreator(creator + 1);
  }
  return (
    <div className="footer" onClick={handleFooterClick}>
      <div>Created by {creatorsArr[creator]}</div>
    </div>
  );
}
