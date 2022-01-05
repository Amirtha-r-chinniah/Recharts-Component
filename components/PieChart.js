import React from 'react';
import {
	PieChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Pie
} from 'recharts';

const ChartPie= (props) =>{
    

    return(
		<>
            <h1 className="text-heading">
                Pie Chart Using Rechart
            </h1>
             <ResponsiveContainer width="100%" aspect={3}>
                 <PieChart margin={{ right: 300 }}>
                    
                    <Legend />
                    <Tooltip />
                    
                <Pie  data={props.chartdata.data} dataKey={props.chartdata.dataPlotterKey} fill={props.chartdata.piecolor} outerRadius={props.chartdata.outerRadius} />
  
                    
                </PieChart> 
            </ResponsiveContainer>  
        </>
	);
}

export default ChartPie