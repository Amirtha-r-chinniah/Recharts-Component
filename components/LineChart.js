import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis
} from 'recharts';

const ChartLine = (props) => {
    //Logic for no of channel lines creation
    var channelIds = [];
    const noOfLines = props.chartdata.lines.length;
    for (var count = 0; count < noOfLines; count++) {
        channelIds.push(count.toString());
    }

    return (
        <>
            <h1 className="text-heading">
                Line Chart Using Rechart
            </h1>
            <ResponsiveContainer width="80%" aspect={3}>
                <LineChart data={props.chartdata.data} >

                    <XAxis dataKey={props.chartdata.xAxisKey}  />
                    <YAxis label={{ value: props.chartdata.yAxisLabel, angle: -90, position: 'insideLeft' }} ></YAxis>

                    <Legend />
                    <Tooltip />

                    {
                        channelIds.map((id) => {
                            return (<Line type="monotone" dataKey={props.chartdata.lines[id].lineKey}  stroke={props.chartdata.lines[id].stroke} key={id} />)
                        })
                    }

                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default ChartLine