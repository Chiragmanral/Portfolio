import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import notes from "../../Assets/Projects/notes.png";
import url from "../../Assets/Projects/url.png";
import task from "../../Assets/Projects/task-management.png";
import timer from "../../Assets/Projects/timer.png";

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
              imgPath={notes}
              isBlog={false}
              title="Safe Notes"
              description="Secure note-sharing app with JWT authentication and refresh token support using Angular, Node.js, Express, and MongoDB."
              ghLink="https://github.com/Chiragmanral/SAFE-NOTES"
              demoLink="https://www.chirags.tech/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={url}
              isBlog={false}
              title="URL Shortener"
              description="A full-stack URL shortener application built using Angular, Node.js, Express, and MongoDB. It allows users to shorten long URLs, track clicks, and manage links with authentication and JWT token-based access."
              ghLink="https://github.com/Chiragmanral/SHORTEN-URL"
              demoLink="https://www.chirag.engineer/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Management App"
              description="Task manager based on Angular for creating, updating and organizing tasks of different users. Also have a feature for tracking the status of tasks with a clean responsive dashboard UI."
              ghLink="https://github.com/Chiragmanral/Task-Management-App"
              demoLink="https://task-management-app-zeta-woad.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timer}
              isBlog={false}
              title="Timer"
              description="A sleek and responsive vanilla JavaScript timer app featuring dual modes for count-up and count-down functionality. Built using HTML, CSS, and JavaScript, it offers intuitive controls for start, pause, and reset actions with smooth, real-time updates. Showcases clean UI design, precise timing logic with setInterval(), and efficient DOM manipulation — all without external libraries."
              ghLink="https://github.com/Chiragmanral/Timer---CountUp-and-CountDown"
              demoLink="https://timer-count-up-and-count-down.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
