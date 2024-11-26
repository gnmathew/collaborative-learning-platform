import React, { useState, useEffect } from 'react';
import EditClientForm from './EditClientForm';
import { BsPencilFill } from "react-icons/bs";
import { closeModal } from '../../../../utils/modalUtils';
import { useClientsContext } from '../ClientsContext';
import { useBatches } from '../../../../hooks/useBatches';

const EditClientModal = ({ id, attributes, selectedTab, handleChange }) => {
  const [formData, setFormData] = useState({});
  const [batchName, setBatchName] = useState(attributes.batch_name);
  const { batches } = useBatches();
  const { updateClient, errors, setErrors } = useClientsContext();

  useEffect(() => {
    const selectedBatch = batches.find((batch) => batch.id === formData.batch_id);

    if (selectedBatch) {setBatchName(selectedBatch.attributes.name)}
    if (attributes) {setFormData(attributes)};
  }, [attributes, formData.batch_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isSuccess = await updateClient(id, formData, batchName);
    isSuccess ? closeModal(id) : setFormData(attributes);
  };

  return (
    <>
      <BsPencilFill className="me-4" onClick={() => setErrors({})} type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal-${id}`}/>

      <div className="modal fade" id={`exampleModal-${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              id={id}
              errors={errors}
              batches={batches}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" onClick={handleSubmit} className="btn btn-success">Save Change</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditClientModal;