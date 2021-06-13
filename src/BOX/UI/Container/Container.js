import "./Container.css";
import Chart from "../chart/Chart";
import React ,{useState,useEffect} from "react";



const Container=()=>{
    
    const [filter,setFilter]=useState("World");
    const [ObtainedData,setObtainedData]=useState({cases:0,deaths:0,recovered:0,active:0,todayCases:0,todayDeaths:0,critical:0,bool:false});
    
    const filterChangeHandler=(e)=>{
        setFilter(e.target.value);
    }
    const getdata=async ()=>{
        const response=await fetch("https://coronavirus-19-api.herokuapp.com/countries");
        const data=await response.json();
        
        // console.log(data);
       
       let filtereddata=data;
       let obj={cases:0,deaths:0,recovered:0,active:0,todayCases:0,todayDeaths:0,critical:0,bool:false};
       for(let index in filtereddata){
           if(filtereddata[index].country!==filter){
              
               filtereddata.splice(index,1);
              
           }else{ console.log(filtereddata[index]); 
               obj={cases:filtereddata[index].cases,deaths:filtereddata[index]["deaths"],recovered:filtereddata[index]["recovered"],active:filtereddata[index]["active"],todayCases:filtereddata[index]["todayCases"],
               todayDeaths:filtereddata[index]["todayDeaths"],critical:filtereddata[index]["critical"],bool:true};

           }
       }
      
       setObtainedData(obj);

     }
    useEffect( ()=>{
        console.log("http");
       
         getdata();
    },[filter])
    useEffect(()=>{
        getdata();
    },[])
    let data=[{
        name:"active",
        value:ObtainedData["active"],
        fill:"#2D2D2D"
    
      },
      {
        name:"recovered",
        value:ObtainedData["recovered"],
        fill:"#00AAF2"
    
      },
      {
        name:"deaths",
        value:ObtainedData["deaths"],
        fill:"#8F44FD"
    
      }]
    return(
        <div className="Container">
            <div className="white-Box">
            <div className="Container content-box">
                <Chart 
                 data={data}
                 dataKey="value">
                 </Chart>
                 </div>
            <div className="Container content-box">
                <div id="dropbox-container">
                <h1 id="filter-text">Filter</h1>
                    <select id="select" onChange={filterChangeHandler}>
                        <option value="World">Countaries</option>
                        <option value="India">India</option>
                        <option value="Russia">Russia</option>
                        <option value="Germany">Germany</option>
                    </select>
                </div>
                <div className="white-Box white-container" >
                    <div className="data-box">
                     { <span><span>cases :</span> <span>{ObtainedData["cases"]}</span><br></br><br></br></span>   }        
                     { <span><span>deaths :</span> <span>{ObtainedData["deaths"]}</span><br></br><br></br></span> }  
                  { <span><span>recovered :</span> <span>{ObtainedData["recovered"]}</span><br></br><br></br></span>}     
                { <span>  <span>active :</span> <span>{ObtainedData["active"]}</span><br></br><br></br> </span>}           </div>
                    <div className="data-box">
                   { <span>  <span>Todaycases :</span> <span>{ObtainedData["todayCases"]}</span><br></br><br></br></span>}             
      { <span><span>Todaydeaths :</span> <span>{ObtainedData["todayDeaths"]}</span><br></br><br></br></span>}
                  
                   { <span><span>critical :</span> <span>{ObtainedData["critical"]}</span><br></br><br></br></span>    }          </div>
                </div>

            </div>

            </div>
        </div>
    );
}

export default Container;