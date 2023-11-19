import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNavigation = ({ navItems }) => {
  const path = usePathname();

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-indigo-950">
      <div className="flex justify-evenly items-center">
        {navItems.map((item) => {
          return (
            <Link
              href={item.to}
              key={item.id}
              className={`px-4 py-2 flex flex-col items-center justify-center text-slate-50 ${
                path === item.to ? "bg-indigo-700" : ""
              }`}>
              <p>{item.icon}</p>
              <p className="text-xs">{item.link}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;
