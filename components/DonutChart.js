import React from 'react';
import {
	PieChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Pie
} from 'recharts';

const ChartDonut= (props) =>{
    

    return(
		<>
            <h1 className="text-heading">
                No of users accessing different surveys
            </h1>
             <ResponsiveContainer width="100%" aspect={2}>
                 <PieChart >
                    
                    <Legend  layout="horizontal" verticalAlign="top" align="center"  />
                    <Tooltip />
                    
                <Pie  data={props.chartdata.data} label dataKey={props.chartdata.dataPlotterKey}  outerRadius={250} innerRadius={150} />
  
                    
                </PieChart> 
            </ResponsiveContainer>  
        </>
	);
}

export default ChartDonut