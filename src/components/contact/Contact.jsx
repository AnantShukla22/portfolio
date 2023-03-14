import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion as m} from "framer-motion";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7l38nvr",
        "template_ptsxs1d",
        form.current,
        "WIQWBaw2sDJu7ATQD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };


  const contact_heading = {
    offscreen: {opacity:0 },
    onscreen: { opacity:1, transition: { duration: .5} },
    exit:{
      opacity:0 
    }
  };
  
  return (
    <m.div  className="contact container section" id="contact"  initial={"offscreen"}
    whileInView={"onscreen"}
    exit={"exit"}
    viewport={{once:false,amount:0.3}}
    transition={{ staggerChildren: 0.3 }}>
      <m.h2  variants={contact_heading} className="contact_heading">Get In Touch</m.h2>
      <m.p variants={contact_heading} className="contact_msg">
        Always Available for any opportunity and collaboration
      </m.p>
      <div className="contact_info">
        <div className="contact_options">
          <a href="mailto:kuhukanha@gamil.com" className="contact_type">
            <AiOutlineMail size={22} className="contact_type-icon" />
            <span>kuhukanha@gamil.com</span>
          </a>
          <a href="https://github.com/AnantShukla22" className="contact_type">
            <AiFillGithub size={24} className="contact_type-icon" />
            <span>Github</span>
          </a>
          <a href="#home" className="contact_type">
            <AiFillLinkedin size={24} className="contact_type-icon" />
            <span>Linkedin</span>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=9425872022"
            rel="noopener noreferrer" 
            className="contact_type"
          >
            <BsWhatsapp size={20} className="contact_type-icon" />
            <span>9425872022</span>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="inputs">
            <input
              type="text"
              name="name"
              className="contact_form_input"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              className="contact_form_input"
              placeholder="Your Email"
            />
            <input
              type="text"
              name="subject"
              className="contact_form_input"
              placeholder="Your Subject"
            />
          </div>

          <textarea
            name="message"
            id="c"
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="contact_button">
            Send Message
          </button>
        </form>
      </div>
    </m.div>
  );
};

export default Contact;
