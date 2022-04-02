import React from 'react';
import Files from '../Files/Files';
import Notes from '../Notes/Notes';

const Right = ({ doctorData, files }) => {
  return (
    <div className="mt-9">
      <Notes doctorData={doctorData} />
      <Files files={files} />
    </div>
  );
};

export default Right;
