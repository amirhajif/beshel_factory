"use client";
import React from "react";
import Button from "@/components/shared/Button";
// import addOperator from "@/apis/addOperator";
import sendNotif from "@/utils/sendNotif";

const AddProjectForm = () => {
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let formsElements = e.target.elements;

        let companyName = formsElements.namedItem('projectName')?.value
        try {
            // await addOperator(data);
            sendNotif("با موفقیت ساخته شد.", "success");
        } catch (err) {
            sendNotif("خطایی رخ داد.", "error");
            console.log(err);
        }
        e.target.reset();
    };

    return (
        <form
            className="flex flex-col md:w-[70%] w-[90%] gap-5"
            onSubmit={handleFormSubmit}>
            <input
                className="p-3 rounded-lg"
                type="text"
                name="projectName"
                id="projectName"
                placeholder="نام پروژه"
            />
            <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">
                افزودن پروژه
            </Button>
        </form>
    );
};

export default AddProjectForm;
