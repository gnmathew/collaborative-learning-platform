import React from 'react'
import BatchLists from './BatchLists';

const BatchTable = ({ handleChange, handleDestroy, location }) => {

  return (
    <>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col" className="px-5">Name</th>
          <th scope="col" className="px-5">Status</th>
          {location.pathname !== "/" && (<th scope="col" className="px-5">Action</th>)}
        </tr>
      </thead>
      <tbody>
        <BatchLists
          handleChange={handleChange}
          handleDestroy={handleDestroy}
          location={location}
        />
      </tbody>
    </table>
    </>
  )
}
export default BatchTable;