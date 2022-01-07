import React from 'react';
import {
    RadialBarChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    RadialBar
} from 'recharts';

const ChartRadialBar = (props) => {


    return (
        <>
            <h1 className="text-heading">
                Radial Bar Chart Using Rechart
            </h1>
            <ResponsiveContainer width="80%" aspect={3}>

                <RadialBarChart data={props.chartdata.data} width={730} height={250} innerRadius="10%" outerRadius="80%" startAngle={180} endAngle={0}>

                    <Tooltip />

                    <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey={props.chartdata.dataPlotterKey} />
                    <Legend layout="horizontal" verticalAlign="top" align="center" />

                </RadialBarChart>
            </ResponsiveContainer>
        </>
    );
}

export default ChartRadialBar