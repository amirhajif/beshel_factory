"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const AuthProvider = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/");
    }
  }, []);
  return <section>{children}</section>;
};

export default AuthProvider;
/**
 *  // set info in zustand 1
    // role 2
    
    /**
     * 
     * const enum ={
     * planner:{
     * 
     *  routes:["planner" , "planner/..."]
     * }
     * ....
     * }
     * 
     * let flag=false;
     * enum[role].routes.map((route)=> )route === pathname) flag=true; 
     * 
     * 
     * 
     */
 