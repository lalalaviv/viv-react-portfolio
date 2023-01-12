import React from "react";
import "./Work.css";
import "../../Terminals/Terminal.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import passwordGenerator from '../../Resources/images/passwordGenerator.png';
import codeQuiz from '../../Resources/images/codeQuiz.png';
import workDayScheduler from '../../Resources/images/workDayScheduler.png';
import weatherDashboard from '../../Resources/images/weatherDashboard.png';
import noteTaker from '../../Resources/images/noteTaker.png';
import theTraveller from '../../Resources/images/theTraveller.png';
const Work = () => {
  // const [showAllRepos,toggleShowAllRepos] = useToggle(false);
  return (
    <Container fluid className="project-section">
      <div className="main">
        <div className="projects">
          <div className="workHeader">
            <h3>Projects I've Built</h3>
          </div>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard 
                 imgPath={passwordGenerator}
               title="Password Generator"
               description="A webpage that helps to generate a set of password according to the user choice of length and selected criteria."
               linkApp="https://lalalaviv.github.io/Password-Generator/"
               linkGithub="https://github.com/lalalaviv/Password-Generator.git"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
                 imgPath={codeQuiz}
               title="CodeQuiz"
               description="A code quiz consisting of multiple choice questions and score tracking."
               linkApp="https://lalalaviv.github.io/Code-Quiz/"
               linkGithub="https://github.com/lalalaviv/Code-Quiz.git"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
                 imgPath={workDayScheduler}
               title="Work Day Scheduler"
               description="A calendar application that allows user to save events for each hour of the day."
               linkApp="https://lalalaviv.github.io/Work-Day-Scheduler/"
               linkGithub="https://github.com/lalalaviv/Work-Day-Scheduler.git"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
                 imgPath={weatherDashboard}
               title="Weather Dashboard"
               description="A webpage that allows the user to search for weather forecast of cities around the world."
               linkApp="https://lalalaviv.github.io/Weather-Dashboard/"
               linkGithub="https://github.com/lalalaviv/Weather-Dashboard.git"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
                 imgPath={noteTaker}
               title="Note Taker"
               description="Use OpenWeather API to fetch weather informaton."
               linkApp="https://serene-waters-36380.herokuapp.com/"
               linkGithub="https://github.com/lalalaviv/Note-Taker.git"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
                 imgPath={theTraveller}
               title="The Traveller"
               description="A JavaScript Code Quiz challenge has 8 questions."
               linkApp="https://wongpakho814.github.io/the-traveller/"
               linkGithub="https://github.com/wongpakho814/the-traveller"
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Work;