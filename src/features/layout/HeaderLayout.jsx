import ButtonBox from "../../components/buttons/Buttons";
import { HiBell } from "react-icons/hi";
import { MdSearch } from "react-icons/md";
import { firstLetterUpperCase } from "../../helpers/JavascriptMethods";
function HeaderLayout() {
  const pathName = window.location.pathname;
  return (
    <div className="header-section">
      <div className="fw-bold grey-text">
        {firstLetterUpperCase(pathName.split("/")[1])}
      </div>
      <div className="d-flex align-items-center gap-2">
        <MdSearch size={24} />
        <span>
          <input
            type="text"
            placeholder="Search Projects, Tasks..."
            className="input-search"
          />
        </span>
      </div>
      <div className="d-flex gap-3 align-items-center justify-content-center">
        <div className="cursor">
          <HiBell size={24} />
        </div>
        {pathName=="/dashboard" && <>
        <ButtonBox className="btn-blue">+ New Task</ButtonBox>
        </> }
      </div>
    </div>
  );
}

export default HeaderLayout;
