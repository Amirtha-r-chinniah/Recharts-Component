
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
      xAxisKey: 'year',
      yAxisLabel: 'No of Logins',
      xAxisLabel: 'Year',
      lines: [{ lineKey: 'Explore', stroke: '#5CB85C' }, { lineKey: 'Validate', stroke: '#6136AB' }, { lineKey: 'Portfolio', stroke: '#003F5C' }],
      data: [
        { year: '2021', Explore: 85, Validate: 60, Portfolio:10 },
        { year: '2020', Explore: 55, Validate: 10, Portfolio:0 },
        { year: '2019', Explore: 25, Validate: 60, Portfolio:30},
        { year: '2018', Explore: 65, Validate: 20, Portfolio:23}
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
      bars: [{ barKey: 'TexasUniversity', stroke: '#5CB85C' }, { barKey: 'DalhoussieUniversity', stroke: '#6136AB' }],
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
      bars: [{ barKey: 'TexasUniversity', stroke: '#5CB85C' }, { barKey: 'DalhoussieUniversity', stroke: '#6136AB' }],
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
        { name: 'AdultSurvey', users: 400, fill: '#003F5C' },
        { name: 'HybridSurvey', users: 700, fill: '#5CB85C' },
        { name: 'TraditionalSurvey', users: 1000, fill: '#6136AB' }
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
        { name: 'AdultSurvey', users: 400, fill: '#003F5C' },
        { name: 'HybridSurvey', users: 700, fill: '#5CB85C' },
        { name: 'TraditionalSurvey', users: 1000, fill: '#6136AB' }
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
      color:[{fillcolor:'#5CB85C'},{fillcolor:'#6136AB'}],
      yAxisLabel:'login count',
      scatterKeyXAxis: 'Year' ,
      scatterKeyYAxis: 'loginCount',
      scatterKeyZAxis: 'activeUsers',
      scatterNames:[{scatterName:"ProgramInsight"},{scatterName:"CareerInsight"}],
      data:[    
        [       
        {  loginCount: 100, Year: 2022, activeUsers: 100 },
        {  loginCount: 250, Year: 2021, activeUsers: 10},
        {  loginCount: 320, Year: 2020, activeUsers: 2500 },
        {  loginCount: 120, Year: 2019, activeUsers: 70 },
        {  loginCount: 0, Year: 2018, activeUsers: 8 },
        {  loginCount: 50, Year: 2017, activeUsers: 70 },
        {  loginCount: 70, Year: 2016, activeUsers: 60 },
        {  loginCount: 8, Year: 2015, activeUsers: 10 },
        {  loginCount: 0, Year: 2014, activeUsers: 10 },
      ],
      [
        {  loginCount: 50, Year: 2022, activeUsers: 100 },
        {  loginCount: 20, Year: 2021, activeUsers: 80 },
        {  loginCount: 30, Year: 2020, activeUsers: 60 },
        {  loginCount: 120, Year: 2019, activeUsers: 220 },
        {  loginCount: 100, Year: 2018, activeUsers: 200 },
        {  loginCount: 500, Year: 2017, activeUsers: 700 },
        {  loginCount: 7, Year: 2016, activeUsers: 10 },
        {  loginCount: 80, Year: 2015, activeUsers: 100 },
        {  loginCount: 200, Year: 2014, activeUsers: 120 },
        
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
      funnelLabel:"programName",
      data: [

        {
          "value": 100,
          "programName": "Software Engineer",
          "fill": "#8884d8"
        },
        {
          "value": 80,
          "programName": "Data Engineer",
          "fill": "#83a6ed"
        },
        {
          "value": 50,
          "programName": "HR",
          "fill": "#8dd1e1"
        },
        {
          "value": 40,
          "programName": "Support Engineer",
          "fill": "#82ca9d"
        },
        {
          "value": 1,
          "programName": "Nursing",
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







