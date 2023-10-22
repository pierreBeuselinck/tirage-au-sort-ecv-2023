// StudentContext.js
import React, { createContext, useState } from 'react';
import studentsData from './data/students';

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [absentStudents, setAbsentStudents] = useState([]);
  const [students, setStudents] = useState(studentsData);

  return (
    <StudentContext.Provider value={[students, setStudents, absentStudents, setAbsentStudents]}>
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
