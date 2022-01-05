import React from 'react';
import {
	RadialBarChart,
	ResponsiveContainer,
    Legend,
	Tooltip,
	RadialBar
} from 'recharts';

const ChartRadialBar= (props) =>{
    

    return(
		<>
            <h1 className="text-heading">
                Radial Bar Chart Using Rechart
            </h1>
             <ResponsiveContainer width="100%" aspect={3}>
                 <RadialBarChart  data={props.chartdata.data} margin={{ right: 300 }}>
                    
                    <Legend />
                    <Tooltip />
                    
                <RadialBar  dataKey={props.chartdata.dataPlotterKey} />
  
                    
                </RadialBarChart> 
            </ResponsiveContainer>  
        </>
	);
}

export default ChartRadialBar