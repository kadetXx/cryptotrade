import React, { Component } from 'react'
import Chart from "react-apexcharts";
import "./Chart.scss"

class Graph extends Component {

  state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
      },
      markers: {
        size: 6
      }
    },

    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  };
  
  render() {

    return (
      <div id='chart' className="mixed-chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="100%"
          />
      </div>
    )
  }
}

export default Graph
