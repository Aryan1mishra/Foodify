import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-red-200 p-2 flex space-x-10 items-center">
        <div className="">
          <Link className="m-2 font-bold text-2xl" to="/">
            Foodfiy
          </Link>
        </div>
        <ul className="flex space-x-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/login">Login</Link>
          </li>
         
        </ul>
      </nav>
    </div>
  );
}
