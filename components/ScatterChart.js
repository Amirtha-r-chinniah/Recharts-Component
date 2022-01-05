import React from 'react';
import {
	ScatterChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';

const ChartScatter= (props) =>{
    return(
		<>
            <h1 className="text-heading">
                Scatter Chart Using Rechart
            </h1>
             <ResponsiveContainer width="100%" aspect={3}>
                 <ScatterChart  margin={{ right: 300 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    
                    <XAxis type="number" dataKey={props.chartdata.scatterKeyXAxis} />
                    <YAxis type="number" dataKey={props.chartdata.scatterKeyYAxis} />
                    <Scatter data={props.chartdata.data} fill={props.chartdata.fillColor} />
                    
                </ScatterChart> 
            </ResponsiveContainer>  
        </>
	);
}

export default ChartScatter