import React from 'react';
import {
	AreaChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Area,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';

const ChartArea= (props) =>{
    //Logic for no of channel lines creation
    var channelIds = [];
    const noOfAreas = props.chartdata.Areas.length;
    for(var count=0;count<noOfAreas;count++){
       channelIds.push(count.toString());
    }
    console.log(props.chartdata.data)
    return(
		<>
            <h1 className="text-heading">
                Area Chart Using Rechart
            </h1>
             <ResponsiveContainer width="100%" aspect={3}>
                 <AreaChart data={props.chartdata.data} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey={props.chartdata.xAxisKey}
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    
                    {
             channelIds.map((id) => {
                return (<Area  dataKey={props.chartdata.Areas[id].AreaKey} stroke={props.chartdata.Areas[id].stroke} key={id} />)
            })
  }
                    
                </AreaChart> 
            </ResponsiveContainer>  
        </>
	);
}

export default ChartArea