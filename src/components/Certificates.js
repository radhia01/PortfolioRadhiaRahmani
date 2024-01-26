import React from "react";
import { Row, Card, Col, Image, Container } from "react-bootstrap";
import gomycodeImgae from "../assets/images/gomycode.png";
import udemyImage from "../assets/images/udemy.jpg";
import certifImage from "../assets/images/certif.jpg";
import gecImage from "../assets/images/gec.png";
import { Link } from "react-router-dom";
function Certificates() {
  const data = [
    {
      title: "Introduction to Nodejs ",
      link: "https://learn.gomycode.co/credentials/d3740797-fcfb-49da-84af-2a2e3c690e17/A/1",
      subtitle: "GoMyCode",
      date: "June 28, 2022",
      image: gomycodeImgae,
    },
    {
      title: "React de A à Z ",
      link: "https://www.udemy.com/certificate/UC-1f93b786-113d-446f-9457-55123d8ec8ce/",
      subtitle: "Udemy",
      date: "February 22, 2022",
      image: udemyImage,
    },
    {
      title: "Introduction to React.Js  ",
      link: "https://learn.gomycode.co/credentials/b215d6d2-39d5-46d2-86e3-3a04228112d6/A/1",
      subtitle: "GoMyCode",
      date: "Feb 16, 2022",
      image: gomycodeImgae,
    },
    {
      title: "Microservices with Node JS  and React",
      link: "https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/18504136?start=0#overview",
      subtitle: "GoMyCode",
      date: "in progress",
      image: udemyImage,
    },
    {
      title: "Business Intelligence :MSBI ",
      link: "https://res.cloudinary.com/db8b6npfz/image/upload/v1706027127/msbicertif_svo8dc.jpg",
      subtitle: "Global Engineering Center",
      date: "November 2018",
      image: gecImage,
    },
    {
      title: "Microsoft Power Bi",
      link: "https://res.cloudinary.com/db8b6npfz/image/upload/v1706027084/certif1_powerbi_yrlkdp.jpg",
      subtitle: "Global Engineering Center",
      date: "January 2020",
      image: gecImage,
    },
  ];
  return (
    <div className="certificates" id="certificates">
      {" "}
      <Container>
        <Row className="d-flex justify-content-center title  ">
          <h1>My Certificates</h1>{" "}
        </Row>
        <Row
          className="d-flex justify-content-center "
          style={{ marginTop: 40 }}
        >
          <Col md={8} className="d-flex  ">
            {" "}
            <Row className="justify-content-center">
              {" "}
              {data.map((element) => {
                return (
                  <Col md={5} className=" shadow col">
                    <div className="title1">
                      <Link className="link" to={element.link}>
                        {element.title}{" "}
                      </Link>

                      <Image
                        className="image"
                        width={65}
                        height={60}
                        src={element.image}
                      ></Image>
                    </div>
                    <div className="achievment">{element.date}</div>
                  </Col>
                );
              })}
            </Row>
          </Col>

          <Col
            className="d-flex justify-content-center align-items-center   "
            md={4}
          >
            <Image
              height={300}
              width={350}
              src={certifImage}
              style={{ marginLeft: 20 }}
            ></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Certificates;
