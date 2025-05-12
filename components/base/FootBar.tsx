import Link from "next/link";
import React from "react";

const FootBar = () => {
  return (
    <div className="flex justify-center items-center bg-blue-950 text-white">
      <nav className="container p-4 flex justify-between items-center">
        <Link href={`/`}>
          <div className="flex flex-col gap-2 max-w-[400px]">
            <h2>Home</h2>
            <p>Some text to describe your application</p>
          </div>
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

export default FootBar;
