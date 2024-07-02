import React from "react";

export default function Cards() {
  return (
    <div className="flex">
      <div class="w-[20%] overflow-hidden shadow- m-2 border-2 border-red-200 rounded-xl">
        <div className="flex items-center justify-center m-2">
          <img
            className="rounded-full"
            src="https://www.dominos.co.in/files/items/Farmhouse.jpg"
            alt="pizza"
          />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">FARM HOUSE</div>
          <div className="flex space-x-2">
            <select className="border-2 border-red-200 rounded-full w-20 cursor-pointer flex items-center justify-center">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="border-2 border-red-200 rounded-full w-20 cursor-pointer flex items-center justify-center">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="full">Full</option>
            </select>
          </div>
        </div>
      </div>
      <div class="w-[20%] overflow-hidden shadow- m-2 border-2 border-red-200 rounded-xl">
        <div className="flex items-center justify-center m-2">
          <img
            className="rounded-full"
            src="https://www.dominos.co.in/files/items/Peppy_Paneer.jpg"
            alt="pizza"
          />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">PEPPY PANEER</div>
          <div className="flex space-x-2">
            <select className="border-2 border-red-200 rounded-full w-20 cursor-pointer flex items-center justify-center">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="border-2 border-red-200 rounded-full w-20 cursor-pointer flex items-center justify-center">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="full">Full</option>
            </select>
          </div>
        </div>
      </div>
      <div class="w-[20%] overflow-hidden shadow- m-2 border-2 border-red-200 rounded-xl">
        <div className="flex items-center justify-center m-2">
          <img
            className="rounded-full"
            src="https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg"
            alt="pizza"
          />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">MEXICAN GREEN WAVE</div>
          <div className="flex space-x-2">
            <select className="border-2 border-red-200 rounded-full w-20 cursor-pointer flex items-center justify-center">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="border-2 border-red-200 rounded-full w-20 cursor-pointer flex items-center justify-center">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="full">Full</option>
            </select>
          </div>
        </div>
      </div>
      <div class="w-[20%] overflow-hidden shadow- m-2 border-2 border-red-200 rounded-xl">
        <div className="flex items-center justify-center m-2">
          <img
            className="rounded-full"
            src="https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg"
            alt="pizza"
          />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">DOUBLE CHEESE MARGHERIT</div>
          <div className="flex space-x-2">
            <select className="border-2 border-red-200 rounded-full w-20 cursor-pointer flex items-center justify-center">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="border-2 border-red-200 rounded-full w-20 cursor-pointer flex items-center justify-center">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="full">Full</option>
            </select>
          </div>
        </div>
      </div>
      <div class="w-[20%] overflow-hidden shadow- m-2 border-2 border-red-200 rounded-xl">
        <div className="flex items-center justify-center m-2">
          <img
            className="rounded-full"
            src="https://www.dominos.co.in/files/items/IndianTandooriPaneer.jpg"
            alt="pizza"
          />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">INDI TANDOORI PANEER</div>
          <div className="flex space-x-2">
            <select className="border-2 border-red-200 rounded-full w-20 cursor-pointer flex items-center justify-center">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="border-2 border-red-200 rounded-full w-20 cursor-pointer flex items-center justify-center">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="full">Full</option>
            </select>
          </div>
        </div>
      </div>
      
    </div>
  );
}
