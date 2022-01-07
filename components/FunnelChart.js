import React from 'react';
import {
    FunnelChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Funnel, LabelList
} from 'recharts';

const ChartFunnel = (props) => {
    return (
        <>
            <h1 className="text-heading">
                Funnel Chart Using Rechart
            </h1>
            <ResponsiveContainer width="80%" aspect={3}>
                <FunnelChart width={350} height={250}  >
                    <Funnel data={props.chartdata.data} dataKey={props.chartdata.dataPlotterKey} label   >
                        <LabelList position="right" fill="#000" stroke="none" dataKey={props.chartdata.funnelLabel} />
                    </Funnel>
                </FunnelChart>
            </ResponsiveContainer>
        </>
    );
}

export default ChartFunnel