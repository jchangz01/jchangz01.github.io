import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram, faStrava, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons'
import aboutProfile from '../assets/images/about-profile.JPG'
import NavBar from "../components/NavBar";
import '../css/About.css'

export default class Contact extends React.Component {
    render() {
        return (
            <div id="content-container">
                <header>
                    <NavBar/>
                </header>
                <section>
                    <div className="width-size fade-in-3" id="about-main">
                        <div className="about-main-content" style={{textAlign: "right"}}>
                            <img className="about-main-pic" src={aboutProfile} alt="Did not load, please refresh"/>
                        </div>
                        <div className="about-main-content">
                            <div style={{marginLeft: "40px"}}>
                                <h1 className="about-main-title">About Me</h1>
                                <hr className="about-main-linebreak"></hr>
                                <p className="about-main-paragraph">
                                    Hello! My name is <b>Justin Kyle Chang</b>. I am a 2nd-year student at UCLA (from the Bay Area) pursuing a 
                                    B.E. degree in Computer Science and aspiring to be a software engineer. 
                                </p>
                                <p className="about-main-paragraph">
                                    My focus and interest lie in web development, particularly in front end design (HTML5, CSS3, JS/JSX); 
                                    however, I am open to exploring all fields of Computer Science! I am also knowledgeable in 
                                    backend development (Node.js, Express, and MongoDB), C++ (Data structures and algorithms), Bash / Shell, and Git.
                                </p> 
                                <p className="about-main-paragraph">
                                    I love to solve problems, build applications, collaborate in teams, and during my free time, 
                                    go on runs and hikes! I am currently looking for a 2021 summer internship! 
                                </p>
                                <p className="about-main-paragraph">
                                    Check out my projects <a href="/#projects">here</a> and/or connect with me <a href="/#contact">here</a>.
                                </p>
                                <div className="about-main-socials">
                                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/j.changz/"><FontAwesomeIcon icon={faInstagram}/></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/justin-kyle-chang-31582419b/"><FontAwesomeIcon icon={faLinkedin}/></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/justin.chang.54772/"><FontAwesomeIcon icon={faFacebook}/></a>
                                    <a target="_blank" rel="noreferrer" href="https://github.com/jchangz01"><FontAwesomeIcon icon={faGithub}/></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@j.changz?lang=en"><FontAwesomeIcon icon={faTiktok}/></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.strava.com/athletes/51901493"><FontAwesomeIcon icon={faStrava}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}