import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Andrew Gettz </span>
            from <span className="purple"> Indianapolis, IN.</span>
            <br />I'm a recent graudate from  <a href="https://bootcamp.butler.edu/coding/">Butler University </a>.
            <br />
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy:
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Weight Lifting
            </li>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#00669d" }}>
            "The man who loves walking will walk further than the man of loves the destitination."{" "}
          </p>
          <footer className="blockquote-footer">Andrew Gettz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
