import React from 'react';
import { MdOutlinePersonOutline } from 'react-icons/md';
const Notes = ({ doctorData }) => {
  // console.log(doctorData);
  return (
    <div className="bg-white px-2 py-6 w-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-500">Notes</h3>
        <h3 className="font-semibold text-sm text-blue-600">Sell all</h3>
      </div>
      <div className="bg-slate-100 h-[250px] w-full px-3 py-4 flex justify-between ">
        <div className="my-2">
          <p className="text-gray-700 text-sm my-1">-Hey,I am Rahul Pradhan</p>
          <p className="text-gray-700 text-sm my-1">
            -I am a 3rd year CSE Student
          </p>
          <p className="text-gray-700 text-sm my-1">
            -I am From Cuttack,Odisha
          </p>
        </div>
        <div className="flex justify-end items-center mt-5">
          <button className="px-3 py-1 rounded-md bg-blue-600 text-white  ">
            Save notes
          </button>
        </div>
      </div>
      <div className="px-3 py-4">
        <p className="text-sm text-gray-500 font-semibold">Lorem ipsum Rahul</p>
        <div className="flex justify-between mt-2">
          <h2 className="text-center text-xs text-gray-500 flex items-center">
            <MdOutlinePersonOutline className="text-blue-600" />
            {doctorData.name}
          </h2>
          <p className="text-gray-400 text-xs">20 Nov 22</p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
