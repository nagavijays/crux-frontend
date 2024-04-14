'use client'

import React, { useState } from "react";
import axios from "axios";
import DataTable from "./DataTable";

// Hero.js

const Hero = () => {
  const [url, setUrl] = useState("");
  const [yyyymm, setYyyymm] = useState("");

  const [tableData, setTableData] = useState([]);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleYyyymmChange = (event) => {
    setYyyymm(event.target.value);
  };

  const formatData = (responseData) => {

    const fields = ['fp', 'fcp', 'dcl', 'ol', 'fid', 'ttfb', 'cls', 'lcp'];
    const result = responseData ? fields.map(field => {
      let slowval = `slow_${field}`;
      let fastval = `fast_${field}`;
      let avgval = `avg_${field}`;
      let p75val = `p75_${field}`;
      return {
        name: field,
        slow: responseData[slowval],
        fast: responseData[fastval],
        avg: responseData[avgval],
        p75: responseData[p75val]
      };
    }): [];
    return result;


  }

  // Handle the search button click event

  const handleSearchButtonClick = async (event) => {
    // event.preventDefault();

    //https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=AIzaSyC9O0Dx9sJ6HufMEf5DB3jDOKwPsu0x3og
    // Make a call to the Crux API
    // try {
    //   const response = await fetch(`https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       origin: url,
    //       formFactor: "DESKTOP",
    //       metrics: ["cumulative_layout_shift", "first_contentful_paint", "first_input_delay", "interaction_to_next_paint", "largest_contentful_paint", "experimental_time_to_first_byte"]
    //     }),
    //   });

    // axios query to http://localhost:4040/query?originUrl=https://developer.intuit.com&yyyymm=202403

    try {
      const response = await axios.get(`http://localhost:4040/query?originUrl=${url}&yyyymm=202403`);


      // Set the table data
      console.log("data:::::::::" + JSON.stringify(response.data[0]));
      var formattedData = formatData(response.data[0]);
      setTableData(formattedData);
    } catch (error) {
      console.error("Error fetching data from Crux API:", error);
    }

  };

  return (
    <div className="container px-5 py-24 mx-auto">
      <section className="text-white-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xl text-indigo-500 tracking-widest font-medium title-font mb-1">Crux Report App</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Enter a valid url to analyze the web vitals using Chrome CRUX API.
            </p>
          </div>
          <div className="flex flex-row space-x-2 my-10">
            <label htmlFor="url" className="text-xs font-medium text-gray-700"> Origin URL </label>

            <input
              type="text"
              id="url"
              placeholder="Enter a URL here"
              value={url}
              onChange={handleUrlChange}
              className="mt-1 md:w-full rounded-md border-gray-200 shadow-sm sm:text-sm h-12"
            />

            <label htmlFor="yyyymm" className="text-xs font-medium text-gray-700"> Yyyymm </label>
            <input
              type="text"
              id="yyyymm"
              placeholder="Enter yyyymm here"
              value={yyyymm}
              onChange={handleYyyymmChange}
              className="mt-1 md:w-full rounded-md border-gray-200 shadow-sm sm:text-sm h-12"
            />

          </div>
          <div className="flex justify-center">
            <button type="button" onClick={() => handleSearchButtonClick()} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Search
            </button>
          </div>
        </div>
        <div className="container px-5 py-2 mx-auto">
          <DataTable data={tableData} />
        </div>
      </section >
    </div >

  );
};

export default Hero;