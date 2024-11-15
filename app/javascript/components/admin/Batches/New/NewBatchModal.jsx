import React from 'react'
import NewBatchForm from './NewBatchForm';

const NewBatchModal = ({formData, setFormData, handleSubmit, handleChange}) => {

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark text-light">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Create New User</h1>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <NewBatchForm
                formData={formData}
                setFormData={setFormData}
                handleChange={handleChange}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" onClick={handleSubmit} data-bs-dismiss="modal" className="btn btn-success">Save Batch</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
export default NewBatchModal;