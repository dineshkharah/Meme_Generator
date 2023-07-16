import React from "react";
import "../index.css";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)













  // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray);
    const url = memesArray[randomNumber.url]
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  return (
    <main>
      <form action="" className="form">
        <input type="text" placeholder="Top Text" className="form--input" />
        <input type="text" placeholder="Bottom Text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
        <img src={meme.randomImage} className="meme--image" alt="none" />
      </form>
    </main>
  );
}
