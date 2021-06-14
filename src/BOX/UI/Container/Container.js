import "./Container.css";
import Chart from "../chart/Chart";
import React ,{useState,useEffect} from "react";
import Countrylist from "../../countrylist/countrylist";



const Container=()=>{
    
    const [filter,setFilter]=useState("World");
    const [ObtainedData,setObtainedData]=useState({cases:0,deaths:0,recovered:0,active:0,todayCases:0,todayDeaths:0,critical:0,bool:false});
    const [data,setdata]=useState([]);
    const [filteredData,setfilteredData]=useState(data);
    const filterChangeHandler=(e)=>{
        // setFilter(e.target.value);
        let Data=[...data];
        console.log(e.target.value);
        let regex=new RegExp(`^${e.target.value}`,'i');
        console.log(regex);
        let array=[];
        for(let index in Data){

            if((Data[index].country).search(regex)!==(-1)){
                array=[...array,Data[index]]
            }
            
        
        }
        
        setfilteredData(array);


    }
    const handlefilter=(country)=>{
        let filtereddata=data;
        let obj={cases:0,deaths:0,recovered:0,active:0,todayCases:0,todayDeaths:0,critical:0,bool:false};
        for(let index in filtereddata){
            if(filtereddata[index].country!==country){
               
               
               
            }else{ console.log(filtereddata[index]); 
                obj={country:filtereddata[index].country,cases:filtereddata[index].cases,deaths:filtereddata[index]["deaths"],recovered:filtereddata[index]["recovered"],active:filtereddata[index]["active"],todayCases:filtereddata[index]["todayCases"],
                todayDeaths:filtereddata[index]["todayDeaths"],critical:filtereddata[index]["critical"],bool:true};
 
            }
        }
       
        setObtainedData(obj);
    }
    const getdata=async ()=>{
        const response=await fetch("https://coronavirus-19-api.herokuapp.com/countries");
        const data=await response.json();
        setdata(data);
        setfilteredData(data);
        
        
       
       

     }
    
    useEffect(()=>{
        getdata();
       
    },[]);
    useEffect(()=>{
        handlefilter("World");
       
    },[filteredData]);
    
  
    const itemClickHandler=(country)=>{
        setFilter(country);
        handlefilter(country);
       
    }
    let chartdata=[{
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
    
      },
      {
        name:"cases",
        value:ObtainedData["cases"],
        fill:"#00FF00"
    
      }]
    return(
        <div className="Container">
            <div className="white-Box">
            <div className="Container content-box">
            <div id="chart-container"> <Chart 
                 data={chartdata}
                 dataKey="value">
                 </Chart></div>
               <div className="white-Box white-container color-conatiner">
                   <div style={{backgroundColor:"#2D2D2D",height:"10px",width:"10px",borderRadius:"100%",margin:"5px"}}/><div>active</div>
                   <div style={{backgroundColor:"#00AAF2",height:"10px",width:"10px",borderRadius:"100%",margin:"5px"}}/><div>recovered</div>
                   <div style={{backgroundColor:"#8F44FD",height:"10px",width:"10px",borderRadius:"100%",margin:"5px"}}/><div>deaths</div>
                   <div style={{backgroundColor:"#00FF00",height:"10px",width:"10px",borderRadius:"100%",margin:"5px"}}/><div>cases</div>
               </div>
                 <h1 id="heading">{ObtainedData["country"]}</h1><br></br>
                 <div className="white-Box white-container" >
                    <div className="data-box">
                     {/* { <span> <h2>{ObtainedData["country"]}</h2><br></br><br></br></span>   }         */}
                     { <span><span>cases :</span> <span>{ObtainedData["cases"]}</span><br></br><br></br></span>   }        
                     { <span><span>deaths :</span> <span>{ObtainedData["deaths"]}</span><br></br><br></br></span> }  
                { <span>  <span>active :</span> <span>{ObtainedData["active"]}</span><br></br><br></br> </span>}           </div>
                    <div className="data-box">
                   { <span>  <span>Todaycases :</span> <span>{ObtainedData["todayCases"]}</span><br></br><br></br></span>}             
      { <span><span>Todaydeaths :</span> <span>{ObtainedData["todayDeaths"]}</span><br></br><br></br></span>}
                  
                   { <span><span>critical :</span> <span>{ObtainedData["critical"]}</span><br></br><br></br></span>    }         
                  { <span><span>recovered :</span> <span>{ObtainedData["recovered"]}</span><br></br><br></br></span>}    </div>  
                </div>
                 </div>
            <div className="Container content-box Countrylist">
                <div id="dropbox-container">
                <h1 id="filter-text">Search</h1>
                <input type="search" id="select" onChange={filterChangeHandler}></input>
                   
                </div>
                    <Countrylist itemclicked={itemClickHandler} filter={filter} data={filteredData}></Countrylist>
               

            </div>

            </div>
        </div>
    );
}

export default Container;