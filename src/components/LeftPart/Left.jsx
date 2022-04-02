import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import Data from './Data';

const Left = ({ patientData, appoinmentDetails }) => {
  const { Birthday, Gender, Past, name, Upcoming } = patientData;
  console.log(Object.keys(appoinmentDetails).length);
  console.log(appoinmentDetails);
  return (
    <div className=" py-4 m-4">
      <div className="flex w-full">
        <div className="w-1/3 bg-white m-1 px-4 py-4">
          <div className="flex flex-col items-center">
            <img
              src="https://us.123rf.com/450wm/happyvector071/happyvector0711904/happyvector071190414500/120957417-creative-illustration-of-default-avatar-profile-placeholder-isolated-on-background-art-design-grey-p.jpg?ver=6"
              alt="person"
              className="rounded-full h-[110px] w-[110px]"
            />

            <div className="py-2">
              <h1 className="font-bold text-lg text-center">{name}</h1>
              <p className="text-gray-400 text-xs text-center">
                {patientData['e-email']}@gmail.com
              </p>
              <div className="flex">
                <div className="w-1/2 flex items-center flex-col">
                  <h2 className="font-bold">{Past}</h2>
                  <p className="text-gray-400 text-xs">Past</p>
                </div>
                <div className="h-[35px] my-1 w-[2px] bg-gray-400 "> </div>
                <div className="w-1/2 flex items-center flex-col ">
                  <h2 className="font-bold">{Upcoming}</h2>
                  <p className="text-gray-400 text-xs">Upcoming</p>
                </div>
              </div>
              <button className="w-full border-2 bg-inherit py-1 px-6 font-bold mt-3">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white w-2/3 m-1  px-6 py-2 flex flex-col justify-evenly ">
          <div className="flex w-full flex-between mt-2 ">
            <div className="flex flex-col items-start w-full   ">
              <h2 className="text-gray-400">Gender</h2>
              <h2 className="text-gray-900 text-sm  font-semibold ">
                {Gender}
              </h2>
            </div>

            <div className="flex flex-col w-full items-start ">
              <h2 className="text-gray-400">Birthday</h2>
              <h2 className="text-gray-900 text-sm  font-semibold ">
                {Birthday}
              </h2>
            </div>
            <div className="flex flex-col w-full items-start    ">
              <h2 className="text-gray-400 font-semibold  ">Phone Number</h2>
              <h2 className="text-gray-900 text-sm   font-semibold ">
                {patientData['Phone Number']}
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-between mt-2">
            <div className="flex flex-col items-start w-full   ">
              <h2 className="text-gray-400">Street Address</h2>
              <h2 className="text-gray-900 text-sm  font-semibold ">
                {patientData['Street Address']}
              </h2>
            </div>
            <hr />
            <div className="flex flex-col w-full items-start ">
              <h2 className="text-gray-400">City</h2>
              <h2 className="text-gray-900 text-sm  font-semibold ">Cuttack</h2>
            </div>
            <div className="flex flex-col w-full items-start justify-between  ">
              <h2 className="text-gray-400 font-semibold  ">ZIP Code</h2>
              <h2 className="text-gray-900 text-sm   font-semibold ">
                {patientData['ZIP Code']}
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-between mt-2">
            <div className="flex flex-col items-start w-full   ">
              <h2 className="text-gray-400">Member Status</h2>
              <h2 className="text-gray-900 text-sm  font-semibold ">
                {patientData['Member Status']}
              </h2>
            </div>
            <hr />
            <div className="flex flex-col w-full items-start ">
              <h2 className="text-gray-400">Registered Data</h2>
              <h2 className="text-gray-900 text-sm  font-semibold ">
                {patientData['Register Date']}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white h-full mt-3 p-2  ">
        <div className="flex bg-slate-100 items-center text-gray-400 p-1 rounded-md  ">
          <div className="bg-white text-blue-600 px-2 py-1 rounded-md mx-2  cursor-pointer ">
            <h2 className="font-semibold">Upcoming Appoinments</h2>
          </div>
          <div className=" px-2 py-1 rounded-md mx-2 cursor-pointer">
            <h2 className="font-semibold">Past Appoinments</h2>
          </div>
          <div className=" px-2 py-1 rounded-md mx-2 cursor-pointer">
            <h2 className="font-semibold">Medical Records</h2>
          </div>
        </div>
        <div className="bg-slate-100 mt-5 px-3 py-5">
          <div className="flex justify-between items-center ">
            <h1 className="font-semibold">Root Conal Treatment</h1>
            <button className="bg-white px-3 py-1 flex items-center rounded-md text-gray-400 font-semibold">
              <FaAngleUp className="text-gray-400" />
              Show Previous Treatment
            </button>
          </div>
          <div className=" h-[1px] w-full bg-gray-300 my-2" />
          <div className="w-full h-[300px] border-4 overflow-y-scroll my-2 px-4 py-6 scrollbar-thin scrollbar-thumb-gray-400 ">
            {Object.keys(appoinmentDetails).length > 0 ? (
              <>
                <Data appoinmentDetails={appoinmentDetails} />
                <Data appoinmentDetails={appoinmentDetails} />
              </>
            ) : (
              <h1 className="text-xl text-gray-400 animate-bounce">
                Loading.....
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
