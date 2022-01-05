import React from 'react';
import {
	BarChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';

const ChartBar= (props) =>{
    //Logic for no of channel lines creation
    var channelIds = [];
    const noOfBars = props.chartdata.bars.length;
    for(var count=0;count<noOfBars;count++){
       channelIds.push(count.toString());
    }

    return(
		<>
            <h1 className="text-heading">
                Bar Chart Using Rechart
            </h1>
             <ResponsiveContainer width="100%" aspect={3}>
                 <BarChart data={props.chartdata.data} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey={props.chartdata.xAxisKey}
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    
                    {
             channelIds.map((id) => {
                return (<Bar  dataKey={props.chartdata.bars[id].barKey} fill={props.chartdata.bars[id].stroke} key={id} />)
            })
  }
                    
                </BarChart> 
            </ResponsiveContainer>  
        </>
	);
}

export default ChartBar