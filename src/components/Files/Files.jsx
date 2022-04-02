import React from 'react';
import { ImFilesEmpty } from 'react-icons/im';
import { CgNotes } from 'react-icons/cg';
import { MdDownloading } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
const Files = ({ files }) => {
  console.log(files);
  return (
    <div className="bg-white w-full px-4 py-6 mt-5">
      <div className="flex justify-between">
        <h2 className="text-md font-semibold">Files/Documents</h2>
        <h2 className="flex text-blue-600 text-sm font-semibold items-center">
          <ImFilesEmpty />
          Add File
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-between items-center px-3 py-2 my-2 w-full shadow">
          <div className="flex items-center text-sm">
            <CgNotes className="mr-1" /> CheckUp Result pdf{' '}
          </div>{' '}
          <div>
            <p className="text-gray-400 text-xs">123kb</p>
          </div>
        </div>
        <div className="flex justify-between items-center px-3 py-2 my-2 w-full shadow ">
          <div className="flex items-center text-sm">
            <CgNotes className="mr-1" /> CheckUp Result pdf{' '}
          </div>{' '}
          <div className="flex items-center text-gray-500">
            <BsTrash />
            <MdDownloading />
          </div>
        </div>
        <div className="flex justify-between items-center px-3 py-2 my-2 w-full shadow ">
          <div className="flex items-center text-sm">
            <CgNotes className="mr-1" /> CheckUp Result pdf{' '}
          </div>{' '}
          <div>
            <p className="text-gray-400 text-xs">123kb</p>
          </div>
        </div>
        <div className="flex justify-between items-center px-3 py-2 my-2 w-full shadow ">
          <div className="flex items-center text-sm">
            <CgNotes className="mr-1" /> CheckUp Result pdf{' '}
          </div>{' '}
          <div className="flex items-center text-gray-500">
            <BsTrash />
            <MdDownloading />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
