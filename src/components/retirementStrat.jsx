import React from "react";
import { useState } from "react";

const RetirementStrat = () => {
  const [value, setValue] = useState(20);
  const [age, setAge] = useState(65);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleInputChangeAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <div className="bg-[#FBFBFA] px-8 py-8 mt-12 ml-0 md:ml-8 rounded-xl">
      <h1 className="font-roboto-slab text-semibold text-textDark text-lg mb-4">Retirement Strategy</h1>
      <h2 className="text-sm font-semibold text-gray-700 mb-2">Employee Contribution</h2>
      <div className="flex items-center">
        <input
          type="range"
          className="w-52 h-2 mr-3 bg-gray-300 rounded-full accent-accent  cursor-pointer"
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={handleInputChange}
        />
        <output className="text-gray-700">{value}%</output>
      </div>
      <h2 className="text-sm font-semibold text-gray-700 mt-4 mb-2">Retirement Age</h2>
      <div className="flex items-center border-b-2 border-gray-200 pb-6 mb-6">
        <input
          type="range"
          className="w-52 h-2 mr-3 bg-gray-300 rounded-full accent-accent  cursor-pointer"
          min="0"
          max="100"
          step="1"
          value={age}
          onChange={handleInputChangeAge}
        />
        <output className="text-gray-700">{age}</output>
      </div>

      <div className="stat-row flex flex-row justify-between">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Employee Contribution
        </h2>
        <h2 className="text-sm font-semibold text-gray-700">8.4%</h2>
      </div>
      <div className="stat-row flex flex-row justify-between">
        <h2 className="text-sm font-semibold text-gray-700">Interest Rate</h2>
        <h2 className="text-sm font-semibold text-gray-700">5%</h2>
      </div>
      <button class="bg-accent w-full rounded-xl hover:bg-blue-700 text-white font-semibold py-3 px-4 mt-6">
        Update
      </button>
      <div className="stat-row flex justify-center">
        <a href="#" className="text-sm font-semibold text-accent text-center mt-6">
          {"View Help Docs>"}
        </a>
      </div>
      </div>
      <div className="hidden md:block mt-6   border-l-2 ml-8 border-accent px-4">
      <h2 className="text-gray-600 ">Are you considering a<br/><span className="font-bold text-gray-700">Housing Advance?</span></h2>
      <h2 className="text-gray-400 text-sm my-2">Limited time reduced interest.</h2>
      <a href="#"  className="text-accent font-semibold text-sm">{"Learn More >"}</a>
      </div>
    </div>
  );
};

export default RetirementStrat;
