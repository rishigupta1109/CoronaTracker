import {PieChart,Pie,Cell,ResponsiveContainer} from "recharts";







  /* <Chart 
  data={data}
  dataKey="value">

  </Chart> */


  
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
const Chart=(props)=>{

    return(
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                 data={props.data}
                dataKey={props.dataKey}
                startAngle={90}
                endAngle={450}
                paddingAngle={null}
                innerRadius={null}
                
                >
                    {props.data.map(entry=>{
                        return (<Cell
                        key={entry.name}
                        fill={entry.fill}
                        stroke={0}
                        ></Cell>)
                    })}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default Chart;