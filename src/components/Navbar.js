import react from "react";
import "../index.css";

export default function Navbar() {
  return (
    <header className="header">
      {/* <h1>This is a Navbar</h1> */}
      <img src="images/logo.png" alt="" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
