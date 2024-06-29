import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-red-200 p-2 flex space-x-[50%] items-center">
        <div className="">
          <a className="m-2 font-bold text-2xl" href="/">
            Navbar
          </a>
        </div>
        <ul className="flex space-x-[80%]">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
      </nav>
      
    </div>
  );
}
