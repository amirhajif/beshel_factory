"use client";

import React, { useState, useEffect } from "react";
import LoginFormFields from "@/models/LoginFormFields";
import TextField from "@/components/shared/TextField";
import Button from "@/components/shared/Button";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import login from "@/apis/Login";
import Cookies from 'js-cookie'
import { useUserInfos } from "@/store/User";
import getUserInfo from "@/apis/getUserInfo";


const LoginForm = () => {
  const router = useRouter();

  const { info, setInfo, deleteInfo } = useUserInfos();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // let userInfos = JSON.parse(localStorage.getItem("infos"));
      // console.log("userinfos: " + userInfos?.fname + userInfos?.role);
      // if (userInfos !== null) {
      //   userInfos.role === "person"
      //     ? router.push("/dashboard")
      //     : userInfos.role === "admin"
      //     ? router.push("/panel")
      //     : router.push("/scanner");
      // }
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let formsElements = e.target.elements;
    let username = formsElements.namedItem(
      LoginFormFields?.Username?.title
    )?.value;
    let password = formsElements.namedItem(
      LoginFormFields?.Password?.title
    )?.value;

    const response = await login({ username: username, password: password })
    const token = response.data.data

    Cookies.set('token', token.access, { expires: 7, secure: true, sameSite: 'Strict' });
    Cookies.set('refreshToken', token.refresh, { expires: 7, secure: true, sameSite: 'Strict' });


    const userInfo = await getUserInfo()
    const user = userInfo.data.results[0]
    // const userInfo = { id: 1, username: username, role: 'planner' }
    setInfo({ id: user.id, username: user.username, role: user.role })

    try {
    } catch (error) { }
  };
  return (
    <div className="flex p-2 flex-col w-100 h-[100vh] bg-slate-200 items-center justify-center gap-10">
      {/* <p>{JSON.stringify(info)}</p> */}
      {/* <button onClick={deleteInfo}>delete</button> */}
      <p className="text-indigo-950 font-bold text-3xl">ورود به سامانه </p>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-10 w-[80%] md:w-[30%]">
        <TextField
          placeholder={LoginFormFields?.Username?.placeholder}
          name={LoginFormFields?.Username?.title}
          id={`_${LoginFormFields?.Username?.title}`}
        />
        <TextField
          type="password"
          placeholder={LoginFormFields?.Password?.placeholder}
          name={LoginFormFields?.Password?.title}
          id={`_${LoginFormFields?.Password?.title}`}
        />
        <Button>ورود</Button>
      </form>
    </div>
  );
};

export default LoginForm;
