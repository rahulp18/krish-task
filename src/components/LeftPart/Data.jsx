import React from 'react';
import { CgNotes } from 'react-icons/cg';
const Data = ({ appoinmentDetails }) => {
  const { Date, Dentist, Nurse, Treatment, Time } =
    appoinmentDetails['Upcoming Appointments'];
  return (
    <div className="bg-white w-full flex px-2 py-3 justify-between my-3 ">
      <div className="flex flex-col items-center   w-full justify-center ">
        <h1 className="text-xl font-semibold text-gray-700">{Date}</h1>
        <p className="text-sm text-gray-400 font-semibold">{Time}</p>
      </div>
      <div className="flex flex-col items-center   w-full justify-center ">
        <p className="text-sm text-gray-400 font-semibold">Treatment</p>
        <h1 className="text-lg font-semibold text-gray-700">{Treatment}</h1>
      </div>
      <div className="flex     w-full py-2 px-3 items-center">
        <div className="flex flex-col items-start m-2  ">
          <p className="text-sm text-gray-400 font-semibold">Dentist</p>
          <h1 className="text-sm font-semibold text-gray-700"> {Dentist} </h1>
        </div>
        <div className="flex flex-col items-start m-2  ">
          <p className="text-sm text-gray-400 font-semibold">Nurse</p>
          <h1 className="text-sm font-semibold text-gray-700">{Nurse} </h1>
        </div>
        <div className="text-blue-700 m-2 flex items-center ">
          <CgNotes className="text-blue-700" />
          <p>Note</p>
        </div>
      </div>
    </div>
  );
};

export default Data;
