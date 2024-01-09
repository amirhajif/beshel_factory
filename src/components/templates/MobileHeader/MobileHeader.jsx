"use client";
import React from "react";
import Cookies from "js-cookie";
import { useUserInfos } from "@/store/User";
const MobileHeader = () => {
  const { info } = useUserInfos()
  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('refreshToken')
    localStorage.removeItem("userInfo")
    router.push('/')
  }

  return (
    <div className="flex p-3 gap-10 items-center bg-indigo-950">
      <p className="text-slate-50 text-xs">{info.username}</p>
      <p className="text-slate-50 text-xs">{info.id}</p>
      <p className="mx-2 mt-1 text-sm font-medium text-slate-300" onClick={handleLogout}>خروج</p>
    </div>
  );
};

export default MobileHeader;
