import React from 'react'
import TeachersList from './TeachersList'

const TeachersTable = ({ selectedTab, handleChange, handleDestroy, lcoation }) => {

  return (
    <div>
      <h3>Teachers</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID number</th>
            <th>username</th>
            <th>email</th>
            {location.pathname !== "/" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          <TeachersList
            selectedTab={selectedTab}
            handleChange={handleChange}
            handleDestroy={handleDestroy}
            location={location}
          />
        </tbody>
      </table>
    </div>
  );
}

export default TeachersTable