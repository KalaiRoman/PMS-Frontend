import { Outlet } from "react-router-dom";
import HeaderLayout from "../features/layout/HeaderLayout";
import SidebarLayout from "../features/layout/SidebarLayout";

function ProtectedRouter() {
  return <>
  <div className="layout-main">
    <div className="layout-inside">
      <div className="layout-left">
        <SidebarLayout/>
      </div>
      <div className="layout-right">
        <div>
          <HeaderLayout/>
        </div>
        <div className="p-2">
          <Outlet/>
        </div>
      </div>

    </div>
  </div>
  </>;
}

export default ProtectedRouter;
