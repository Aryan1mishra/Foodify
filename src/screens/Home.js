import React from "react";
import Navbar from "../component/Navbar";
import AllCards from "./AllCards";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <AllCards/>
      </div>
    </div>
  );
}
