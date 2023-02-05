//WHEN I am presented with the About Me section
//THEN I see a recent photo or avatar of the developer and a short bio about them

import React from 'react';
import './about.css';
import '../../Terminals/Terminal.css';
import avatar from '../../Resources/images/avatar.jpg'

const About = () => {
return(
    <section className = "main section">
        <div className="about">
            <div className="text">
                <div  className="header">
                    <h1>About Me</h1>
                </div>
                <p>Hi, I'm Vivian Lee! I'm an Oral Health Therapist, who's also working to become a web developer and designer.<br/>⠀</p>
                <p> I was born in Taiwan but grew up in Brisbane, and currently based in Melbourne, Australia. <br/>⠀</p>
                <p>I love trying new things, and coding is one that I am enjoying learning at the moment. 
                I would love to design and create something that is simple but also super practical for people to use. 
                <br/>⠀</p>
            </div>
            <div className="avatar"
                imgPath={avatar}>
            </div>
        </div>
    </section>
    );
}


export default About;