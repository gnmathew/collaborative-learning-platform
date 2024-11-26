import React from 'react'
import BatchLists from './BatchLists';

const BatchTable = ({ handleChange, handleDestroy }) => {

  return (
    <>
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col" className="px-5">Name</th>
          <th scope="col" className="px-5">Status</th>
          <th scope="col" className="px-5">Action</th>
        </tr>
      </thead>
      <tbody>
        <BatchLists
          handleChange={handleChange}
          handleDestroy={handleDestroy}
        />
      </tbody>
    </table>
    </>
  )
}
export default BatchTable;