"use client";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Select from "../Select";
import FilterFields from "@/models/FilterFields";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Gregorian from "react-date-object/calendars/gregorian";
import Gregorian_en from "react-date-object/locales/gregorian_en";
import "react-multi-date-picker/styles/colors/red.css";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Label from "../Label";

import OrderCategories from "@/constants/OrderCategories";

const Filter = ({ options }) => {

  const searchParams = useSearchParams();

  const { replace } = useRouter();
  const pathname = usePathname();

  let [startedAt, setStartedAt] = useState("");
  let [finishedAt, setFinishedAt] = useState("");

  const resetForm = () => {
    setStartedAt("");
    setFinishedAt("");

    replace(`${pathname}`);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let formsElements = e.target.elements;

    let order_number = formsElements.namedItem(FilterFields?.order_number?.title)?.value;
    let machine = formsElements.namedItem(FilterFields?.machine?.title)?.value;
    let operator_id = formsElements.namedItem(FilterFields?.operator_id?.title)?.value;
    let category = formsElements.namedItem(FilterFields?.category?.title)?.value

    const params = new URLSearchParams(searchParams);

    // set category at url
    category != "" ? params.set("category", category) : params.delete("category");
    // set status at url
    order_number != "" ? params.set("order_number", order_number) : params.delete("order_number");
    // set operator id at url
    operator_id != "" ? params.set("operator_id", operator_id) : params.delete("operator_id");
    // set machine name at url
    machine != ""
      ? params.set("machine__id", Number(machine))
      : params.delete("machine__id");

    // set start date at url
    startedAt != ""
      ? params.set(
        "started_at",
        startedAt.convert(Gregorian, Gregorian_en).format("YYYY-MM-DD")
      )
      : params.delete("startedAt");

    // set finish date at url
    finishedAt != ""
      ? params.set(
        "ended_at",
        finishedAt.convert(Gregorian, Gregorian_en).format("YYYY-MM-DD")
      )
      : params.delete("finishedAt");

    replace(`${pathname}?${params}`);
  };


  return (
    <form
      className="p-2 w-full flex flex-wrap gap-1 items-center justify-evenly"
      onSubmit={onSubmit}>

      {/* select for order_number */}
      {/* <Select
        parentClassName="w-full md:w-1/4 "
        labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        forValue="order_number"
        text="کد سفارش"
        selectClassName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        selectId="order_number"
        options={options.orders}
        isOrder={true}
      /> */}
      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 ">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue='order_number'
          text='کد سفارش-انگلیسی'
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          list='order_number_list'
          name='order_number'
          id='order_number'
          placeholder='کد سفارش'
        />
        <datalist id='order_number_list'>
          {options.orders.map(({ order_number }) => (
            <option key={`operator${order_number}`} value={order_number}>
              {order_number}
            </option>
          ))}
        </datalist>
      </div>

      {/* select for operator */}
      {/* <Select
        parentClassName="w-full md:w-1/4 "
        labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        forValue="operator_id"
        text="اپراتور"
        selectClassName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        selectId="operator_id"
        options={options.operators}
      /> */}

      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 ">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue='operator_id'
          text='اپراتور'
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          list='operator_id_list'
          name='operator_id'
          id='operator_id'
          placeholder='اپراتور'
        />
        <datalist id='operator_id_list'>
          {options.operators.map(({ id, title }) => (
            <option key={`operator${id}`} value={id}>
              {title}
            </option>
          ))}
        </datalist>
      </div>

      <Select
        parentClassName="w-full md:w-1/4 "
        labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        forValue="machine"
        text="ماشین"
        selectClassName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        selectId="machine"
        options={options.machines}
      />

      <div className="w-full md:w-1/4">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue="startDate"
          text="تاریخ شروع"
        />
        <DatePicker
          style={{ cursor: "pointer", padding: "20px", width: "100%" }}
          value={startedAt}
          onChange={setStartedAt}
          calendar={persian}
          locale={persian_fa}
          className="red"
        />
      </div>

      <div className="w-full md:w-1/4">
        <Label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          forValue="finishedAt"
          text="تاریخ پایان"
        />
        <DatePicker
          style={{ cursor: "pointer", padding: "20px", width: "100%" }}
          value={finishedAt}
          onChange={setFinishedAt}
          calendar={persian}
          locale={persian_fa}
          minDate={startedAt}
          className="red"
        />
      </div>

      <Select
        parentClassName="w-full md:w-1/4 "
        labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        forValue="category"
        text="دسته بندی"
        selectClassName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        selectId="category"
        options={OrderCategories}
      />

      <div className="w-full md:w-1/4 flex gap-2">
        <Button className="bg-transparent hover:bg-green-500 w-1/2 text-green-700 font-light text-sm hover:text-white mt-6  py-1 px-4 border border-green-500 hover:border-transparent rounded">
          اعمال فیلتر
        </Button>
        <Button
          className="bg-transparent hover:bg-red-500 w-1/2 text-red-700 font-light text-sm hover:text-white mt-6  py-1 px-4 border border-red-500 hover:border-transparent rounded"
          type="reset"
          onClickCallback={resetForm}>
          حذف فیلتر
        </Button>
      </div>
    </form>
  );
};

export default Filter;
