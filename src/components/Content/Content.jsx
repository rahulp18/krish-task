import React from 'react';
import Left from '../LeftPart/Left';
import Right from '../RightPart/Right';

const Content = ({ patientData, files, appoinmentDetails, doctorData }) => {
  return (
    <div className="flex h-screen">
      <div className=" w-2/3 ">
        <Left patientData={patientData} appoinmentDetails={appoinmentDetails} />
      </div>
      <div className="w-1/3">
        <Right doctorData={doctorData} files={files} />
      </div>
    </div>
  );
};

export default Content;
