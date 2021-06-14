import {PieChart,Pie,Cell,ResponsiveContainer} from "recharts";

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