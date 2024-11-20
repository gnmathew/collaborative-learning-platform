import React from 'react'
import TeachersList from './TeachersList'

const TeachersTable = ({ teachers, setTeachers, selectedTab, handleChange, updateClient, handleDestroy, batches,  errors, setErrors }) => {

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
            teachers={teachers}
            setTeachers={setTeachers}
            selectedTab={selectedTab}
            handleChange={handleChange}
            updateClient={updateClient}
            handleDestroy={handleDestroy}
            batches={batches}
            errors={errors}
            setErrors={setErrors}
          />
        </tbody>
      </table>
    </div>
  );
}

export default TeachersTable