import * as React from "react";
import { useGridApiRef } from "@mui/x-data-grid";
import { useDataSheet } from "../../context/dataSheetContext";
import { CarrierDataFields, DataSheetEnum } from "../../util/enum";
import { formattedDate } from "../../util/format";
import { DataGridPro } from "@mui/x-data-grid-pro";
import BarChartComponent from "../barChart/barChart";
import "./datatable.scss";

const autosizeOptions = {
  includeHeaders: true,
  includeOutliers: false,
  outliersFactor: 1,
};

export default function Datatable() {
  const apiRef = useGridApiRef();
  const [columns, setColumns] = React.useState([]);
  const { data, setDataFilter, dataFilter } = useDataSheet();

  React.useEffect(() => {
    if (!!data?.length) {
      const keys = Object.keys(data[0]);

      if (keys) {
        const customColumns = keys.map((key) => ({
          field: key,
          headerName: DataSheetEnum[key],
          minWidth: 250,
          resizable: true,
          valueFormatter: (value) => {
            if (value) {
              switch (CarrierDataFields[key.toUpperCase()]) {
                case CarrierDataFields.CREATED_DT:
                case CarrierDataFields.DATA_SOURCE_MODIFIED_DT:
                  return formattedDate(value);
                default:
                  return value;
              }
            }

            return "";
          },
        }));

        setColumns(customColumns);
      }
    }
  }, [data]);

  React.useEffect(() => {
    apiRef.current.autosizeColumns(autosizeOptions);
  }, [data]);

  const onFilterChange = (e) => {
    const data = e.filter?.filterModel?.items?.map((e) => ({
      field: e.field,
      value: e.value,
    }));

    if (dataFilter !== data && !!dataFilter.length && !!data.length) {
      setDataFilter(data);
    }
  };

  return (
    <div className="datatable">
      <BarChartComponent />

      <div className="dataGrid">
        <DataGridPro
          apiRef={apiRef}
          density="compact"
          className="datagrid"
          rows={data}
          columns={columns}
          pageSize={100}
          checkboxSelection
          pagination
          onCellClick={() => apiRef.current.autosizeColumns(autosizeOptions)}
          autosizeOptions={autosizeOptions}
          onStateChange={onFilterChange}
        />
      </div>
    </div>
  );
}
