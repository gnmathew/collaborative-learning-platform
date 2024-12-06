import React, { useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import { useBatchesContext } from '../BatchesContext'
import ViewTableBtn from '../../../ui/buttons/ViewTableBtn';
import NewBatchModal from '../New/NewBatchModal';
import BatchTable from './BatchTable';
import styled from 'styled-components'
import { BsPlusCircleFill } from "react-icons/bs"
import { closeModal } from '../../../../utils/modalUtils';

const MainContainer = styled.div`
  max-width: 1780px;
  margin: auto;
  margin-top: 2%;
  text-align: center;
`

const BatchesContainerCard = () => {
  const { createBatch, deleteBatch, setErrors } = useBatchesContext();
  const [formData, setFormData] = useState({name: ""});
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isSuccess = await createBatch(formData)

    if (isSuccess) {
      setFormData({});
      closeModal();
    }
  }

  const handleChange = (e, setState) => {
    e.preventDefault()

    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleDestroy = async (id) => {
    await deleteBatch(id);
  };

  return(
    <>
    <MainContainer>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true">Batches</a>
            </li>
              <li className="nav-item ms-auto">
                {location.pathname !== "/" ?(
                  <button
                    type="button"
                    onClick={() => setErrors({})}
                    className="btn btn-success btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <BsPlusCircleFill style={{ marginRight: '5px', marginBottom: '5px' }} />
                    Add Batch
                  </button>
                ) : (
                  <ViewTableBtn path={"/koda-board/admin/batches"}/>
                )}
              </li>
          </ul>
        </div>
        <div className="card-body">
          <BatchTable
            handleChange={handleChange}
            handleDestroy={handleDestroy}
            location={location}
          />
        </div>
      </div>
      <div>
        <NewBatchModal
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
    </MainContainer>
    </>
  )
};

export default BatchesContainerCard;