import React, { useContext } from 'react';
import Dropdown from "../components/Dropdowns/Dropdown";
import { StudentContext } from '../StudentContext';

function AbsentPage() {
  const [students, , absentStudents, setAbsentStudents] = useContext(StudentContext);

  const handleAddAbsentee = (studentName) => {
    if (!absentStudents.includes(studentName)) {
      setAbsentStudents([...absentStudents, studentName]);
    }
  };

  const handleRemoveAbsentee = (studentNameToRemove) => {
    const updatedAbsentStudents = absentStudents.filter(
      (student) => student !== studentNameToRemove
    );
    setAbsentStudents(updatedAbsentStudents);
  };


  return (
    <div className="l-absent">
      <div className="u-flex-fluid u-width-100">
        <Dropdown
          students={students}
          onAddAbsentee={handleAddAbsentee}
          absentStudents={absentStudents}
        />
      </div>
      <hr className="l-absent__divider"></hr>
      <div className="u-flex-fluid">
        <div>
          <p className="l-absent__title">Liste des absents</p>
          <ul className="l-absent__list">
            {absentStudents.map((studentName) => (
              <li key={studentName} className='l-absent__list-item'>
                {studentName}
                <button className='l-absent__btn-sup' onClick={() => handleRemoveAbsentee(studentName)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.854 4.146a.5.5 0 01.708 0L8 7.293l2.439-2.439a.5.5 0 11.708.708L8.707 8l2.439 2.439a.5.5 0 01-.708.708L8 8.707l-2.439 2.439a.5.5 0 01-.708-.708L7.293 8 4.854 5.561a.5.5 0 010-.708z"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AbsentPage;
