import loadingimg from "../../icon/loading.png";
const DataShow=(props)=>{
    return (
        <>
        {!props.isloading&&!props.error&&<div className="white-Box white-container"> <div className="data-box">
                   
                     { <span><span>cases :</span> <span>{props.ObtainedData["cases"]}</span><br></br><br></br></span>   }        
                     { <span><span>deaths :</span> <span>{props.ObtainedData["deaths"]}</span><br></br><br></br></span> }  
                { <span>  <span>active :</span> <span>{props.ObtainedData["active"]}</span><br></br><br></br> </span>}  
                { <span><span>recovered :</span> <span>{props.ObtainedData["recovered"]}</span><br></br><br></br></span>}         </div>
                    <div className="data-box">
                   { <span>  <span>Todaycases :</span> <span>{props.ObtainedData["todayCases"]}</span><br></br><br></br></span>}             
      { <span><span>Todaydeaths :</span> <span>{props.ObtainedData["todayDeaths"]}</span><br></br><br></br></span>}
                  
                   { <span><span>critical :</span> <span>{props.ObtainedData["critical"]}</span><br></br><br></br></span>    }         
                     </div> </div> }
                  {props.isloading&&!props.error&&<div className="white-Box white-container loading-container" ><h3>loading</h3><img id="loading-img" alt="loading" src={loadingimg}></img> </div>}
                  {!props.isloading&&props.error!==false&&<div className="white-Box white-container" ><h3>{props.error}</h3> </div>}
        </>
    );
}
export default DataShow;