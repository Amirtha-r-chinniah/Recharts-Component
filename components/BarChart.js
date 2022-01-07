import React from 'react';
import {
    BarChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Bar,
    XAxis,
    YAxis
} from 'recharts';

const ChartBar = (props) => {
    //Logic for no of channel bars creation
    var channelIds = [];
    const noOfBars = props.chartdata.bars.length;
    for (var count = 0; count < noOfBars; count++) {
        channelIds.push(count.toString());
    }

    return (
        <>
            <h1 className="text-heading">
                Bar Chart Using Rechart
            </h1>
            <ResponsiveContainer width="80%" aspect={3}>
                <BarChart width={320} height={250}data={props.chartdata.data} >
                    <XAxis dataKey={props.chartdata.xAxisKey} />
                    <YAxis label={{ value: props.chartdata.yAxisLabel, angle: -90, position: 'insideLeft' }}></YAxis>
                    <Legend />
                    <Tooltip />

                    {
                        channelIds.map((id) => {
                            return (<Bar dataKey={props.chartdata.bars[id].barKey} fill={props.chartdata.bars[id].stroke} key={id} />)
                        })
                    }

                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default ChartBar