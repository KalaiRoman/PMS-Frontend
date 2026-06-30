import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProjectForm from "./ProjectForm";
function ProjectModal({ show, handleClose }) {
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProjectForm  handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProjectModal;
