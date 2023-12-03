"use client";

import { useState } from "react";
import Button from "@/components/shared/Button";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import { DateObject } from "react-multi-date-picker";

import TimePicker from "react-multi-date-picker/plugins/time_picker";
import Label from "@/components/shared/Label";
import ReportFormTextField from "./ReportFormTextField";
import AddReportFormFields from "@/models/AddReportFormFields";
import createObjectFromForm from "@/utils/createObjectFromForm";
import { AddReportFormSchema } from "@/models/AddReportFormFields";

const AddReportForm = () => {
  let [inputDate, setInputDate] = useState(new DateObject());
  let [inputTime, setInputTime] = useState(new DateObject());

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { data } = createObjectFromForm(e.target.elements, AddReportFormSchema);

    data = {
      ...data,
      [AddReportFormFields?.date?.title]: new DateObject(
        inputDate.convert(gregorian, gregorian_en)
      ).format("YYYY/MM/DD"),
      [AddReportFormFields?.time?.title]: new DateObject(
        inputTime.convert(gregorian, gregorian_en)
      ).format(),
    };

    console.log(data);
  };
  return (
    <form
      className="w-full h-[80%] costume-scroll overflow-scroll max-w-lg flex gap-y-3 flex-wrap -mx-3 mb-6"
      onSubmit={handleSubmit}>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.date?.title}
          text={AddReportFormFields?.date?.placeholder}
        />
        <DatePicker
          id={AddReportFormFields?.date?.title}
          style={{ cursor: "pointer", padding: "20px", width: "100%" }}
          value={inputDate}
          onChange={setInputDate}
          calendar={persian}
          locale={persian_fa}
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.time?.title}
          text={AddReportFormFields?.time?.placeholder}
        />
        <DatePicker
          id={AddReportFormFields?.time?.title}
          style={{ cursor: "pointer", padding: "20px", width: "100%" }}
          value={inputTime}
          onChange={setInputTime}
          calendar={persian}
          locale={persian_fa}
          disableDayPicker
          format="HH:mm"
          plugins={[<TimePicker hideSeconds position="bottom" />]}
        />
      </div>

      {AddReportFormSchema?.keyof()?._def?.values.map((_key) => (
        <ReportFormTextField key={_key} schema={AddReportFormFields[_key]} />
      ))}

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">
          ثبت سفارش
        </Button>
      </div>
    </form>
  );
};

export default AddReportForm;
