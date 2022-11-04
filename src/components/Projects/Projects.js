import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import fanreacts from "../../Assets/fan_reacts_preview.png";
import quiz from "../../Assets//codingquiz.png";
import weather from "../../Assets/weather.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fanreacts}
              isBlog={false}
              title="Fan Reacts"
              description="An MERN Stack Application that allows users to create a profile, search, and save movie titles pulled in through an API."
              ghlink="https://github.com/andrewgettz/Movie_Search"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Coding Quiz"
              description="Race the clock to complete the quiz. Wait, there's a twist. Get the answer wrong and your time decreases! Can you beat the quiz?"
              ghlink="https://github.com/andrewgettz/Coding_Quiz-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Leaving the house soon, don't know what weather to expect? Try this weather app out."
              link="https://andrewgettz.github.io/Weather-App/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
