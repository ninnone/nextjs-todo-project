import Link from "next/link";
import React from "react";

const FootBar = () => {
  return (
    <div className="flex justify-center items-center bg-blue-950/50 text-white rounded-2xl">
      <nav className="p-4 flex flex-col justify-between gap-8">
        <Link href={`/`}>
          <div className="flex flex-col gap-2 max-w-[400px]">
            <h5>Home</h5>
            <p>Some text to describe your application</p>
          </div>
        </Link>
        {/* <div className="flex flex-col gap-2">
          <h6>links</h6>
          <ol className="flex flex-col gap-1">
            {["list", "account"].map((item, key) => (
              <Link href={`/${item}`} key={key}>
                <li>
                  <p className="leading-4">{item}</p>
                </li>
              </Link>
            ))}
          </ol>
        </div> */}
      </nav>
    </div>
  );
};

export default FootBar;
