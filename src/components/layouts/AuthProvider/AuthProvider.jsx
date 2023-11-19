"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
const AuthProvider = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // logic for redirect , if credential are not set => router.push("/");
    }
  }, []);
  return <section>{children}</section>;
};

export default AuthProvider;
