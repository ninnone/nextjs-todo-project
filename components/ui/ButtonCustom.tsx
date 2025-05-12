import Link from "next/link";
import React from "react";

interface ButtonParametersType {
  linkto: string;
  title: string;
}

const ButtonCustom = ({ linkto, title }: ButtonParametersType) => {
  return (
    <Link
      href={linkto}
      className=" outline-1 rounded-full px-4 py-2 bg-white  outline-blue-950 text-blue-950 hover:bg-blue-900 hover:text-white hover:outline-white"
    >
      <button>{title}</button>
    </Link>
  );
};

export default ButtonCustom;
