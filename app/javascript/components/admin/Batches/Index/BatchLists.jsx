import React from 'react'
import EditBatchModal from '../Edit/EditBatchModal'
import DeleteBatchModal from '../DeleteBatchModal'
import { useBatchesContext } from '../BatchesContext';

const BatchLists = ({ handleChange, handleDestroy, location }) => {
  const { batches } = useBatchesContext();

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
          <tr className="table-light" key={batch.id}>
            <td className="px-5">{batch.attributes.name}</td>
            <td className="px-5">{batch.attributes.status}</td>
            {location.pathname !== "/" && (
              <td className="px-5">
                <EditBatchModal
                  {...batch}
                  handleChange={handleChange}
                />
                <DeleteBatchModal
                  {...batch}
                  handleDestroy={handleDestroy}
                />
              </td>
            )}
          </tr>
        )
      })}
    </>
  )
}
export default BatchLists;