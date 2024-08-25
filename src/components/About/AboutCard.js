import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">NIDHI B M </span>
            from <span className="purple"> Karnataka, India.</span>
            <br />
            I am currently a 2nd year Undergrad,
            <br />
            from BMS College of Engineering,Banglore.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Tiny Things Can Make a Big Impact!"{" "}
          </p>
          <footer className="blockquote-footer">Nidhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
