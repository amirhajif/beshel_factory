import React from "react";
import Label from "@/components/shared/Label";
import TextField from "@/components/shared/TextField";
const ReportFormTextField = ({ schema }) => {
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <Label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        forValue={schema?.title}
        text={schema?.placeholder}
      />
      <TextField
        name={schema?.title}
        id={schema?.title}
        placeholder={schema?.placeholder}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      />
    </div>
  );
};

export default ReportFormTextField;
