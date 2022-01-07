import React from 'react';
import {
    AreaChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Area,
    XAxis,
    YAxis
} from 'recharts';

const ChartArea = (props) => {
    //Logic for no of channel areas creation
    var channelIds = [];
    const noOfAreas = props.chartdata.Areas.length;
    for (var count = 0; count < noOfAreas; count++) {
        channelIds.push(count.toString());
    }
    return (
        <>
            <h1 className="text-heading">
                Area Chart Using Rechart
            </h1>
            <ResponsiveContainer width="80%" aspect={3}>
                <AreaChart data={props.chartdata.data} width={320} height={250}>
             
                    <XAxis dataKey={props.chartdata.xAxisKey} />
                    <YAxis label={{ value: props.chartdata.yAxisLabel, angle: -90, position: 'insideLeft' }} ></YAxis>
                    <Legend />
                    <Tooltip />

                    {
                        channelIds.map((id) => {
                            return (<Area type="monotone" dataKey={props.chartdata.Areas[id].AreaKey} fill={props.chartdata.Areas[id].fill} stroke={props.chartdata.Areas[id].stroke} key={id} />)
                        })
                    }

                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}

export default ChartArea