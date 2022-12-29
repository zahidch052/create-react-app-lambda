import Chart from "react-apexcharts";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetGraphQuery } from "../../services/graphApi";
const CandelChart = () => {
  // const ApiData = useGetGraphQuery('1min');
  const graphData = useSelector((state) => state.graphData.data);

  const settings = {
    series: [
      {
        data: graphData,
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        opposite: true,
      },
    },
  };
  return (
    <Chart
      options={settings.options}
      series={settings.series}
      type="candlestick"
      width="100%"
      height={240}
    />
  );
};

export default CandelChart;
