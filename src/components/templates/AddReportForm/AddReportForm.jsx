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
import { addReport } from "@/apis/addReport";

import sendNotif from "@/utils/sendNotif";
import ReportStatus from "@/constants/ReportStatus";
import StopCodeGuidance from "../StopCodeGuidance";
import StopGuidanceCodes from "@/constants/StopGuidanceCodes";
const AddReportForm = ({ machines, orders }) => {
  try {
    if (machines && orders) {
    } else throw new Error("Error");
  } catch (err) {
    sendNotif("خطایی رخ داده", "error");
  }

  let [inputDate, setInputDate] = useState(new DateObject());
  let [startTime, setStartTime] = useState(new DateObject());
  let [endedTime, setEndedTime] = useState(new DateObject());

  const handleSubmit = async (e) => {
    e.preventDefault();

    let { data } = createObjectFromForm(e.target.elements, AddReportFormSchema);

    data = {
      ...data,
      [AddReportFormFields?.date?.title]: new DateObject(
        inputDate.convert(gregorian, gregorian_en)
      ).format("YYYY-MM-DD"),
      [AddReportFormFields?.started_at?.title]: new DateObject(
        startTime.convert(gregorian, gregorian_en)
      ).format("HH:MM:SS"),
      [AddReportFormFields?.ended_at?.title]: new DateObject(
        endedTime.convert(gregorian, gregorian_en)
      ).format("HH:MM:SS"),
      order: Number(
        e.target.elements.namedItem(AddReportFormFields?.order?.title).value
      ),
      machine: Number(
        e.target.elements.namedItem(AddReportFormFields?.machine?.title).value
      ),
      status: ReportStatus?.Pending?.key,
      stop_controller_1_code: e.target.elements.namedItem(
        AddReportFormFields?.stop_controller_1_code?.title
      ).value,
      stop_controller_1_time: Number(
        e.target.elements.namedItem(
          AddReportFormFields?.stop_controller_1_time?.title
        ).value
      ),

      stop_controller_2_code: e.target.elements.namedItem(
        AddReportFormFields?.stop_controller_2_code?.title
      ).value,
      stop_controller_2_time: Number(
        e.target.elements.namedItem(
          AddReportFormFields?.stop_controller_2_time?.title
        ).value
      ),

      stop_controller_3_code: e.target.elements.namedItem(
        AddReportFormFields?.stop_controller_3_code?.title
      ).value,
      stop_controller_3_time: Number(
        e.target.elements.namedItem(
          AddReportFormFields?.stop_controller_3_time?.title
        ).value
      ),

      stop_controller_4_code: e.target.elements.namedItem(
        AddReportFormFields?.stop_controller_4_code?.title
      ).value,
      stop_controller_4_time: Number(
        e.target.elements.namedItem(
          AddReportFormFields?.stop_controller_4_time?.title
        ).value
      ),
    };

    e.target.reset();

    try {
      await addReport(data);
      sendNotif("با موفقیت ایجاد شد", "success");
    } catch (err) {
      sendNotif("خطایی رخ داد", "error");
    }
  };
  return (
    <form
      className="w-full h-[80%] costume-scroll overflow-scroll max-w-lg flex gap-y-3 flex-wrap -mx-3 mb-6"
      onSubmit={handleSubmit}>
      <div className="w-full my-2">
        <StopCodeGuidance />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.order?.title}
          text={AddReportFormFields?.order?.placeholder}
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          list={AddReportFormFields?.order?.listId}
          name={AddReportFormFields?.order?.title}
          id={AddReportFormFields?.order?.title}
          placeholder={AddReportFormFields?.order?.placeholder}
        />
        <datalist id={AddReportFormFields?.order?.listId}>
          {orders.map(({ id }) => (
            <option key={`order${id}`} value={id}></option>
          ))}
        </datalist>
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.machine?.title}
          text={AddReportFormFields?.machine?.placeholder}
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          list={AddReportFormFields?.machine?.listId}
          name={AddReportFormFields?.machine?.title}
          id={AddReportFormFields?.machine?.title}
          placeholder={AddReportFormFields?.machine?.placeholder}
        />
        <datalist id={AddReportFormFields?.machine?.listId}>
          {machines.map(({ id, title }) => (
            <option key={`machine${id}`} value={id}>
              {title}
            </option>
          ))}
        </datalist>
      </div>

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
          forValue={AddReportFormFields?.started_at?.title}
          text={AddReportFormFields?.started_at?.placeholder}
        />
        <DatePicker
          id={AddReportFormFields?.started_at?.title}
          style={{ cursor: "pointer", padding: "20px", width: "100%" }}
          value={startTime}
          onChange={setStartTime}
          calendar={persian}
          locale={persian_fa}
          disableDayPicker
          format="HH:mm"
          plugins={[<TimePicker hideSeconds position="bottom" />]}
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.ended_at?.title}
          text={AddReportFormFields?.ended_at?.placeholder}
        />
        <DatePicker
          id={AddReportFormFields?.ended_at?.title}
          style={{ cursor: "pointer", padding: "20px", width: "100%" }}
          value={endedTime}
          onChange={setEndedTime}
          calendar={persian}
          locale={persian_fa}
          disableDayPicker
          format="HH:mm"
          plugins={[<TimePicker hideSeconds position="bottom" />]}
        />
      </div>
      {AddReportFormSchema?.keyof()?._def?.values.map(
        (_key) =>
          _key !== AddReportFormFields?.ended_at?.title && (
            <ReportFormTextField
              key={_key}
              schema={AddReportFormFields[_key]}
            />
          )
      )}

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.stop_controller_1_code?.title}
          text={AddReportFormFields?.stop_controller_1_code?.placeholder}
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          list={AddReportFormFields?.stop_controller_1_code?.listId}
          name={AddReportFormFields?.stop_controller_1_code?.title}
          id={AddReportFormFields?.stop_controller_1_code?.title}
          placeholder={AddReportFormFields?.stop_controller_1_code?.placeholder}
        />
        <datalist id={AddReportFormFields?.stop_controller_1_code?.listId}>
          {StopGuidanceCodes.map(({ code, title }) => (
            <option key={code} value={code}>
              {title}
            </option>
          ))}
        </datalist>
      </div>
      <ReportFormTextField
        schema={AddReportFormFields?.stop_controller_1_time}
      />

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.stop_controller_2_code?.title}
          text={AddReportFormFields?.stop_controller_2_code?.placeholder}
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          list={AddReportFormFields?.stop_controller_2_code?.listId}
          name={AddReportFormFields?.stop_controller_2_code?.title}
          id={AddReportFormFields?.stop_controller_2_code?.title}
          placeholder={AddReportFormFields?.stop_controller_2_code?.placeholder}
        />
        <datalist id={AddReportFormFields?.stop_controller_2_code?.listId}>
          {StopGuidanceCodes.map(({ code, title }) => (
            <option key={code} value={code}>
              {title}
            </option>
          ))}
        </datalist>
      </div>
      <ReportFormTextField
        schema={AddReportFormFields?.stop_controller_2_time}
      />

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.stop_controller_3_code?.title}
          text={AddReportFormFields?.stop_controller_3_code?.placeholder}
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          list={AddReportFormFields?.stop_controller_3_code?.listId}
          name={AddReportFormFields?.stop_controller_3_code?.title}
          id={AddReportFormFields?.stop_controller_3_code?.title}
          placeholder={AddReportFormFields?.stop_controller_3_code?.placeholder}
        />
        <datalist id={AddReportFormFields?.stop_controller_3_code?.listId}>
          {StopGuidanceCodes.map(({ code, title }) => (
            <option key={code} value={code}>
              {title}
            </option>
          ))}
        </datalist>
      </div>
      <ReportFormTextField
        schema={AddReportFormFields?.stop_controller_3_time}
      />

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue={AddReportFormFields?.stop_controller_4_code?.title}
          text={AddReportFormFields?.stop_controller_4_code?.placeholder}
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          list={AddReportFormFields?.stop_controller_4_code?.listId}
          name={AddReportFormFields?.stop_controller_4_code?.title}
          id={AddReportFormFields?.stop_controller_4_code?.title}
          placeholder={AddReportFormFields?.stop_controller_4_code?.placeholder}
        />
        <datalist id={AddReportFormFields?.stop_controller_4_code?.listId}>
          {StopGuidanceCodes.map(({ code, title }) => (
            <option key={code} value={code}>
              {title}
            </option>
          ))}
        </datalist>
      </div>
      <ReportFormTextField
        schema={AddReportFormFields?.stop_controller_4_time}
      />

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">
          ثبت سفارش
        </Button>
      </div>
    </form>
  );
};

export default AddReportForm;
