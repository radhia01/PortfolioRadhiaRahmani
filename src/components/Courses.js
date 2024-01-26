import React from "react";
import { Row, Card, Col, Image, Container } from "react-bootstrap";
import coursesImage from "../assets/images/courses.jpg";
import udemyImage from "../assets/images/udemy.jpg";
import pluralsightImage from "../assets/images/pluralsight.jpg";
import { Link } from "react-router-dom";
function Courses() {
  const data = [
    {
      title: "Building a REST API in JavaScript with Express",
      subtitle: "GoMyCode",
      date: "Aug, 2023",
      image: pluralsightImage,
    },
    {
      title: "Calling APIs with React 17",
      link: "https://www.udemy.com/certificate/UC-1f93b786-113d-446f-9457-55123d8ec8ce/",
      subtitle: "Udemy",
      date: "Aug, 2023",
      image: pluralsightImage,
    },
    {
      title: "Getting Started with Swagger 2 Tools  ",
      link: "https://learn.gomycode.co/credentials/b215d6d2-39d5-46d2-86e3-3a04228112d6/A/1",
      subtitle: "GoMyCode",
      date: "Aug, 2023",
      image: pluralsightImage,
    },
  ];
  return (
    <section className="courses" id="courses">
      {" "}
      <Container>
        {" "}
        <Row className="d-flex justify-content-center text-white title">
          <h1>My Courses</h1>{" "}
        </Row>
        <Row
          className="d-flex justify-content-center mt-3"
          style={{ marginTop: 40 }}
        >
          <Col
            className="d-flex justify-content-center align-items-center   "
            md={4}
          >
            <Image
              height={300}
              width={350}
              src={coursesImage}
              style={{ marginLeft: 20 }}
            ></Image>
          </Col>
          <Col md={8} className=" d-flex justify-content-end  ">
            <Col md={10}>
              {" "}
              {data.map((element) => {
                return (
                  <Col md={10} className=" shadow col">
                    <div className="title1">
                      {element.title}
                      <Image
                        className="image"
                        width={100}
                        height={90}
                        src={element.image}
                      ></Image>
                    </div>
                    <div className="achievment">{element.date}</div>
                  </Col>
                );
              })}
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Courses;
