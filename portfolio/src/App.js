import "./App.css";
import "./responsive.css";
import "./fonts/SFMono/style.css";
import "./fonts/Calibre/stylesheet.css";
import YoutubeEmbed from "./components/YoutubeEmbed";
import Accordion from "./components/Accordion";
import { BiPhoneCall } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import arch from "./Untitled-1.jpg";
import React, { Component } from "react";

function App() {
  return (
    <div className="portfolio">
      <div className="navbar">
        <a href="#intro" className="logo">
          G
        </a>
        <div className="menu">
          <a href="#about" className="n-about">
            <div className="number">01.</div>
            About
          </a>
          <a href="#projects" className="n-projects">
            <div className="number">02. </div>
            Projects
          </a>
          <a href="#contact" className="n-contact">
            <div className="number">03. </div>
            Contact
          </a>
        </div>
      </div>
      <motion.header
        id="intro"
        className="p-intro"
        initial={{ opacity: 0.1, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="p-hello">Hi, my name is</div>
        <div className="p-name">Martin Glogovsky.</div>
        <div className="p-info">I will build webapp for you.</div>
        <div className="p-desc">
          I am computer science student in third semester, highly motivated,
          eager to learn new technologies and try to constantly improve my
          knowledge to be the best Software engineer I could be. Currently I am
          seeking to use my proven skills in java, react, mysql to design, build
          <div className="highlight">software solution you need.</div>
          <div className="project"> check my recent projects </div>
        </div>
      </motion.header>

      <div className="about" id="about">
        <div className="about-firsthalf">
          <div className="about-title-section">
            <div className="about-number">01.</div>
            <div className="about-title">About me</div>
          </div>
          <div className="s"></div>
          <div className="about-info">
            <p>
              ive on the internet. My interest in web development started back
              in 2012 when I decided to try editing custom Tumblr themes —
              turnsive on the internet. My interest in web development started
              back in 2012 when I decided to try editing custom Tumblr themes —
              turns
            </p>
            <p>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
          </div>
        </div>

        <div className="about-secondhalf">
          <a href={arch} download>
            <div className="about-img">
              <button>Download Resume</button>
            </div>
          </a>
        </div>
      </div>

      <div className="skills">
        <div className="frontend">
          <div className="skils-title">Frontend</div>
          <div className="skils-lg">- HTML + CSS</div>
          <div className="skils-lg">- Javascript</div>
          <div className="skils-lg">- React</div>
        </div>
        <div className="backend">
          <div className="skils-title">Backend</div>
          <div className="skils-lg">- Java</div>
          <div className="skils-lg">- MySQL</div>
          <div className="skils-lg">- Spring Boot</div>
        </div>
      </div>

      <div className="projects" id="projects">
        <div className="project-things">
          <div className="about-number">02.</div>
          <div className="about-title">Things I have built</div>
        </div>
        <div className="project-title">
          Restaurant reservations CRUD webapp.
        </div>
        <YoutubeEmbed embedId="IEVbn9-Xupk" />
        <div className="acc">
          <Accordion />
          <div className="github sep">
            Link to github:
            <a href="https://github.com/mglogovsky/Restaurant-reservation-app">
              {" "}
              https://github.com/mglogovsky/Restaurant-reservation-app
            </a>
          </div>
        </div>
        <div className="technologies">
          <div className="tech">Java</div>
          <div className="tech">Spring Boot</div>
          <div className="tech">React JS</div>
          <div className="tech">MySql</div>
        </div>
      </div>

      <div className="contact" id="contact">
        <div className="about-number">03.</div>
        <div className="about-title">Contact me</div>
      </div>
      <div className="sep details">
        <div className="number1">
          <BiPhoneCall className="icon" />
          Number:
          <div className="spt"> +4526852698 </div>
        </div>
        <div className="email">
          <BiMailSend className="icon" />
          Email:
          <div className="spt"> glogysv@gmail.com </div>
        </div>
        <div className="address">
          <BiHomeAlt className="icon" />
          Location:
          <div className="spt"> 9220 Aalborg </div>
        </div>
      </div>
    </div>
  );
}
//#222222;
//282c34
//1b1b1b
//https://www.youtube.com/watch?v=IEVbn9-Xupk&ab_channel=MartinGlogovsk%C3%BD

export default App;
