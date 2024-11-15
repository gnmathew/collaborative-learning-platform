import React, {useEffect, useState} from 'react'
import EditBatchForm from './EditBatchForm'
import { BsPencilFill } from 'react-icons/bs'

const EditBatchModal = ({id, attributes, handleChange, updateBatch}) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (attributes) {
      setFormData(attributes);
    }
  }, [attributes]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateBatch(id, formData);
  };

  return (
    <>
      <BsPencilFill className="me-4" type="button" data-bs-toggle="modal" data-bs-target={`#editModalBatch-${id}`}/>

      <div className="modal fade" id={`editModalBatch-${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" onClick={handleSubmit} data-bs-dismiss="modal" className="btn btn-success">Update Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default EditBatchModal;