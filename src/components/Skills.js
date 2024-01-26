import React from "react";
import { Card, Row, Image, Col, Container } from "react-bootstrap";
import "./style.css";
import reactImage from "../assets/images/reactjs.png";
import cssImage from "../assets/images/css.png";
import bootstrapImage from "../assets/images/bootstrap.png";
import html5Image from "../assets/images/html5.png";
import javascriptImage from "../assets/images/javascript.png";
import nodejsImage from "../assets/images/nodejs.png";
import phpImage from "../assets/images/php.png";
function Skills() {
  const data = [
    { skill: javascriptImage },
    { skill: reactImage },
    { skill: html5Image },
    { skill: nodejsImage },
    { skill: cssImage },
    { skill: bootstrapImage },
    { skill: phpImage },
  ];
  return (
    <section className="skills" id="skills">
      <Container>
        {" "}
        <Row className="d-flex justify-content-center title">
          <h1>My Skills</h1>
        </Row>
        <Row
          className=" d-flex justify-content-center "
          style={{ marginTop: 40 }}
        >
          {data.map((element) => {
            return (
              <Col md={2} className=" shadow image">
                <Image width={120} height={120} src={element.skill}></Image>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
