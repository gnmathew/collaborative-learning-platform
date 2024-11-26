import React from 'react'
import StudentsList from './StudentsList';

const StudentsTable = ({ selectedTab, handleDestroy, handleChange }) => {

  return (
    <>
       <div>
        <h3>Students</h3>
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col" className="px-5">ID number</th>
              <th scope="col" className="px-2">Status</th>
              <th scope="col" className="px-5">full name</th>
              <th scope="col" className="px-5">username</th>
              <th scope="col" className="px-5">email</th>
              <th scope="col" className="px-2">Batch</th>
              <th scope="col" className="px-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            <StudentsList
              selectedTab={selectedTab}
              handleChange={handleChange}
              handleDestroy={handleDestroy}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentsTable;