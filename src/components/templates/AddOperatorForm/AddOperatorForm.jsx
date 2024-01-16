"use client";
import React from "react";
import AddOperatorFormFields from "@/models/AddOperatorFormFields";
import Button from "@/components/shared/Button";
import addOperator from "@/apis/addOperator";

const AddOperatorForm = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let data = {
      [AddOperatorFormFields?.FirstName?.title]: e.target.elements.namedItem(
        AddOperatorFormFields?.FirstName?.title
      )?.value,
      [AddOperatorFormFields?.LastName?.title]: e.target.elements.namedItem(
        AddOperatorFormFields?.LastName?.title
      )?.value,
      [AddOperatorFormFields?.CodeMelli?.title]: e.target.elements.namedItem(
        AddOperatorFormFields?.CodeMelli?.title
      )?.value,
    };

    data = {
      ...data,
      username: `${e.target.elements.namedItem(AddOperatorFormFields?.FirstName?.title)
        ?.value
        }${e.target.elements.namedItem(AddOperatorFormFields?.LastName?.title)
          ?.value
        }`,
    };

    let response = await addOperator(data);
  };

  return (
    <form
      className="flex flex-col md:w-[70%] w-[90%] gap-5"
      onSubmit={handleFormSubmit}>
      <input
        className="p-3 rounded-lg"
        type="text"
        name={AddOperatorFormFields?.FirstName?.title}
        id={AddOperatorFormFields?.FirstName?.title}
        placeholder={AddOperatorFormFields?.FirstName?.placeholder}
      />
      <input
        className="p-3 rounded-lg"
        type="text"
        name={AddOperatorFormFields?.LastName?.title}
        id={AddOperatorFormFields?.LastName?.title}
        placeholder={AddOperatorFormFields?.LastName?.placeholder}
      />
      <input
        className="p-3 rounded-lg"
        type="text"
        name={AddOperatorFormFields?.CodeMelli?.title}
        id={AddOperatorFormFields?.CodeMelli?.title}
        placeholder={AddOperatorFormFields?.CodeMelli?.placeholder}
      />
      <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">
        افزودن اپراتور
      </Button>
    </form>
  );
};

export default AddOperatorForm;
