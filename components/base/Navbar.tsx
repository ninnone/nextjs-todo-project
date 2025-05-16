"use client";
import { Bell, MagnifyingGlass } from "phosphor-react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center text-black">
      <div className="container p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <MagnifyingGlass size={20} />
          <aside>search</aside>
        </div>
        <ol className="flex items-center gap-4">
          {/* {["list", "account"].map((item, key) => (
            <Link href={`/${item}`} key={key}>
              <li>{item}</li>
            </Link>
          ))} */}
          <li>
            <div className="flex p-2 items-center justify-center outline outline-black/20 rounded-xl">
              <Bell weight="fill" size={20} />
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <img
                src="/logo.jpg"
                alt="user"
                className="size-8 object-cover bg-gray-200 rounded-full"
              />
              <div className="flex flex-col">
                <p>Robinne ninone</p>
                <small>Student</small>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
