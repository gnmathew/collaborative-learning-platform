import React, {useEffect, useState} from 'react'
import EditBatchForm from './EditBatchForm'
import { BsPencilFill } from 'react-icons/bs'
import { closeModal } from '../../../../utils/modalUtils'

const EditBatchModal = ({id, attributes, handleChange, updateBatch, errors, setErrors}) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (attributes) {setFormData(attributes)}
  }, [attributes]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isSuccess = await updateBatch(id, formData);
    isSuccess ? closeModal(id) : setFormData(attributes);
  };

  return (
    <>
      <BsPencilFill className="me-4" onClick={() => setErrors({})} type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal-${id}`}/>

      <div className="modal fade" id={`exampleModal-${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark text-light">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Batch</h1>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <EditBatchForm
              handleChange={handleChange}
              formData={formData}
              setFormData={setFormData}
              id={id}
              errors={errors}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" onClick={handleSubmit} className="btn btn-success">Update Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default EditBatchModal;