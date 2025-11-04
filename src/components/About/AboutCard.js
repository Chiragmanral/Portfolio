import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Chirag Singh Manral</span>{" "}
            from <span className="purple">Uttarakhand, India</span>.
            <br />
            <br />
            I’m a passionate <span className="purple">Full Stack Developer</span> who loves
            building secure, scalable, and impactful web applications.
            <br />
            <br />
            I’ve completed my <span className="purple">Software Development Internship</span> at{" "}
            <span className="purple">Compro Technologies</span>, where I worked on real-world projects
            involving modern web technologies and collaborative product development.
            <br />
            <br />I hold a Bachelor of Technology in{" "}
            <span className="purple">Computer Science and Engineering</span> from{" "}
            <span className="purple">Bhagwan Parshuram Institute and Technology (GGSIPU)</span>.
            <br />
            <br />
            I love exploring new technologies, writing clean code, and solving problems that make a difference.
            When I’m not coding, you’ll probably find me:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket 🏏
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out 💪
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about tech & startups 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chirag</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
