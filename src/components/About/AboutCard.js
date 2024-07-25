import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Haris Waheed Bhatti </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />
            I am currently employed as a SWE Fellow at Headstarter AI.
            <br />
            I am passionate about <span className="purple"> Blockchain</span> technology and securing the future through advanced<span className="purple"> Cryptography</span> aided with <span className="purple"> Artificial Intelligence</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Mountaineering
            </li>
            <li className="about-activity">
              <ImPointRight /> Biking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What's gonna work? Teamwork!"{" "}
          </p>
          <footer className="blockquote-footer">Bhatti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
