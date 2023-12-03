"use client";

import { useState } from "react";
import Button from "@/components/shared/Button";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import Label from "@/components/shared/Label";
import TextField from "@/components/shared/TextField";

import AddReportFormFields from "@/models/AddReportFormFields";
import createObjectFromForm from "@/utils/createObjectFromForm";
import { AddReportFormSchema } from "@/models/AddReportFormFields";

const AddReportForm = () => {
  let [inputDate, setInputDate] = useState(new Date());
  let [inputTime, setInputTime] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = createObjectFromForm(
      e.target.elements,
      AddReportFormSchema
    );

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

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.operator?.title}
          text={AddReportFormFields?.operator?.placeholder}
        />
        <TextField
          name={AddReportFormFields?.operator?.title}
          id={AddReportFormFields?.operator?.title}
          placeholder={AddReportFormFields?.operator?.placeholder}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.machine?.title}
          text={AddReportFormFields?.machine?.placeholder}
        />
        <TextField
          name={AddReportFormFields?.machine?.title}
          id={AddReportFormFields?.machine?.title}
          placeholder={AddReportFormFields?.machine?.placeholder}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.stage?.title}
          text={AddReportFormFields?.stage?.placeholder}
        />
        <TextField
          name={AddReportFormFields?.stage?.title}
          id={AddReportFormFields?.stage?.title}
          placeholder={AddReportFormFields?.stage?.placeholder}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.partsNo?.title}
          text={AddReportFormFields?.partsNo?.placeholder}
        />
        <TextField
          name={AddReportFormFields?.partsNo?.title}
          id={AddReportFormFields?.partsNo?.title}
          placeholder="15 16 17"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.st?.title}
          text={AddReportFormFields?.st?.placeholder}
        />
        <TextField
          name={AddReportFormFields?.st?.title}
          id={AddReportFormFields?.st?.title}
          placeholder={AddReportFormFields?.st?.placeholder}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.noErroredPart?.title}
          text={AddReportFormFields?.noErroredPart?.placeholder}
        />
        <TextField
          name={AddReportFormFields?.noErroredPart?.title}
          id={AddReportFormFields?.noErroredPart?.title}
          placeholder={AddReportFormFields?.noErroredPart?.placeholder}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.erroredPart?.title}
          text={AddReportFormFields?.erroredPart?.placeholder}
        />
        <TextField
          name={AddReportFormFields?.erroredPart?.title}
          id={AddReportFormFields?.erroredPart?.title}
          placeholder={AddReportFormFields?.erroredPart?.placeholder}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.pauseControl1AndTm?.title}
          text={AddReportFormFields?.pauseControl1AndTm?.placeholder}
        />
        <TextField
          name={AddReportFormFields?.pauseControl1AndTm?.title}
          id={AddReportFormFields?.pauseControl1AndTm?.title}
          placeholder={AddReportFormFields?.pauseControl1AndTm?.placeholder}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.pauseControl2AndTm?.title}
          text={AddReportFormFields?.pauseControl2AndTm?.placeholder}
        />
        <TextField
          name={AddReportFormFields?.pauseControl2AndTm?.title}
          id={AddReportFormFields?.pauseControl2AndTm?.title}
          placeholder={AddReportFormFields?.pauseControl2AndTm?.placeholder}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.pauseControl3AndTm?.title}
          text={AddReportFormFields?.pauseControl3AndTm?.placeholder}
        />
        <TextField
          name={AddReportFormFields?.pauseControl3AndTm?.title}
          id={AddReportFormFields?.pauseControl3AndTm?.title}
          placeholder={AddReportFormFields?.pauseControl3AndTm?.placeholder}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.pauseControl4AndTm?.title}
          text={AddReportFormFields?.pauseControl4AndTm?.placeholder}
        />
        <TextField
          name={AddReportFormFields?.pauseControl4AndTm?.title}
          id={AddReportFormFields?.pauseControl4AndTm?.title}
          placeholder={AddReportFormFields?.pauseControl4AndTm?.placeholder}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">
          ثبت سفارش
        </Button>
      </div>
    </form>
  );
};

export default AddReportForm;
