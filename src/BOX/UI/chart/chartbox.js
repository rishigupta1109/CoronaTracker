
import Chart from "./Chart";
const ChartBox=(props)=>{
    let chartdata=[{
        name:"active",
        value:props.active,
        fill:"#2D2D2D"
    
      },
      {
        name:"recovered",
        value:props.recovered,
        fill:"#00AAF2"
    
      },
      {
        name:"deaths",
        value:props.deaths,
        fill:"#8F44FD"
    
      },
      {
        name:"cases",
        value:props.cases,
        fill:"#00FF00"
    
      }]

    return (<>
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
    </>

    );
}
export default ChartBox;