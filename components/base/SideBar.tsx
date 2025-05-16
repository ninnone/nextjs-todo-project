"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Clipboard,
  Gear,
  List,
  ListBullets,
  User,
  UserCircle,
} from "phosphor-react";
import React from "react";
import FootBar from "./FootBar";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col h-screen w-full max-w-[200px] p-6 justify-between">
      <div className="flex flex-col gap-[50px]">
        <div className="p-4">
          <Link href={"/"}>
            <h5>Plan your Futur</h5>
          </Link>
        </div>

        <div>
          <ul className="flex flex-col gap-4">
            {[
              {
                link: "/",
                title: "Home",
                icon: <UserCircle size={24} />,
              },
              {
                link: "/todo",
                title: "Todo List",
                icon: <Clipboard size={24} />,
              },
              {
                link: "/settings",
                title: "Settings",
                icon: <Gear size={24} />,
              },
            ].map((item, index) => {
              const active = pathname.includes(item.link.toLowerCase());
              return (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`flex gap-2 items-center p-2 rounded-xl ${
                      active && "bg-gray-300"
                    }`}
                  >
                    {item.icon}
                    <p>{item.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <FootBar />
    </nav>
  );
};

export default SideBar;
