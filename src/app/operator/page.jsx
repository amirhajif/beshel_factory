"use client";
import { useState } from "react";

import DashboardContent from "@/components/layouts/DashboardContent";

import DashboardWrapper from "@/components/layouts/DashboardWrapper";
import OperatorNavbarItems from "@/constants/OperatorNavbarItems";

import Button from "@/components/shared/Button";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Label from "@/components/shared/Label";
import TextField from "@/components/shared/TextField";

const Operator = () => {
  let [inputDate, setInputDate] = useState(new Date());
  let [inputTime, setInputTime] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <DashboardWrapper navItems={OperatorNavbarItems}>
      <DashboardContent>
        <form
          className="w-full h-[80%] costume-scroll overflow-scroll max-w-lg flex gap-y-3 flex-wrap -mx-3 mb-6"
          onSubmit={handleSubmit}>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="startDate"
              text="تاریخ"
            />
            <DatePicker
              style={{ cursor: "pointer", padding: "20px" }}
              value={inputDate}
              onChange={setInputDate}
              calendar={persian}
              locale={persian_fa}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
            <Label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="finishDate"
              text="ساعت"
            />
            <DatePicker
              style={{ cursor: "pointer", padding: "20px" }}
              value={inputTime}
              onChange={setInputTime}
              calendar={persian}
              locale={persian_fa}
              disableDayPicker
              format="HH:mm"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="count"
              text="اپراتور"
            />
            <TextField
              name="count"
              id="count"
              placeholder="۱۵"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="count"
              text="ماشین "
            />
            <TextField
              name="count"
              id="count"
              placeholder="۱۵"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="count"
              text="مرحله"
            />
            <TextField
              name="count"
              id="count"
              placeholder="۱۵"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="count"
              text="شماره قطعات"
            />
            <TextField
              name="count"
              id="count"
              placeholder="15 16 17"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="count"
              text="St(m)"
            />
            <TextField
              name="count"
              id="count"
              placeholder="1"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="count"
              text="تعداد سالم"
            />
            <TextField
              name="count"
              id="count"
              placeholder="۱۵"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="count"
              text="تعداد ناسالم"
            />
            <TextField
              name="count"
              id="count"
              placeholder="۱۵"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="count"
              text="کنترل توقف 1 - T(m) "
            />
            <TextField
              name="count"
              id="count"
              placeholder="s1-120"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="count"
              text="2 - T(m) "
            />
            <TextField
              name="count"
              id="count"
              placeholder="s2-120"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="count"
              text="کنترل توقف 3 - T(m) "
            />
            <TextField
              name="count"
              id="count"
              placeholder="s3-120"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="count"
              text="کنترل توقف 4 - T(m) "
            />
            <TextField
              name="count"
              id="count"
              placeholder="s4-120"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>

          <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">
              ثبت سفارش
            </Button>
          </div>
        </form>
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Operator;
