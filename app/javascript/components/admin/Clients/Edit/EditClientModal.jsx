import React, { useState, useEffect } from 'react';
import axios from 'axios'
import EditClientForm from './EditClientForm';
import { BsPencilFill } from "react-icons/bs";

const EditClientModal = ({ setTeachers, id, attributes, selectedTab, setStudents }) => {
  const [editClient, setEditClient] = useState({})
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (attributes) {
      setEditClient(attributes);
    }
  }, [attributes]);

  const handleChangeEdit = (e) => {
    e.preventDefault()

    setEditClient((currentClient) => ({
      ...currentClient,
      [e.target.name]: e.target.value
    }))
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    axios.put(`/api/v1/admin/clients/${id}`,
      { client: editClient },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
     )
    .then( resp => {
      const updatedClient = resp.data.data;

      if (editClient.role === 'student'){
        setStudents((currentStudents) =>
          currentStudents.map((s) =>
            s.id === updatedClient.id ? { ...s, attributes: { ...updatedClient.attributes } } : s
          )
        );
      } else {
        setTeachers((currentTeachers) =>
          currentTeachers.map((t) =>
            t.id === updatedClient.id ? { ...t, attributes: { ...updatedClient.attributes } } : t
          )
        );
      }

    })
    .catch( resp => {console.log(resp)})
  }


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
              handleChangeEdit={handleChangeEdit}
              editClient={editClient}
              selectedTab={selectedTab}
              id={id}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" onClick={handleUpdate} data-bs-dismiss="modal" className="btn btn-success">Update Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditClientModal;