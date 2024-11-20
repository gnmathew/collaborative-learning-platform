import React from 'react'
import EditBatchModal from '../Edit/EditBatchModal'
import DeleteBatchModal from '../DeleteBatchModal'

const BatchLists = ({ batches, setBatches, handleChange, updateBatch, handleDestroy, errors, setErrors }) => {

  if (batches.length === 0) {
    return (
      <tr>
        <td colSpan="3" className="text-center">No Data Available</td>
      </tr>
    );
  }

  return (
    <>
      {batches.map(batch => {
        return (
          <tr className="table-dark" key={batch.id}>
            <td className="px-5">{batch.attributes.name}</td>
            <td className="px-5">{batch.attributes.status}</td>
            <td className="px-5">
              <EditBatchModal
                {...batch}
                setBatches={setBatches}
                handleChange={handleChange}
                updateBatch={updateBatch}
                errors={errors}
                setErrors={setErrors}
              />
              <DeleteBatchModal
                {...batch}
                handleDestroy={handleDestroy}
              />
            </td>
          </tr>
        )
      })}
    </>
  )
}
export default BatchLists;