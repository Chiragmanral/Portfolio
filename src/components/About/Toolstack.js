import { Col, Row } from "react-bootstrap";
import { SiUbuntu, SiBrave } from "react-icons/si";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu fontSize={"24px"} />
        <div className="tech-icons-text">Ubuntu OS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBrave fontSize={"24px"} />
        <div className="tech-icons-text">Brave</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
