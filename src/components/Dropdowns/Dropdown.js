import React, { useState } from 'react';
import Button from '../Button/Button';
import './dropdown.css';

function Dropdown({ students, onAddAbsentee, absentStudents }) {
  const [selectedStudent, setSelectedStudent] = useState('');

  const handleAddAbsentee = () => {
    if (!absentStudents.includes(selectedStudent)) {
      onAddAbsentee(selectedStudent);
    }
  };

  const availableStudents = students.filter(
    (student) => !absentStudents.includes(student.name)
  );

  return (
    <div className='c-dropdown'>
      <label className='c-dropdown__label'>Ajouter un.e absent.e</label>
      <div className='c-dropdown__container'>
        <select
          className='c-dropdown__select'
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Sélectionner une personne</option>
          {availableStudents.map((student) => (
            <option key={student.id} value={student.name}>
              {student.name}
            </option>
          ))}
        </select>
        <span className="c-dropdown__icon"></span>
      </div>
      <Button onClick={handleAddAbsentee} text="Ajouter" isSmall />
    </div>
  );
}

export default Dropdown;
