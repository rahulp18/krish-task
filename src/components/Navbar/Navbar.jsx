import React from 'react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { AiFillPlusCircle } from 'react-icons/ai';
import { IoIosNotifications } from 'react-icons/io';
import { BiSearchAlt } from 'react-icons/bi';
const Navbar = ({ patientData }) => {
  return (
    <div className="px-6 py-4 ">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center">
          <MdOutlinePersonOutline className="h-[35px] w-[35px] text-blue-600" />
          <h2 className="text-xl font-bold ">{patientData.name}</h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-2xl flex items-center border-2 px-3 py-1 mr-3">
            <BiSearchAlt className="text-gray-500" />
            <input
              type="text"
              className="bg-inherit border-none outline-none rounded-md"
              placeholder="Search"
            />
          </div>

          <AiFillPlusCircle className="text-blue-500 h-[35px] w-[35px]  mr-2 cursor-pointer" />
          <div className="bg-white rounded-full cursor-pointer">
            <IoIosNotifications className="text-gray-500 h-[35px] w-[35px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
