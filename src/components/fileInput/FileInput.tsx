import * as XLSX from "xlsx";
import { useDataSheet } from "../../context/dataSheetContext";
import { DataSheetInterface } from "../../util/types";
import "./FileInput.scss";
import { useState } from "react";

function FileInput() {
  const { setData } = useDataSheet();
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      const workbook = XLSX.read(event.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet);

      setData(sheetData as DataSheetInterface[]);
    };

    reader.readAsBinaryString(file);
  };

  const onFileChange = (event: any) => {
    setLoading(true);
    handleFileUpload(event);

    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="file-uploader">
      <label
        htmlFor="file-input"
        className={`file-label ${loading ? "disabled" : ""}`}
      >
        {loading ? "Uploading..." : "Upload File"}
      </label>
      <input
        type="file"
        id="file-input"
        className="file-input"
        onChange={onFileChange}
        disabled={loading}
      />
      {loading && <div className="loader"></div>}
    </div>
  );
}

export default FileInput;
