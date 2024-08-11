import { useEffect, useMemo, useState } from "react";
import { useDataSheet } from "../../context/dataSheetContext";
import { axisClasses, BarChart } from "@mui/x-charts";
import { RecordStatusEnum } from "../../util/enum";
import { isValidDate } from "../../util/format";
import { getMonth } from "date-fns";

export const dataset = [
  {
    month: "Jan",
    value: 0,
  },
  {
    month: "Feb",
    value: 0,
  },
  {
    month: "Mar",
    value: 0,
  },
  {
    month: "Apr",
    value: 0,
  },
  {
    month: "May",
    value: 0,
  },
  {
    month: "June",
    value: 0,
  },
  {
    month: "July",
    value: 0,
  },
  {
    month: "Aug",
    value: 0,
  },
  {
    month: "Sept",
    value: 0,
  },
  {
    month: "Oct",
    value: 0,
  },
  {
    month: "Nov",
    value: 0,
  },
  {
    month: "Dec",
    value: 0,
  },
];

const BarChartComponent = () => {
  const valueFormatter = (value: any) => `${value} companies`;
  const { data, dataFilter } = useDataSheet();
  const [chartData, setChartData] = useState(dataset);

  useEffect(() => {
    const customChartData = [...dataset];

    const filteredData = data.filter((item) => {
      if (!!item?.record_status?.length) {
        return (
          item.record_status === RecordStatusEnum.INACTIVE &&
          isValidDate(item.created_dt) &&
          isValidDate(item.data_source_modified_dt)
        );
      }

      return false;
    });

    filteredData.forEach((item) => {
      const month = getMonth(item.created_dt);

      customChartData[month] = {
        ...customChartData[month],
        value: customChartData[month].value + 1,
      };
    });

    setChartData(customChartData);
  }, [data, dataFilter]);

  const chartSetting = {
    yAxis: [
      {
        label: "",
      },
    ],
    series: [
      {
        dataKey: "value",
        label: "Capomanies Out of Service",
        valueFormatter,
      },
    ],
    height: 300,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: "translateX(-10px)",
      },
    },
  };

  const barCodeChart = useMemo(() => {
    return (
      <BarChart
        dataset={chartData}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "month",
            tickPlacement: "middle",
            tickLabelPlacement: "middle",
          },
        ]}
        {...chartSetting}
      />
    );
  }, [chartData, data, dataFilter]);

  return <div>{barCodeChart}</div>;
};

export default BarChartComponent;
