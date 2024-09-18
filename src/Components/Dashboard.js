import React,{useEffect, useState} from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Dashboard = (props) => {
    

    //const [expenditure, setexpenditure] = useState();

    const [rowData, setRowData] = useState([
        { type: "Tesla", catagory: "Model Y", price: 64950, item: true },
        { type: "Ford", catagory: "F-Series", price: 33850, item: false },
        { type: "Toyota", catagory: "Corolla", price: 29600, item: false },
      ]);
    const colDefs = [
        {field:"type",headerName:"Type"},
        {field:"catagory",headerName:"Catagory"},
        {field:"item",headerName:"Item"},
        {field:"price",headerName:"Price"},
        {field:"comment",headerName:"Comment"}
    ];

    
  return (
    <div className="flex flex-row ">
      <div className="bg-white p-5 rounded-lg shadow-md grid flex-col">
        <div className="mt-1 justify-self-start">BRAND LOGO</div>
        <div className="py-3 justify-self-center text-lg">
          <div>Summary</div>
          <div>Transcations</div>
          <div>Statistics</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md w-[1200px]">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {`Welcome ,`}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-500 p-4 rounded-lg text-white">
              <h3 className="text-lg font-semibold">Your Balance</h3>
              <p className="text-2xl">Rs -</p>
            </div>
            <div className="bg-red-500 p-4 rounded-lg text-white">
              <h3 className="text-lg font-semibold">Total Expenditure</h3>
              <p className="text-2xl">Rs </p>
            </div>
            <div className="bg-red-500 p-4 rounded-lg text-white">
              <h3 className="text-lg font-semibold">Total Earning</h3>
              <p className="text-2xl">Rs 15,000</p>
            </div>
            {/* Add more summary cards as needed */}
          </div>
        </div>

        {/* Data Analytics Section */}
        <div className="mb-6 max-w-90 h-60">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Data Analytics
          </h2>
          <div className="bg-purple-100 p-4 rounded-lg w-2/3 h-full">
            <p className="text-sm font-normal text-gray-400 text-bottom">
              Chart Placeholder(Coming Soon !!)
            </p>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="p-1 mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 ">
            Recent Transcations
          </h2>
          <div
            className="ag-theme-quartz" 
            style={{ height: 500 }} 
          >
            <AgGridReact rowData={rowData} columnDefs={colDefs} />
          </div>
        </div>
      </div>

      <div className="bg-white px-6 rounded-lg shadow-md flex flex-col">
        <h2 className="text-xl justify-self-start p-2 h-10">Summary</h2>
        <div className="text-lg rounded-lg shadow-md p-2 h-fit">
          <p>Your Balance</p>
          <p>$10,632.00</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
