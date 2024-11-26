import React from 'react'
import TeachersList from './TeachersList'

const TeachersTable = ({ selectedTab, handleChange, handleDestroy }) => {

  return (
    <div>
      <h3>Teachers</h3>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col" className="px-5">ID number</th>
            <th scope="col" className="px-5">username</th>
            <th scope="col" className="px-5">email</th>
            <th scope="col" className="px-5">Actions</th>
          </tr>
        </thead>
        <tbody>
          <TeachersList
            selectedTab={selectedTab}
            handleChange={handleChange}
            handleDestroy={handleDestroy}
          />
        </tbody>
      </table>
    </div>
  );
}

export default TeachersTable