import Link from "next/link"
import styles from "../styles/Home.module.css"
export default function Home() {
  return (
    <>

      <div className={styles.outercontainer}>
        <div className={styles.container}>
          <div className={styles.header}>Recharts POC</div>
          <br></br>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <Link href={{ pathname: '/chartnavigator', query: { chart: "Line" } }}>LineChart</Link>
                </td>
                <td className={styles.td}>
                  <Link href={{ pathname: '/chartnavigator', query: { chart: "Area" } }}>AreaChart</Link>
                </td>
                <td className={styles.td}>
                  <Link href={{ pathname: '/chartnavigator', query: { chart: "Bar" } }}>BarChart</Link>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <Link href={{ pathname: '/chartnavigator', query: { chart: "Pie" } }}>PieChart</Link>
                </td>
                <td className={styles.td}>
                  <Link href={{ pathname: '/chartnavigator', query: { chart: "Scatter" } }}>ScatterChart</Link>
                </td>
                <td className={styles.td}>
                  <Link href={{ pathname: '/chartnavigator', query: { chart: "Donut" } }}>DonutChart</Link>
                </td></tr>
            </tbody>
            <tbody>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <Link href={{ pathname: '/chartnavigator', query: { chart: "RadialBar" } }}> RadialBarChart</Link>
                </td>
                <td className={styles.td}>
                  <Link href={{ pathname: '/chartnavigator', query: { chart: "StackedBar" } }}> StackedBarChart</Link>
                </td>
                <td className={styles.td}>
                  <Link href={{ pathname: '/chartnavigator', query: { chart: "Funnel" } }}> FunnelChart</Link>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div></>
  )
}