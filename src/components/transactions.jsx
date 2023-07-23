import React from "react";

const Transactions = () => {
  const dummyData = [
    {
      date: "2020-08-07",
      transaction: "Withdrawal Transaction to Bank-XXX11",
    },
    {
      date: "2020-08-21",
      transaction: "Withdrawal Transaction to Bank-XXX11",
    },
    {
      date: "2020-08-16",
      transaction: "Withdrawal Transaction to Bank-XXX11",
    },
  ];
  return (
    <div
      className="py-4">
      <div className="flex flex-col bg-[#FBFBFA] p-6 md:p-0 rounded-2xl">
      <h1 className="font-roboto-slab font-semibold text-textDark mb-4 text-lg">Recent Transactions</h1>
        {dummyData.map((data) => (
          <div className="flex flex-col justify-between border-b-2 border-gray-200 py-3">
            <h2 className="text-xs text-gray-400 font-semibold">{data.date}</h2>
            <h2 className="text-xs text-textDark font-semibold">{data.transaction}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
