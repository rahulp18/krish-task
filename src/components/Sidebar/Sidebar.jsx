import React from 'react';
import { FaBars } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import { RiMessage3Line } from 'react-icons/ri';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { RiListSettingsFill } from 'react-icons/ri';
import { VscCompassActive } from 'react-icons/vsc';

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between ">
        <div className="flex items-center justify-between align-middle ">
          <h1 className="font-bold text-blue-700">Logo</h1>
          <div className="ml-3">
            <h3 className="text-xl font-bold ">Zendenta</h3>
            <p className="text-xs text-slate-400">Cobut gigi tanpa sakit</p>
          </div>
        </div>
        <FaBars className="text-gray-500 cursor-pointer " />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-start px-4 py-2 mt-5 text-center transition-colors duration-300 cursor-pointer hover:text-white hover:bg-blue-600 ">
          <VscCompassActive />
          <h4 className="ml-2">Overview</h4>
        </div>
        <div className="flex items-center justify-start px-4 py-2 mt-5 text-center transition-colors duration-300 cursor-pointer hover:text-white hover:bg-blue-600 ">
          <BiCalendar />
          <h4 className="ml-2">Calendar</h4>
        </div>
        <div className="flex items-center justify-start px-4 py-2 mt-5 text-center text-white transition-colors duration-300 bg-blue-600 cursor-pointer ">
          <MdOutlinePersonOutline />
          <h4 className="ml-2">Patient List</h4>
        </div>
        <div className="flex items-center justify-start px-4 py-2 mt-5 text-center transition-colors duration-300 cursor-pointer hover:text-white hover:bg-blue-600 ">
          <RiMessage3Line />
          <h4 className="ml-2">Message</h4>
        </div>
        <div className="flex items-center justify-start px-4 py-2 mt-5 text-center transition-colors duration-300 cursor-pointer hover:text-white hover:bg-blue-600 ">
          <RiMoneyDollarCircleFill />
          <h4 className="ml-2">Payment Information</h4>
        </div>
        <div className="flex items-center justify-start px-4 py-2 mt-5 text-center transition-colors duration-300 cursor-pointer hover:text-white hover:bg-blue-600 ">
          <RiListSettingsFill />
          <h4 className="ml-2">Setting</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
