import React, { useState, useEffect } from 'react';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import axios from 'axios';
const App = () => {
  const [patientData, setPatientData] = useState({});
  const [doctorData, setDoctorData] = useState({});
  const [appoinmentDetails, setAppoinmentDetails] = useState({});
  const [files, setFiles] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://619f39821ac52a0017ba467e.mockapi.io/patientDetails'
      );
      const responseDoctor = await axios.get(
        'https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails'
      );
      const responseFile = await axios.get(
        'https://619f39821ac52a0017ba467e.mockapi.io/Files'
      );
      const responseAppointment = await axios.get(
        'https://619f39821ac52a0017ba467e.mockapi.io/appointment_details'
      );
      setPatientData(response.data[0]);

      setFiles(responseFile.data[0]);
      setAppoinmentDetails(responseAppointment.data[0]);
      console.log(responseAppointment);
      console.log(responseFile);
      setDoctorData(responseDoctor.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex bg-slate-200 ">
      <div className="flex flex-col h-screen px-4 py-6 overflow-y-auto bg-white border-r w-[350px] ">
        <Sidebar doctorData={doctorData} />
      </div>
      <div className="w-full h-screen p-4 overflow-y-auto bg-slate-100">
        <Main
          patientData={patientData}
          files={files}
          appoinmentDetails={appoinmentDetails}
          doctorData={doctorData}
        />
      </div>
    </div>
  );
};

export default App;
