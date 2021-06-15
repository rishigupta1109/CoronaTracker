
import Chart from "./Chart";
const ChartBox=(props)=>{
    let chartdata=[{
        name:"active",
        value:props.active,
        fill:"#f2ec3a"
    
      },
      {
        name:"recovered",
        value:props.recovered,
        fill:"#e3526a"
    
      },
      {
        name:"deaths",
        value:props.deaths,
        fill:"#8F44FD"
    
      }]

    return (<>
    <div id="chart-container"> <Chart 
    data={chartdata}
    dataKey="value">
    </Chart></div>
  <div className="white-Box white-container color-conatiner">
      <div style={{backgroundColor:"#f2ec3a",height:"10px",width:"10px",borderRadius:"100%",margin:"15px"}}/><div>active</div>
      <div style={{backgroundColor:"#e3526a",height:"10px",width:"10px",borderRadius:"100%",margin:"15px"}}/><div>recovered</div>
      <div style={{backgroundColor:"#8F44FD",height:"10px",width:"10px",borderRadius:"100%",margin:"15px"}}/><div>deaths</div>
      
  </div>
    </>

    );
}
export default ChartBox;