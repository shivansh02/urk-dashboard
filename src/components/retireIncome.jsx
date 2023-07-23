import React from "react";
// import StackedBarGraph from "./stackedBarGraph"
import BarGraph from "./bar";
import Donut from "./donut";
import { Chart as ChartJS, Tooltip, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Select from "react-select";

ChartJS.register(Tooltip, ArcElement);

const RetireIncome = () => {
  const avgData = {
    labels: ["", ""],
    datasets: [
      {
        data: [75, 25], // Replace value1 and value2 with your actual data values for Field 1 and Field 2
        backgroundColor: ["#22D6AA", "#D4F7EE"], // You can customize the colors as per your preference
        hoverBackgroundColor: ["#22D6AA", "#D4F7EE"], // Colors when the chart segments are hovered over
        borderWidth: [1, 0.5],
        cutout: "75%",
      },
    ],
  };


  // Optional chart configuration options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: false, // Disable tooltips on hover
    },
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bolder 20px sans-serif";
      ctx.fillStyle = "black";
      ctx.fillText(
        `${data.datasets[0].data[0]}%`,
        chart.width / 2,
        chart.height / 2
      ); // Display the data in the center of the chart
    },
  };

  const dummyData = {
    myGoal: "300,000",
    goalAchieved: "59",
    monthlyIncome: "300",
  };
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none', // Remove the borders
      boxShadow: 'none', // Remove the box shadow
    }),
    indicatorSeparator: () => ({
      display: 'none', // Remove the line between the hint and the arrow
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      paddingLeft: '2px', // Decrease the spacing between the arrow and the text
      paddingRight: '2px', // Decrease the spacing between the arrow and the text
    }),
    option: (provided) => ({
      ...provided,
      fontSize: '12px', // Adjust the font size to make it smaller
      padding: '4px 8px',
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: '12px', // Adjust the font size of the selected value to make it smaller
    }),
  };

  
  const ageOptions = [
    { value: "Under 30", label: "Under 30" },
    { value: "30-40", label: "30-40" },
    { value: "40+", label: "40+" },
  ];
  const salaryOptions = [
    { value: "$20K-$30k", label: "$20K-$30k" },
    { value: "$30K-$50k", label: "$30K-$50k" },
    { value: "$50k+", label: "$50k+" },
  ];
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Trans", label: "Trans" },
  ];

  const topData = {
    labels: ["", ""],
    datasets: [
      {
        data: [95, 5], // Replace value1 and value2 with your actual data values for Field 1 and Field 2
        backgroundColor: ["#22D6AA", "#D4F7EE"], // You can customize the colors as per your preference
        hoverBackgroundColor: ["#22D6AA", "#D4F7EE"], // Colors when the chart segments are hovered over
        borderWidth: [1, 0.5],
        cutout: "75%",
      },
    ],
  };

  const meData = {
    labels: ["", ""],
    datasets: [
      {
        data: [59, 41], // Replace value1 and value2 with your actual data values for Field 1 and Field 2
        backgroundColor: ["#22D6AA", "#D4F7EE"], // You can customize the colors as per your preference
        hoverBackgroundColor: ["#22D6AA", "#D4F7EE"], // Colors when the chart segments are hovered over
        borderWidth: [1, 0.5],
        cutout: "75%",
      },
    ],
  };

  return (
    <div className="retire-income px-8 md:px-20 pt-12">
      <h2 className="font-roboto-slab font-bold text-accent text-sm">Retirement Income</h2>
      <h2 className="font-roboto-slab font-bold text-textDark text-xl">Starting Income 2056</h2>
      <div className="stats-row my-4 md:mb-8 flex flex-col md:flex-row justify-evenly">
        <div className="my-goal w-full md:w-36 py-4 mr-3 flex flex-col border-b-2 border-accent">
          <h3 className="font-roboto-slab font-bold text-xl">
            ${dummyData.myGoal}
          </h3>
          <h3 className="text-gray-400 text-xs font-semibold">My Goal</h3>
        </div>
        <div className="stats-row flex flex-row">
          <div className="goal-achieved w-full md:w-36 flex flex-col py-4 mr-2 md:mx-3 border-b-2 border-accent">
            <h3 className="font-roboto-slab font-bold text-xl">
              {dummyData.goalAchieved}%
            </h3>
            <h3 className="text-gray-400 text-xs font-semibold">My Goal</h3>
          </div>
          <div className="monthly-income w-full md:w-36 flex flex-col py-4 ml-2 md:mx-3 border-b-2 border-accent">
            <h3 className="font-roboto-slab font-bold text-xl">
              ${dummyData.monthlyIncome}
            </h3>
            <h3 className="text-gray-400 text-xs font-semibold">My Goal</h3>
          </div>
        </div>
      </div>
      <h2 className="font-semibold  text-textDark font-roboto-slab mt-10 md:mt-0 mb-4">Contributions Overtime</h2>
      <div className="legend-row flex flex-row justify-between mb-4">
        <div className="legend-item flex flex-col md:flex-row items-start md:items-center ">
          <div className="h-2 w-4 mr-2 mb-2 md:mb-0 rounded-full bg-darkBlue"></div>
          <h2 className="font-semibold text-xs text-gray-400 mr-2">Employer:</h2>
          <h2 className="font-semibold text-sm md:text-xs text-textDark">$73,500</h2>
        </div>
        <div className="legend-item flex flex-col md:flex-row items-start md:items-center ">
          <div className="h-2 w-4 mr-2 mb-2 md:mb-0 rounded-full bg-accent"></div>
          <h2 className="font-semibold text-xs text-gray-400 mr-2">Employee:</h2>
          <h2 className="font-semibold text-sm md:text-xs text-textDark">$52,500</h2>
        </div>
        <div className="legend-item flex flex-col md:flex-row items-start md:items-center ">
          <div className="h-2 w-4 mr-2 mb-2 md:mb-0 rounded-full bg-lightestBlue"></div>
          <h2 className="font-semibold text-xs text-gray-400 mr-2">Total Interest:</h2>
          <h2 className="font-semibold text-sm md:text-xs text-textDark">$244,313</h2>
        </div>
        </div>
      <BarGraph />
        <div className="section-compare mt-12 flex flex-col">
        <h1 className="text-xl font-bold font-roboto-slab textDark">How do I compare to my peers?</h1>
        <h1 className="text-sm text-gray-400 font-semibold mt-1">These numbers represent current goal achievement</h1>
      <div className="flex flex-col md:flex-row">
        
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row  items-center justify-start border-b-2 w-full md:w-auto">
            <h2 className="text-sm font-semibold">Age:</h2>
          <Select
            options={ageOptions}
            defaultValue={ageOptions[0]}
            styles={customStyles}
            placeholder=""
          />
          </div>
          <div className="flex flex-row items-center justify-start  border-b-2 w-full md:w-auto">
            <h2 className="text-sm font-semibold">Salary:</h2>
          <Select
            options={salaryOptions}
            defaultValue={salaryOptions[0]}
            styles={customStyles}
            placeholder=""
          />
          </div>
          <div className="flex flex-row  items-center justify-start border-b-2 w-full md:w-auto">
            <h2 className="text-sm font-semibold">Gender:</h2>
          <Select
            options={genderOptions}
            defaultValue={genderOptions[0]}
            styles={customStyles}
            placeholder=""
          />
          </div>
          
        </div>
        <div className="flex flex-row w-80 justify-evenly items-end">
          <div className="w-20">
            <Donut data={avgData} options={options} plugins={[textCenter]} />
            <h3 className="font-bold text-textDark text-xs text-center">Average 78%</h3>
          </div>
          <div className="w-20">
            <Donut data={topData} options={options} plugins={[textCenter]} />
            <h3 className="font-bold text-textDark text-xs text-center">Top 95%</h3>
          </div>
          <div className="w-20">
            <Donut data={meData} options={options} plugins={[textCenter]} />
            <h3 className="font-bold text-textDark text-xs text-center">Me 59%</h3>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RetireIncome;
