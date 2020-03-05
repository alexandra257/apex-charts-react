import React from "react";
import Chart from "react-apexcharts";

class PopChart extends React.Component {
  state = {
    options: {
      chart: {
        background: "#f4f4f4",
        foreColor: "#333"
      },
      xaxis: {
        categories: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"]
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      fill: {
        colors: ["#feb72b"]
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Minutes Meditated Daily",
        align: "center",
        margin: 20,
        offsetY: 20,
        style: {
          fontSize: "25px"
        }
      }
    },
    series: [
      {
        name: "Meditation Minutes",
        data: [2, 5, 14, 27, 9, 11, 34]
      }
    ]
  };

  onClick = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal
          }
        }
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="450"
          width="100%"
        />
        <button onClick={this.onClick}>Change Chart View</button>
      </React.Fragment>
    );
  }
}

export default PopChart;
