"use client";
import React from "react";
import Cookies from "js-cookie";
const MobileHeader = () => {
  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('refreshToken')
    router.push('/')
  }

  return (
    <div className="flex p-3 gap-10 items-center bg-indigo-950">
      <p className="text-slate-50 text-xs">علیرضا غلامپور</p>
      <p className="text-slate-50 text-xs">123456789</p>
      <p className="mx-2 mt-1 text-sm font-medium text-slate-300" onClick={handleLogout}>خروج</p>
    </div>
  );
};

export default MobileHeader;
