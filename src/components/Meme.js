import React from "react";
import "../index.css";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMeme() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray);
    setMemeImage(memesArray[randomNumber.url]);
  }

  return (
    <main>
      <form action="" className="form">
        <input type="text" placeholder="Top Text" className="form--input" />
        <input type="text" placeholder="Bottom Text" className="form--input" />
        <button className="form--button">Get a new meme image 🖼</button>
        <img src="{memeImage}" className="meme--image" />
      </form>
    </main>
  );
}
