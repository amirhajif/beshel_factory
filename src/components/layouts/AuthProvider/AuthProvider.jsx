"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname, notFound } from "next/navigation";
import Cookies from "js-cookie";
import { useUserInfos } from "@/store/User";
const AuthProvider = ({ children }) => {
  const router = useRouter();
  const path = usePathname()
  const { setInfo } = useUserInfos();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/");
    }
    else {
      const user = JSON.parse(localStorage.getItem("userInfo"))
      setInfo(user)
      !path.includes(user.role) && router.push(`/${user.role}`)
    }
  }, []);
  return <section>{children}</section>;
};

export default AuthProvider;
