"use client";
import React from "react";
import AddOperatorFormFields from "@/models/AddOperatorFormFields";
import Button from "@/components/shared/Button";

const AddOperatorForm = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.namedItem(
      AddOperatorFormFields?.Name?.title
    )?.value;
    const codeMelli = e.target.elements.namedItem(
      AddOperatorFormFields?.CodeMelli?.title
    )?.value;

    console.log(name, codeMelli);
  };

  return (
    <form
      className="flex flex-col md:w-[70%] w-[90%] gap-5"
      onSubmit={handleFormSubmit}>
      <input
        className="p-3 rounded-lg"
        type="text"
        name={AddOperatorFormFields?.Name?.title}
        id={AddOperatorFormFields?.Name?.title}
        placeholder={AddOperatorFormFields?.Name?.placeholder}
      />
      <input
        className="p-3 rounded-lg"
        type="text"
        name={AddOperatorFormFields?.CodeMelli?.title}
        id={AddOperatorFormFields?.CodeMelli?.title}
        placeholder={AddOperatorFormFields?.CodeMelli?.placeholder}
      />
      <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">
        ثبت سفارش
      </Button>
    </form>
  );
};

export default AddOperatorForm;
