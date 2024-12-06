import React from 'react'
import StudentsList from './StudentsList';

const StudentsTable = ({ selectedTab, handleDestroy, handleChange, location }) => {

  return (
    <>
       <div>
        <h3>Students</h3>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID number</th>
              <th scope="col" className="px-2">Status</th>
              <th>full name</th>
              <th>username</th>
              <th>email</th>
              <th scope="col" className="px-2">Batch</th>
              {location.pathname !== "/" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            <StudentsList
              selectedTab={selectedTab}
              handleChange={handleChange}
              handleDestroy={handleDestroy}
              location={location}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentsTable;