import React from 'react';
import Content from '../Content/Content';
import Navbar from '../Navbar/Navbar';
import NavbarSecond from '../Navbar/NavbarSecond';

const Main = ({ patientData, files, doctorData, appoinmentDetails }) => {
  return (
    <div>
      <Navbar patientData={patientData} />
      <hr />
      <NavbarSecond patientData={patientData} />
      <hr />
      <Content
        patientData={patientData}
        files={files}
        appoinmentDetails={appoinmentDetails}
        doctorData={doctorData}
      />
    </div>
  );
};

export default Main;
