import { useState } from "react";
import ProjectModal from "./ProjectModal";
import ProjectCards from "./ProjectCards";
import "./Project.scss";
import ButtonBox from "../../components/buttons/Buttons";
import HOC from "../../utils/hoc/HOC";
function Projects(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="project-section">
      <div className="project-header-section">
        <div />
        <div>
          <ButtonBox className="btn-blue mt-3" onClick={handleShow}>
            + New Project
          </ButtonBox>
        </div>
      </div>

      <div className="fw-bold mb-4">Project Lists ({props?.state?.project.projectArray?.length})</div>
      <div>
        <ProjectCards data={props.state} />
      </div>
      <ProjectModal show={show} handleClose={handleClose} />
    </div>
  );
}

export default HOC(Projects);
