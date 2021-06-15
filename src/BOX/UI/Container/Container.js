import "./Container.css";
import ChartBox from "../chart/chartbox";
import React ,{useState,useEffect,useCallback} from "react";
import Countrylist from "../../countrylist/countrylist";
import DataShow from "./Datashow";



const Container=()=>{
    
    const [filter,setFilter]=useState("World");
    const [ObtainedData,setObtainedData]=useState({cases:0,deaths:0,recovered:0,active:0,todayCases:0,todayDeaths:0,critical:0,bool:false});
    const [data,setdata]=useState([]);
    const [isloading ,setisloading]=useState(false);
    const [error,seterror]=useState(false);
    const [filteredData,setfilteredData]=useState(data);
    const filterChangeHandler=(e)=>{
      
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
    const handlefilter=useCallback(
        (country)=>{
            let filtereddata=data;
            let obj={cases:0,deaths:0,recovered:0,active:0,todayCases:0,todayDeaths:0,critical:0,bool:false};
            for(let index in filtereddata){
                if(filtereddata[index].country!==country){
                   
                   
                   
                }else{ 
                    obj={country:filtereddata[index].country,cases:filtereddata[index].cases,deaths:filtereddata[index]["deaths"],recovered:filtereddata[index]["recovered"],active:filtereddata[index]["active"],todayCases:filtereddata[index]["todayCases"],
                    todayDeaths:filtereddata[index]["todayDeaths"],critical:filtereddata[index]["critical"],bool:true};
     
                }
            }
           
            setObtainedData(obj);
        },
        [data],
    )
    const getdata=async ()=>{
       try {setisloading(true);
        const response=await fetch("https://coronavirus-19-api.herokuapp.com/countries");
        if(!response.ok){
            throw new Error("something went wrong");
        }
        const data=await response.json();
        setisloading(false);
        setdata(data);
        setfilteredData(data);}catch(error){
            seterror(error.message);
            setisloading(false);
        }
         
     }
    
    useEffect(()=>{
        getdata();
       
    },[]);
    useEffect(()=>{
        handlefilter("World");
       
    },[handlefilter]);
    
  
    const itemClickHandler=(country)=>{
        setFilter(country);
        handlefilter(country);
       
    }
    
    return(
        <div className="Container">
            <div className="white-Box">
            <div className="Container content-box">
            <ChartBox active={ObtainedData["active"]} recovered={ObtainedData["recovered"]} deaths={ObtainedData["deaths"]} cases={ObtainedData["cases"] }></ChartBox>
                 <h1 id="heading">{ObtainedData["country"]}</h1><br></br>
                 
                 <DataShow ObtainedData={ObtainedData} error={error} isloading={isloading}></DataShow>
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