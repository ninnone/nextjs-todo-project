import Link from "next/link";
import React from "react";

interface ButtonParametersType {
  linkto?: string;
  title: string;
  icon?: React.ReactNode;
}

const ButtonCustom = ({ linkto, title, icon }: ButtonParametersType) => {
  return (
    <>
      {linkto ? (
        <Link
          href={linkto}
          className=" outline-1 rounded-full px-4 py-2 bg-white  outline-blue-950 text-blue-950 hover:bg-blue-900 hover:text-white hover:outline-white flex justify-center gap-2"
        >
          {icon}
          <button>{title}</button>
        </Link>
      ) : (
        <div className=" outline-1 rounded-full px-4 py-2 bg-white  outline-blue-950 text-blue-950 hover:bg-blue-900 hover:text-white hover:outline-white flex justify-center">
          {icon}
          <button>{title}</button>
        </div>
      )}
    </>
  );
};

export default ButtonCustom;
