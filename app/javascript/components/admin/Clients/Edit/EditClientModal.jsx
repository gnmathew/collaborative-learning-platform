import React, { useState, useEffect } from 'react';
import EditClientForm from './EditClientForm';
import { BsPencilFill } from "react-icons/bs";

const EditClientModal = ({ id, attributes, selectedTab, handleChange, batches, updateClient }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (attributes) {
      setFormData(attributes);
    }
  }, [attributes]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateClient(id, formData);
  };

  return(
    <>
      <BsPencilFill className="me-4" type="button" data-bs-toggle="modal" data-bs-target={`#editModal-${id}`}/>

      <div className="modal fade" id={`editModal-${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark text-light">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit User</h1>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <EditClientForm
              handleChange={handleChange}
              selectedTab={selectedTab}
              formData={formData}
              setFormData={setFormData}
              batches={batches}
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
  );
}

export default EditClientModal;