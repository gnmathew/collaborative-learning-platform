import React from 'react'
import BatchLists from './BatchLists';

const BatchTable = ({ batches, setBatches, handleChange, updateBatch, handleDestroy, errors, setErrors }) => {


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
          batches={batches}
          setBatches={setBatches}
          handleChange={handleChange}
          updateBatch={updateBatch}
          handleDestroy={handleDestroy}
          errors={errors}
          setErrors={setErrors}
        />
      </tbody>
    </table>
    </>
  )
}
export default BatchTable;