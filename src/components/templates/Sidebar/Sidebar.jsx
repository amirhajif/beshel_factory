"use client";
import React from "react";
import Avatar from "@/assets/userAvatar.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
const Sidebar = ({ navItems }) => {
  let path = usePathname();

  return (
    <div className="flex flex-col bg-indigo-950 w-[15%] h-screen px-4 py-8 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l">
      <div className="flex flex-col items-center mx-2">
        <h4 className="mx-2 mt-2 font-medium text-slate-200">علیرضا غلامپور</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-slate-300 d">
          123456798
        </p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            localStorage.setItem("infos", null);
            router.push("/");
          }}
          className="mx-2 mt-1 text-sm font-medium text-slate-300">
          خروج
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {navItems.map((item) => {
            return (
              <Link
                className={`flex items-center px-4 py-3 text-gray-700 my-4 ${
                  path === item.to ? "bg-indigo-700" : ""
                } rounded-lg hover:bg-indigo-900`}
                key={item.id}
                href={item.to}>
                {item.icon}
                <span className="text-slate-50 mx-4 font-medium">
                  {item.link}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
