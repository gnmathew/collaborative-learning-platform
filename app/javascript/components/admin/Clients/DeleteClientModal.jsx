import React from "react";
import { BsFillTrashFill, BsPatchExclamationFill } from "react-icons/bs";

const DeleteClientModal = ({ id, handleDestroy }) => {

  return(
    <>
      <BsFillTrashFill className="me-2" style={{ color: 'red' }} type="button" data-bs-toggle="modal" data-bs-target={`#deleteModal-${id}`}/>

      <div className="modal fade" id={`deleteModal-${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-warning light-text">
              <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ fontWeight: 'bold', color: 'red' }}>
                Delete This record
                <BsPatchExclamationFill style={{ marginLeft: '5px', marginBottom: '5px' }}/>
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p style={{ fontWeight: 'bold', color: 'black' }}>This Action can't be undone, are you sure?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" onClick={() => handleDestroy(id)} data-bs-dismiss="modal" className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteClientModal;