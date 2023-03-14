import React from 'react'
import "./Footer.css"
import { AiFillInstagram, AiFillGithub, AiFillLinkedin,AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
<div className="footer  section">
    <a href="#home" className="footer_logo">Anant Shukla</a>

    <ul className="all_links">
        <li><a href="#home">Home</a></li>      
        <li><a href="#about">About</a></li>
        <li><a href="#exprience">Exprience</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
        <a href="#home"><AiFillLinkedin size={24}/></a>
        <a href="https://github.com/AnantShukla22"><AiFillGithub size={24}/></a>
        <a href="#home"><FaTwitter size={22}/></a>
        <a href="#home"><AiFillFacebook size={23}/></a>
        <a href="#home"><AiFillInstagram size={24}/></a>
    </div>
</div>
    )
}

export default Footer