import React, { useState } from 'react';
import "../css/Components/About.css";
import family from "../assets/family.webp";
import music from "../assets/music.webp";

const familyImg = {
  title: "Family",
  description: `I’m currently based Indianapolis. Prior to our time here in Indy my wife and I
  spent 7 years in New York City and we still consider it home. We have plans to
  move back and are eager for that next season. I’m the father of two
  rambunctious, beautiful boys who definitely keep me on my toes.
  Family is at the core of my life.`,
}

const musicImg = {
  title: "Theatre and Music",
  description: `I started my working life as an actor/singer/performer. 
  I've had the unique privilege of seeing up close how import art and music are 
  to the world through my work Off-Broadway in NYC as well as through 
  work I've done with regional theaters and symphony orchestras around 
  the US. Theatre and Music are an essential component to a thriving society 
  and I’m grateful and excited to continue supporting the industry and making 
  theatre/music as I’m able to.`,
}

const About = (props) => {
  const [activeImg, setActiveImg] = useState(familyImg);

  function handleActiveImgClick(img) {
    const familyImage = document.getElementById("family-img");
    const musicImage = document.getElementById("music-img");

    if (img !== activeImg) {
      if (img === familyImg) {
        musicImage.classList.remove("about-img-active")
        familyImage.classList.add("about-img-active")
      } else {
        familyImage.classList.remove("about-img-active")
        musicImage.classList.add("about-img-active")
      }

      setActiveImg(img);
    }
  }

  return (
    <section className="about-container">
      <div id="about-imgs" className="about-imgs">
        <img id="family-img" className="about-img about-img-active" src={family} alt="family" onClick={() => handleActiveImgClick(familyImg)} />
        <img id="music-img" className="about-img" src={music} alt="music" onClick={() => handleActiveImgClick(musicImg)} />
      </div>
      <hr />
      <h5>{activeImg.title}</h5>
      <p>{activeImg.description}</p>
    </section>
  );
}

export default About;