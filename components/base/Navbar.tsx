"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Plan Your Future,Young girls
        </Link>
        <nav className="flex gap-4 items-center text-gray-700">
          <Link
            href="/"
            className={`hover:text-blue-500 ${
              pathname === "/" ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/account"
            className={`hover:text-blue-500 ${
              pathname === "/account" ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Account
          </Link>
          <Link
            href="/account"
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm"
          >
            + Add Task
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
