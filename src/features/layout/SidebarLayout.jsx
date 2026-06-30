import PMSContant from "../../constants/Routing-PMS-constant";
import { upperCase } from "../../helpers/JavascriptMethods";
import HOC from "../../utils/hoc/HOC";

function SidebarLayout(props) {
  const sidebarRoutes = PMSContant.filter((item) => item?.sidebar);
  const pathName=window.location.pathname;

const handlePathChange=(params)=>{
  props.navigate(params);
}  
  return (
    <div className="p-2 mt-5">
      <div>
        <label className="grey-text fw-medium">{upperCase("Workspace")}</label>
      </div>
      {sidebarRoutes.slice(0,4).map((item) => {
         const ActiveIcon = item.iconActive;
        const InactiveIcon = item.iconInactive;
        return (<>
           <div key={item.id} className={`mt-2 mb-2 ${pathName===item.path?"active-icon":"inactive-icon"}`}
           onClick={()=>handlePathChange(item.path)}
           >
          {pathName==item?.path?<>
          <ActiveIcon/>
          </>:<>
          <InactiveIcon/>
          
          </>}
          {item.name}
        </div>
        </>)
     
})}

      <div className=" grey-text fw-medium mt-2 mb-1">
        <label>{upperCase("team")}</label>
      </div>
      <div>
        {sidebarRoutes.slice(4).map((item) => {
             const ActiveIcon = item.iconActive;
        const InactiveIcon = item.iconInactive;
          return(
            <>
           <div key={item.id} className={`mt-2 mb-2 ${pathName===item.path?"active-icon":"inactive-icon"}`}
           onClick={()=>handlePathChange(item.path)}
           >

             {pathName==item?.path?<>
          <ActiveIcon/>
          
          </>:<>
          <InactiveIcon/>
          
          </>}
          {item.name}
          </div>
            </>
          )
        }
       
        )}
      </div>
    </div>
  );
}

export default HOC(SidebarLayout);
