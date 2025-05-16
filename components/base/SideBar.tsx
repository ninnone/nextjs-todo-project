"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clipboard, Gear, UserCircle } from "phosphor-react";
import FootBar from "./FootBar";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col h-screen w-full max-w-[250px] p-6 justify-between">
      <div className="flex flex-col gap-[50px]">
        <div className="p-4 flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="logo"
            className="size-12 rounded-xl object-cover"
          />
          <Link href={"/"}>
            <h6 className="font-black">Plan your Futur</h6>
          </Link>
        </div>

        <div>
          <ul className="flex flex-col gap-4">
            {[
              {
                link: "/",
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
                    className={`flex gap-2 items-center p-4 rounded-full ${
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
