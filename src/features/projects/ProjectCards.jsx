import images from "../../constants/images-constant";
import {
  MdOutlineEdit,
  MdOutlineDelete,
  MdOutlineVisibility,
} from "react-icons/md";
function ProjectCards({data}) {
  return <div className="common-cards">

    {data?.project?.projectArray?.length===0 && <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      width:"100%",
      height:"100vh"
    }}>No Data Found</div>}
    {data?.project?.projectArray.map((item,i)=>{
      return(
        <div className="pro-card">
          <div style={{width:"30px",height:"30px",top:"-14px",background:item?.color,position:"absolute",right:"-4px",borderRadius:"50%"}}>
          </div>
          <div>
            {item?.projectName}
          </div>
          <div>
            <span className="grey-text">Lead : </span><label>{item?.projectLead}</label>
          </div>
          <div style={{fontSize:"14px",color:"grey"}}>
            {item?.description}
          </div>
          <div className="d-flex mt-2 mb-2">

            {item?.users?.length===10 ?<>
             {Array(10)?.fill("")?.map((items,i)=>{
              const imagesNumber=i%2==0?i:i;
              return(
                <div>
                  <img src={images[imagesNumber]}
                  className="user-img"
                  />
                </div>
              )
            })}+
            </>:<>
            {Array(item?.users?.length)?.fill("")?.map((items,i)=>{
              const imagesNumber=i%2==0?i:i;
              return(
                <div>
                  <img src={images[imagesNumber]}
                  className="user-img"
                  />
                </div>
              )
            })}
            </>}
           
          </div>

           <div
      style={{
        display: "flex",
        gap: "10px",
        cursor: "pointer",
      }}

      className="mb-2 mt-3"
    >
      <MdOutlineVisibility  color="#2563EB"
      style={{
        width:"25px",
        height:"25px",
        borderRadius:"50%",
        fontSize:"12px",
        padding:"2px",
        border:"1px solid #d3d3d3"
      }}
      />
      <MdOutlineEdit  color="#16A34A" 
       style={{
        width:"25px",
        height:"25px",
        borderRadius:"50%",
        fontSize:"12px",
        padding:"2px",
        border:"1px solid #d3d3d3"
      }}
      />
      <MdOutlineDelete 
      
       style={{
        width:"25px",
        height:"25px",
        borderRadius:"50%",
        fontSize:"12px",
        padding:"2px",
        border:"1px solid #d3d3d3"
      }}color="#DC2626" />
    </div>
        </div>
      )
    })}


  </div>;
}

export default ProjectCards;
