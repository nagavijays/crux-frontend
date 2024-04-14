// Datatable component

'use client'

import React, { useState, useEffect } from "react";

const DataTable = ({ data }) => {
    // const [tableData, setTableData] = useState([]);

    // useEffect(() => {
    //     setTableData(data);
    // }, [data]);

    return (
        <>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Performance Data Metrics</h1>
            <br />
            <div className="grid gap-14 md:grid-cols-3 md:gap-5">
                {data && data.length > 0  && data.map((field, index) => (
                    <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                        <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">{(field.name).toUpperCase()}</h1>
                        <p className="px-4 text-gray-500">
                            slow:  {field.slow}</p>
                        <p className="px-4 text-gray-500">
                            fast:  {field.fast}
                        </p>
                        <p className="px-4 text-gray-500">
                            avg:  {field.avg}
                        </p>
                        <p className="px-4 text-gray-500">
                            p75:  {field.p75}
                        
                        </p>
                    </div>

                ))}
            </div>

        </>
    );
};

export default DataTable;
