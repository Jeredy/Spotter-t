import React, { createContext, useContext, useState } from "react";
import { DataSheetInterface } from "../util/types";

type DataSheetProps = {
  children?: React.ReactNode;
  data: DataSheetInterface[];
  setData: (data: DataSheetInterface[]) => void;
  customData: DataSheetInterface[];
  setCustomData: (data: DataSheetInterface[]) => void;
  dataFilter: {
    field: any;
    value: string;
  }[];
  setDataFilter: (
    data: {
      field: any;
      value: string;
    }[]
  ) => void;
};

const DataSheet = createContext<DataSheetProps>({} as DataSheetProps);

export const DataSheetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<DataSheetInterface[]>([]);
  const [customData, setCustomData] = useState<DataSheetInterface[]>([]);
  const [dataFilter, setDataFilter] = useState<
    {
      field: string;
      value: string;
    }[]
  >([]);

  return (
    <DataSheet.Provider
      value={{
        data,
        setData,
        customData,
        setCustomData,
        dataFilter,
        setDataFilter,
      }}
    >
      {children}
    </DataSheet.Provider>
  );
};

export const useDataSheet = () => useContext(DataSheet);

export default DataSheet;
