import React from "react";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Today = () => {
  const dummyData = {
    today: "19,892",
    year: "4,000",
    interest: "1,892",
  };

  const options = [
    { value: "I want to", label: "I want to" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="today flex flex-col md:mb-8 bg-[#FBFBFA] p-6 md:p-0 rounded-2xl">
      <h1 className="font-roboto-slab text-textDark font-bold text-sm">
        Today
      </h1>
      <h2 className="font-roboto-slab text-textDark font-bold text-4xl md:text-2xl mb-1">
        ${dummyData.today}
      </h2>
      <h3 className="text-gray-400 font-semibold text-xs mb-8 md:mb-4">
        Account Balance
      </h3>
      <div className="flex flex-row md:flex-col ">
        <div className="mr-10 md:mr-0">
          <h2 className="font-roboto-slab font-bold text-textDark text-md">
            ${dummyData.year}
          </h2>
          <h3 className="text-gray-400 font-semibold text-xs mb-4">
            Year-to-Date
          </h3>
          </div>
          <div>
          <h2 className="font-roboto-slab font-bold text-textDark  text-md">
            ${dummyData.interest}
          </h2>
          <h3 className="text-gray-400 font-semibold text-xs mb-4">
            Total Interest
          </h3>
        </div>
      </div>
      <div className="relative">
        <select
          className="block appearance-none w-full md:w-min bg-accent text-white py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none text-center "
          onChange={handleSelectChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* <div className="pointer-events-none md:absolute md:-y-0 md:top-3 md:right-36 flex items-center px-2 text-white hidden md:block">
  <IoMdArrowDropdown></IoMdArrowDropdown>
</div> */}
      </div>
    </div>
  );
};

export default Today;
