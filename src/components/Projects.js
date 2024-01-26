import React from "react";
import { Row, Card, Image, Button, Container, Col } from "react-bootstrap";
import TaskForge from "../assets/images/taskForge.png";
import debugMaster from "../assets/images/debugMaster.png";
import LetsTalk from "../assets/images/letstalk.png";
import Instagram from "../assets/images/instagram.jpg";
import { useState } from "react";
import Project from "./Project";
import "./style.css";
function Projects() {
  const [showModal, setshowModal] = useState(false);
  const [project, setproject] = useState({});
  const handleShowModal = (project) => {
    setproject(project);
    setshowModal(true);
  };
  const projects = [
    {
      id: 1,
      projectName: "Task Manager",
      description:
        "Task Manager is a powerful task management application designed for efficient team collaboration. Admins can effortlessly manage employees, including adding and removing team members. The app enables project creation, task assignment for each project, and easy allocation of employees to specific projects. With features like project updates and deletions, Task Manager  provide  a more organized and productive work environment ",
      url: "https://github.com/radhia01/TaskForgeAPP",
      technologies:
        "ReactJs,NodeJs,ExpressJs,HTML5,react-bootstrap,react-toastify,css,axios,reduxjs/toolkit,mui/icons-material",
      other:
        "API REST,Authentication with JWT,Private Routes,Deploiement with Vercel",
      image: TaskForge,
    },
    {
      id: 2,
      projectName: "DebuggingMaster",
      description:
        "Debugging  Master is a programming community app where users can post coding issues and their solutions, or search for solutions to specific programming problems. It's a collaborative platform that fosters knowledge-sharing and problem-solving within the programming community. Whether you're encountering a coding challenge or looking to help others with their code",
      technologies:
        "ReactJs,NodeJs,ExpressJs,HTML5,ReactBoostrap,CSS,redux,redux-thunk,mui/icons-material,react-toastify",
      other:
        "API REST,Authentication with JWT,Private Routes,Deploiement with Vercel",
      link: "https://debugging-masters-client.vercel.app ",
      image: debugMaster,
    },
    {
      id: 3,
      projectName: "Let's Talk",
      description:
        "Let's Talk is a user-friendly chat app for effortless communication. Sign up, connect with friends, join groups, and manage your profile easily. Enhance your social experience with features like adding friends, updating profiles, and accepting invites. Simplify your connections with Let's Talk ",
      url: "https://github.com/radhia01/letsTalkApp",
      technologies:
        "API REST ,ReactJs,NodeJs,ExpressJs,HTML5,react-bootstrap,css,react-icons,redux,redux-thunk,axios",
      other:
        "API REST,Authentication with JWT,Private Routes,Deploiement with Vercel",
      link: "https://let-s-talk-frontend-v1.vercel.app",
      image: LetsTalk,
    },
    {
      id: 4,
      projectName: "Instagram Clone",
      description:
        "Instagram Clone is a social media application inspired by Instagram, offering a familiar platform for sharing photos and connecting with friends. Users can upload pictures, follow others, and engage with a visually appealing and user-friendly interface. Enjoy the essence of Instagram with our seamless clone, designed for capturing and sharing moments with your online community",
      url: "https://github.com/radhia01/InstagramCloneApp",
      technologies:
        "API REST,ReactJs,NodeJs,ExpressJs,html5,react-bootstrap,css,redux,react-redux,redux-thunk,font-awesome,axios",
      other:
        "API REST,Authentication with JWT,Private Routes,Deploiement with Vercel",
      link: "https://instagram-clone-frontend-v1.vercel.app",
      image: Instagram,
    },
  ];
  return (
    <section clbassName="projects" id="projects">
      <Container>
        {" "}
        <Row className="d-flex justify-content-center title text-white">
          <h1>My Projects</h1>
        </Row>
        <Row
          className="d-flex justify-content-center "
          style={{ marginTop: 100 }}
        >
          {projects.map((element) => {
            return (
              <Col md={3}>
                <Card key={element.id} className="card">
                  <Card.Body>
                    <div className="title1">{element.projectName}</div>
                    <div className="image">
                      <Image width={180} src={element.image}></Image>
                    </div>
                    <br></br>
                    <Button
                      className="btn"
                      onClick={() => handleShowModal(element)}
                    >
                      {" "}
                      Show details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {showModal && (
        <Project
          data={project}
          setshowModal={setshowModal}
          showModal={showModal}
        />
      )}
    </section>
  );
}

export default Projects;
