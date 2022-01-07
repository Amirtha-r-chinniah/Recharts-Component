
import ChartLine from '../components/LineChart';
import ChartArea from '../components/AreaChart';
import ChartBar from '../components/BarChart';
import ChartScatter from '../components/ScatterChart';
import ChartPie from '../components/PieChart';
import ChartRadialBar from '../components/RadialBarChart';
import ChartFunnel from '../components/FunnelChart';
import ChartDonut from '../components/DonutChart';
import ChartStackedBar from '../components/StackedBarChart';
import { withRouter } from 'next/router';

function lineChartData({ router: { query } }) {
  if (query.chart == 'Line') {
    const lineChartData =
    {
      xAxisKey: 'month',
      yAxisLabel: 'No of Logins',
      xAxisLabel: 'Months',
      lines: [{ lineKey: 'CareerInsight', stroke: 'blue' }, { lineKey: 'ProgramInsight', stroke: 'green' }],
      data: [
        { month: 'April', ProgramInsight: 85, CareerInsight: 60 },
        { month: 'May', ProgramInsight: 50, CareerInsight: 98 },
        { month: 'June', ProgramInsight: 75, CareerInsight: 55 },
        { month: 'July', ProgramInsight: 30, CareerInsight: 48 }
      ]
    };
    return (<>
      <ChartLine chartdata={lineChartData} ></ChartLine>
    </>
    )
  }
  else if (query.chart == 'Area') {
    const areaChartData =
    {
      xAxisKey: 'degreeLevel',
      yAxisLabel: 'No of Firm logins',
      Areas: [{ AreaKey: 'TexasUniversity', stroke: 'blue', fill:'blue' }, { AreaKey: 'DalhoussieUniversity', stroke: 'green', fill:'green' }],
      data: [
        { degreeLevel: "Associate's degree/less than Associates", TexasUniversity: 4000, DalhoussieUniversity: 2400 },
        { degreeLevel: "High school/less than associate's", TexasUniversity: 3000, DalhoussieUniversity: 1398 },
        { degreeLevel: "Associate's degree", TexasUniversity: 2000, DalhoussieUniversity: 9800 },
        { degreeLevel: "Bachelor's degree", TexasUniversity: 2780, DalhoussieUniversity: 3908 },
        { degreeLevel: "Master's degree", TexasUniversity: 1890, DalhoussieUniversity: 4800},
        { degreeLevel: "Doctoral degree", TexasUniversity: 2390, DalhoussieUniversity: 3800 }
      ]
    };
    return (<>
      <ChartArea chartdata={areaChartData} ></ChartArea>
    </>
    )
  }
  else if (query.chart == 'Bar') {
    const barChartData =
    {
      xAxisKey: 'validatePage',
      yAxisLabel:'No Of PDF Exports',
      bars: [{ barKey: 'TexasUniversity', stroke: 'black' }, { barKey: 'DalhoussieUniversity', stroke: 'red' }],
      data: [
        { validatePage: "Employment Potential", TexasUniversity: 30, DalhoussieUniversity: 70 },
        { validatePage: "Competitor Landscape", TexasUniversity: 12, DalhoussieUniversity: 88 },
        { validatePage: "Market Alignment", TexasUniversity: 15, DalhoussieUniversity: 85 },
        { validatePage: "Key Competencies", TexasUniversity: 35, DalhoussieUniversity: 65 },
        { validatePage: "Program score card", TexasUniversity: 54, DalhoussieUniversity: 46 }
      ]
    };
    return (<>
      <ChartBar chartdata={barChartData} ></ChartBar>
    </>
    )
  }
  else if (query.chart == 'StackedBar') {
    const stackedbarChartData =
    {
      xAxisKey: 'validatePage',
      yAxisLabel:'No Of PDF Exports',
      bars: [{ barKey: 'TexasUniversity', stroke: 'black' }, { barKey: 'DalhoussieUniversity', stroke: 'red' }],
      stackId:'A',
      data: [
        { validatePage: "Employment Potential", TexasUniversity: 30, DalhoussieUniversity: 70 },
        { validatePage: "Competitor Landscape", TexasUniversity: 12, DalhoussieUniversity: 88 },
        { validatePage: "Market Alignment", TexasUniversity: 15, DalhoussieUniversity: 85 },
        { validatePage: "Key Competencies", TexasUniversity: 35, DalhoussieUniversity: 65 },
        { validatePage: "Program score card", TexasUniversity: 54, DalhoussieUniversity: 46 }
      ]
    };
    return (<>
      <ChartStackedBar chartdata={stackedbarChartData} ></ChartStackedBar>
    </>
    )
  }
  else if (query.chart == 'Pie') {
    const pieChartData =
    {
      outerRadius: "250",
      dataPlotterKey: "users",
      data: [
        { name: 'AdultSurvey', users: 400, fill: 'green' },
        { name: 'HybridSurvey', users: 700, fill: 'red' },
        { name: 'TraditionalSurvey', users: 1000, fill: 'brown' }
      ]
    };
    return (<>
      <ChartPie chartdata={pieChartData} ></ChartPie>
    </>
    )
  }
  else if (query.chart == 'Donut') {
    const donutChartData =
    {
      outerRadius: "250",
      dataPlotterKey: "users",
      data: [
        { name: 'AdultSurvey', users: 400, fill: 'green' },
        { name: 'HybridSurvey', users: 700, fill: 'red' },
        { name: 'TraditionalSurvey', users: 1000, fill: 'brown' }
      ]
    };
    return (<>
      <ChartDonut chartdata={donutChartData} ></ChartDonut>
    </>
    )
  }
  else if (query.chart == 'Scatter') {
    const scatterChartData =
    {
      color:[{fillcolor:'blue'},{fillcolor:'green'}],
      yAxisLabel:'login count',
      scatterKeyXAxis: 'Year' ,
      scatterKeyYAxis: 'loginCount',
      scatterNames:[{scatterName:"ProgramInsight"},{scatterName:"CareerInsight"}],
      data:[    
        [       
        {  loginCount: 100, Year: 2022 },
        {  loginCount: 250, Year: 2021 },
        {  loginCount: 320, Year: 2020 },
        {  loginCount: 120, Year: 2019 },
        {  loginCount: 0, Year: 2018 },
        {  loginCount: 50, Year: 2017 },
        {  loginCount: 70, Year: 2016 },
        {  loginCount: 8, Year: 2015 },
        {  loginCount: 0, Year: 2014 },
      ],
      [
        {  loginCount: 50, Year: 2022 },
        {  loginCount: 20, Year: 2021 },
        {  loginCount: 30, Year: 2020 },
        {  loginCount: 120, Year: 2019 },
        {  loginCount: 100, Year: 2018 },
        {  loginCount: 500, Year: 2017 },
        {  loginCount: 7, Year: 2016 },
        {  loginCount: 80, Year: 2015 },
        {  loginCount: 200, Year: 2014 },
        
      ]
      ]
    
    };
    return (<>
      <ChartScatter chartdata={scatterChartData} ></ChartScatter>
    </>
    )
  }
  else if (query.chart == 'RadialBar') {
    const radialBarChartData =
    {
      dataPlotterKey: "users",
      data: [
        {name: 'Explore', users: 50, fill: "grey" },
        {name: 'Validate', users: 20, fill: "yellow" },
        {name: 'Portfolio', users: 80, fill: "aqua" }
      ]
    };
    return (<>
      <ChartRadialBar chartdata={radialBarChartData} ></ChartRadialBar>
    </>
    )
  }
  else if (query.chart == 'Funnel') {
    const funnelChartData =
    {
      name: 'College',
      dataPlotterKey: "value",
      funnelLabel:"name",
      data: [

        {
          "value": 100,
          "name": "Software Engineer",
          "fill": "#8884d8"
        },
        {
          "value": 80,
          "name": "Data Engineer",
          "fill": "#83a6ed"
        },
        {
          "value": 50,
          "name": "HR",
          "fill": "#8dd1e1"
        },
        {
          "value": 40,
          "name": "Support Engineer",
          "fill": "#82ca9d"
        },
        {
          "value": 1,
          "name": "Nursing",
          "fill": "#a4de6c"
        }


      ]
    };
    return (<>
      <ChartFunnel chartdata={funnelChartData} ></ChartFunnel>
    </>
    )
  }
  else {
    return "Not Found"
  }
};
export default withRouter(lineChartData);







