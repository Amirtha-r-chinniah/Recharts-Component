import React from 'react';
import {
    ScatterChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Scatter,
    XAxis,
    YAxis,
    ZAxis
} from 'recharts';

const ChartScatter = (props) => {
    // Logic for no of channel scatters creation
    var channelIds = [];
    const noOfScatters = props.chartdata.data.length;
    for (var count = 0; count < noOfScatters; count++) {
        channelIds.push(count.toString());
    }
    return (
        <>
            <h1 className="text-heading">
                Scatter Chart Using Rechart
            </h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <ScatterChart >
                    <Tooltip />
                    <Legend></Legend>
                    <XAxis dataKey={props.chartdata.scatterKeyXAxis} />
                    <YAxis label={{ value: props.chartdata.yAxisLabel, angle: -90, position: 'insideLeft' }} dataKey={props.chartdata.scatterKeyYAxis} />
                    <ZAxis type="number" dataKey={props.chartdata.scatterKeyZAxis} range={[60, 400]} />
                    {
                        channelIds.map((id) => {
                            return (<Scatter data={props.chartdata.data[id]} name={props.chartdata.scatterNames[id].scatterName} fill={props.chartdata.color[id].fillcolor} key={id} />)
                        })
                    }



                </ScatterChart>
            </ResponsiveContainer>
        </>
    );
}

export default ChartScatter