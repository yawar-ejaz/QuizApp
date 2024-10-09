import React, { useState } from "react";

const Practice2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle expanded state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col space-y-4 p-4 bg-gray-100 h-screen relative">
      {/* 1st div: Question (header with scrollable content and expand button) */}
      <div
        className={`bg-white text-blue-700 p-3 shadow-md flex row-auto ${
          isExpanded
            ? "fixed top-0 left-0 w-[calc(100%-2rem)] h-[calc(100%-2rem)] z-50 m-4 rounded-md"
            : "h-[20vh] rounded-t-md"
        }`}
      >
        <div className="h-full overflow-y-auto">
          <h2 className="text-md">
            Write a program to check whether a number is a prime number or not.
            {/* Add long text to demonstrate scrolling */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            dui sit amet ipsum auctor, nec malesuada magna malesuada. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dui
            sit amet ipsum auctor, nec malesuada magna malesuada. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed euismod dui sit
            amet ipsum auctor, nec malesuada magna malesuada. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed euismod dui sit amet
            ipsum auctor, nec malesuada magna malesuada. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed euismod dui sit amet ipsum
            auctor, nec malesuada magna malesuada.
          </h2>
        </div>
        <div className="ml-4 flex flex-col space-y-3 p-1">
          {/* Button to toggle expand/collapse */}
          <button
            onClick={toggleExpand}
            className="bg-blue-700 text-white px-2 py-1 rounded-md shadow-md"
          >
            {isExpanded ? "Minimize" : "Expand"}
          </button>
          {/* Button group for Prev and Next */}
          <div className="flex justify-between mt-2">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-l-md shadow-md">
              Prev
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-r-md shadow-md">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-[80vh]">
        {/* 2nd div: Code editor section */}
        <textarea
          className="rounded-tl-md w-full h-full text-gray-100 bg-gray-900 font-mono resize-none outline-none p-4 border-l-2"
          defaultValue={`/* Write your code here */`}
          readOnly={false} // Set to false to allow writing
        />

        {/* Right-side div: Input and Output section */}
        <div className="w-1/3 bg-gray-200 rounded-r-md text-gray-900 shadow-md flex flex-col h-full">
          {/* 3rd div: Input section */}
          <div className="flex flex-col bg-light-blue-300 rounded-tr-md">
            {/* <h2 className="text-sm py-1 text-center rounded-t-md text-blue-900">
              Input
            </h2> */}
            <textarea
              className="rounded-md m-2 bg-light-blue-200 text-gray-900 font-mono resize-none outline-none h-36 p-2"
              //   defaultValue={`Write your input here`}
              placeholder="Write your input here"
              readOnly={false}
            />
          </div>

          {/* 4th div: Output section (below input) */}
          <div className="flex flex-col bg-light-blue-300 rounded-br-md">
            {/* <h2 className="text-sm py-1 text-center text-blue-900">Output</h2> */}
            <textarea
              className="rounded-md m-2 bg-light-blue-200 text-gray-900 font-mono resize-none outline-none h-36 p-2"
              //   defaultValue={`Output will be displayed here`}
              placeholder="Output will be displayed here"
              readOnly={false} // Change to true if you want to prevent editing
            />
          </div>
          <div className="flex space-x-0 mx-auto my-auto">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-l-md hover:bg-blue-600">
              Save
            </button>
            <button className="bg-red-500 text-white px-4 py-2 border-l-0 hover:bg-red-600">
              Run
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-r-md border-l-0 hover:bg-green-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice2;
