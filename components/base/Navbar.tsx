import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center bg-blue-950 text-white">
      <nav className="container p-4 flex justify-between items-center">
        <Link href={`/`}>
          <h2>Home</h2>
        </Link>
        <ol className="flex gap-2">
          {["list", "account"].map((item) => (
            <Link href={`/${item}`}>
              <li>{item}</li>
            </Link>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Navbar;
