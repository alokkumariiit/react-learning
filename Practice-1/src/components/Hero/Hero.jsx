import "./Hero.css";
import Card from "../Card/Card"
import bmw from "../../assets/bmw.jpg";
import lamborgini from "../../assets/lamborgini.jpg";
import rangeRover from "../../assets/rangeRover.jpg";
function Hero() {
  return (
    <div id="hero">
        
        <Card imageUrl ={bmw}  name="BMW"  price="Rs 1.5Cr"/>
        <Card imageUrl = {lamborgini} name="Lamborgini"  price="Rs 1.2Cr"/>
        <Card imageUrl ={rangeRover}  name="Range Rover"  price="Rs 1Cr"/>

    </div>
  )
}

export default Hero
