import React from "react";
import'../../styles/style.css';
import image from '../../assets/img.jpg';

function AboutMe() {
    return (
        <div className="about-me-div">
            <div className="about-me-img">
            <img src={image} alt="Avatar" />
            </div>
            <div className="about-me-text">
                <h3>Info About Me:</h3>
                <p>I am lreaning to be a full stack developer. I enjoy working with HTML, CSS, JavaSript and React!</p>
                <p>I am a cat lover I have 3 cats, I enjoy many differnt forms of art. I love to draw crochet and craft.</p>

            </div>

        </div>
    )
}

export default AboutMe 