import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
function Project({ data, setshowModal, showModal }) {
  const closeModal = () => {
    setshowModal(false);
  };
  console.log(data);

  return (
    <div className="project">
      <div className="modal shadow">
        <Button variant="primary" onClick={closeModal}></Button>

        <Modal
          show={showModal}
          onHide={closeModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title> {data && data.projectName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="">
              <div className="label">
                <Form.Label>Description</Form.Label>{" "}
              </div>

              <div className="text">
                {" "}
                <Form.Text>{data.description}</Form.Text>
              </div>
            </div>
            <div className="mt-3">
              {" "}
              <div className="label">
                <Form.Label>Technologies</Form.Label>{" "}
              </div>
              <div className="text">
                {" "}
                <Form.Text>{data.technologies}</Form.Text>
              </div>
            </div>
            <div className="mt-3">
              {" "}
              <div className="label">
                <Form.Label>Other</Form.Label>{" "}
              </div>
              <div className="text">
                {" "}
                <Form.Text>{data.other}</Form.Text>
              </div>
            </div>
            <div className="mt-3">
              {" "}
              <div className="label">
                <Form.Label>Deployed URL</Form.Label>{" "}
                <Link style={{ marginLeft: 20 }} to={data.link}>
                  here
                </Link>
              </div>
            </div>
            <div className="mt-3">
              <div className="link">
                {" "}
                Github Link<br></br>
                <Link style={{ marginLeft: 20 }} to={data.url}>
                  <GitHubIcon />
                </Link>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="closebtn"
              onClick={closeModal}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Project;
