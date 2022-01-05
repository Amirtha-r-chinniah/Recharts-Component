import React from 'react';
import {
	LineChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';

const ChartLine= (props) =>{
    //Logic for no of channel lines creation
    var channelIds = [];
    const noOfLines = props.chartdata.lines.length;
    for(var count=0;count<noOfLines;count++){
       channelIds.push(count.toString());
    }

    return(
		<>
            <h1 className="text-heading">
                Line Chart Using Rechart
            </h1>
             <ResponsiveContainer width="100%" aspect={3}>
                 <LineChart data={props.chartdata.data} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey={props.chartdata.xAxisKey}
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    
                    {
             channelIds.map((id) => {
                 console.log(id);
                 console.log(props.chartdata.lines[id].lineKey);
                return (<Line  dataKey={props.chartdata.lines[id].lineKey} stroke={props.chartdata.lines[id].stroke} key={id} />)
            })
  }
                    
                </LineChart> 
            </ResponsiveContainer>  
        </>
	);
}

export default ChartLine