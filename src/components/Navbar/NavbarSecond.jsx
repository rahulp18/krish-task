import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { AiFillPrinter } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
const NavbarSecond = ({ patientData }) => {
  return (
    <div className="px-3 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="text-blue-500">Patient List</h3>
          <FaAngleRight className="text-gray-400 mx-2" />
          <h3 className="text-gray-500">{patientData.name}</h3>
        </div>
        <div className="flex items-center  ">
          <div className="bg-white px-2 py-2 mx-2 cursor-pointer ">
            <AiFillPrinter className="text-gray-500" />
          </div>
          <div className="bg-white px-2 py-2 text-gray-500 flex items-center cursor-pointer ">
            <FaEdit />
            <h3 className="text-sm">Edit Patient</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSecond;
