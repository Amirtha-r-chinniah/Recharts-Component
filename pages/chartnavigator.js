
import ChartLine from '../components/LineChart';
import ChartArea from '../components/AreaChart';
import ChartBar from '../components/BarChart';
import { withRouter } from 'next/router';
import ChartScatter from '../components/ScatterChart';
import ChartPie from '../components/PieChart';
import ChartRadialBar from '../components/RadialBarChart';
import ChartFunnel from '../components/FunnelChart';
function lineChartData({router:{query}}) {
  if(query.chart=='Line'){
  const lineChartData = 
    {
      name: 'Finances',
      xAxisKey: 'name',
      lines:[{lineKey:'Balance', stroke:'black'},{lineKey:'saving', stroke:'red'}],    
      data:[
        {name: 'April', Balance: 48530, saving: 0},
        {name: 'May', Balance: 50328, saving: 1798},
        {name: 'June', Balance: 48573, saving: -1755},
        {name: 'July', Balance: 48825, saving: 252}
      ]
    };
  return (<>
      <ChartLine chartdata={lineChartData} ></ChartLine>  
    </>
    )
  }
  else if(query.chart=='Area'){
    const areaChartData = 
    {
      name: 'Finances',
      xAxisKey: 'name',
      Areas:[{AreaKey:'x', stroke:'black'},{AreaKey:'y', stroke:'red'}],    
      data:[
        {name:"A", x:30, y:70},
        {name:"B", x:12, y:88},
        {name:"C", x:15, y:85},
        {name:"D", x:35, y:65},
        {name:"E", x:54, y:46},
        {name:"F", x:72, y:28},
        {name:"G", x:32, y:68}
      ]
    };
  return (<>
      <ChartArea chartdata={areaChartData} ></ChartArea>  
    </>
    )
  }
  else if(query.chart=='Bar'){
    const barChartData = 
    {
      name: 'Finances',
      xAxisKey: 'name',
      bars:[{barKey:'x', stroke:'black'},{barKey:'y', stroke:'red'}],    
      data:[
        {name:"A", x:30, y:70},
        {name:"B", x:12, y:88},
        {name:"C", x:15, y:85},
        {name:"D", x:35, y:65},
        {name:"E", x:54, y:46},
        {name:"F", x:72, y:28},
        {name:"G", x:32, y:68}
      ]
    };
  return (<>
      <ChartBar chartdata={barChartData} ></ChartBar>  
    </>
    )
  }
  else if(query.chart=='Pie'){
    const pieChartData = 
    {
      name: 'Finances',
      outerRadius:"250", 
      dataPlotterKey:"students",
      data:[
        {name: 'Geeksforgeeks', students: 400, fill:'green'},
        {name: 'Technical scripter', students: 700, fill: 'red'},
        {name: 'Geek-i-knack', students: 200, fill:'blue'},
        {name: 'Geek-o-mania', students: 1000, fill:'brown'}
      ]
    };
  return (<>
      <ChartPie chartdata={pieChartData} ></ChartPie>  
    </>
    )
  }
  else if(query.chart=='Scatter'){
    const scatterChartData = 
    {
      name: 'Finances',
      scatterKeyXAxis:"x", 
      scatterKeyYAxis:"y",    
      fillColor:"green",
      data:[
        { x: 1, y: 23 },
        { x: 2, y: 3 },
        { x: 3, y: 15 },
        { x: 4, y: 35 },
        { x: 5, y: 45 },
        { x: 6, y: 25 },
        { x: 7, y: 17 },
        { x: 8, y: 32 },
        { x: 9, y: 43 },
      ]
    };
  return (<>
      <ChartScatter chartdata={scatterChartData} ></ChartScatter>  
    </>
    )
  }
  else if(query.chart=='RadialBar'){
    const radialBarChartData = 
    {
      name: 'Finances',
      dataPlotterKey:"x",
      data:[
        {name:'A', x:1,fill:"green"},
        {name:'B', x:2, fill:"yellow"},
        {name:'C', x:3, fill:"aqua"},
        {name:'D', x:4, fill: "blue"},
        {name:'E', x:5, fill:"orange"},
        {name:'F', x:6, fill:"red"},
        {name:'G', x:7, fill:"black"},
        {name:'H', x:8, fill:"purple"},
        {name:'I', x:9, fill:"gray"}
      ]
    };
  return (<>
      <ChartRadialBar chartdata={radialBarChartData} ></ChartRadialBar>  
    </>
    )
  }
  else if(query.chart=='Funnel'){
    const funnelChartData = 
    {
      name: 'Finances',
      dataPlotterKey:"value",
      data:[
        
          {
            "value": 100,
            "name": "展现",
            "fill": "#8884d8"
          },
          {
            "value": 80,
            "name": "点击",
            "fill": "#83a6ed"
          },
          {
            "value": 50,
            "name": "访问",
            "fill": "#8dd1e1"
          },
          {
            "value": 40,
            "name": "咨询",
            "fill": "#82ca9d"
          },
          {
            "value": 26,
            "name": "订单",
            "fill": "#a4de6c"
          }
        
        
      ]
    };
  return (<>
      <ChartFunnel chartdata={funnelChartData} ></ChartFunnel>  
    </>
    )
  }
  else{
      return "Amirtha"
  }
};
export default withRouter(lineChartData);







