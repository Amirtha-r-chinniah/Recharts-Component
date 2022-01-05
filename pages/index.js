import Link from "next/link"
export default function Home( ) {
  return (
    <>
      <Link href={{pathname:'/chartnavigator', query:{chart: "Line"}}}>1. LineChart</Link>   
      <br></br>
      <Link href={{pathname:'/chartnavigator', query:{chart: "Area"}}}><a>2. AreaChart</a></Link>   
      <br></br>
      <Link href={{pathname:'/chartnavigator', query:{chart: "Bar"}}}><a>3. BarChart</a></Link> 
      <br></br> 
      <Link href={{pathname:'/chartnavigator', query:{chart: "Composed"}}}><a>4. ComposedChart</a></Link> 
      <br></br> 
      <Link href={{pathname:'/chartnavigator', query:{chart: "Scatter"}}}><a>5. ScatterChart</a></Link> 
      <br></br> 
      <Link href={{pathname:'/chartnavigator', query:{chart: "Pie"}}}><a>6. PieChart</a></Link> 
      <br></br> 
      <Link href={{pathname:'/chartnavigator', query:{chart: "Radar"}}}><a>7. RadarChart</a></Link> 
      <br></br> 
      <Link href={{pathname:'/chartnavigator', query:{chart: "RadialBar"}}}><a>8. RadialChart</a></Link> 
      <br></br> 
      <Link href={{pathname:'/chartnavigator', query:{chart: "Funnel"}}}><a>9. FunnelChart</a></Link> 
      <br></br></>
  )
}