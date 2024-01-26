import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function About() {
  return (
    <section className="about" id="about">
      <Container>
        <Row className=" d-flex justify-content--center m-4 title">
          <h1>About Me</h1>
        </Row>
        <Row className="d-flex justify-content-center   ">
          <Col md={4} className="d-flex justify-content-start">
            {" "}
            <p>
              FullName: <span>Radhia Rahmani </span>
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center  ">
          <Col md={4} className="d-flex justify-content-start">
            {" "}
            <p>
              Email:<span>radhiarahmani.info@gmail.com</span>{" "}
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center ">
          <Col md={4} className="d-flex justify-content-start">
            {" "}
            <p>
              Diploma: <span>Computer Engineer </span>
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center ">
          <Col md={4} className="d-flex justify-content-start">
            {" "}
            <p>
              Phone Number:<span>+21654227098 </span>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
