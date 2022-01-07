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
                No of users accessing different surveys
            </h1>
             <ResponsiveContainer width="100%" aspect={3}>
                 <PieChart >
                    
                    <Legend  layout="vertical" verticalAlign="top" align="right"  />
                    <Tooltip />
                    
                <Pie  data={props.chartdata.data} label dataKey={props.chartdata.dataPlotterKey}  outerRadius={props.chartdata.outerRadius} />
  
                    
                </PieChart> 
            </ResponsiveContainer>  
        </>
	);
}

export default ChartPie