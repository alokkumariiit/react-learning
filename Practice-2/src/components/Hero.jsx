import './Hero.css'
import "./Hero.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
function Hero() {
  return (
    <div id="hero">
        <img src={img1} alt="" width="100px"/>
        <img src={img2} alt="" width="100px"/>
        <img src={img3} alt="" width="100px"/>
    </div>
  )
}

export default Hero
