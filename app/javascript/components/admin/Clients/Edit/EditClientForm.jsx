import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditClientForm = ({ handleChangeEdit, editClient, selectedTab, id }) => {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/admin/batches')
      .then(resp => {
        setBatches(resp.data.data);
      })
      .catch(error => {
        console.error("Error fetching batches:", error);
      });
  }, []);

  return (
    <>
      <form>
        <div className="mb-2">
          <input
            type="text"
            className="form-control form-control-sm"
            value={editClient.role || ""}
            disabled
          />
        </div>
        {selectedTab === 'students' && (
          <div className="mb-2">
            <select
              className="form-select form-select-sm"
              value={editClient.status || ""}
              name="status"
              onChange={handleChangeEdit}
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </div>
        )}
        {selectedTab === 'students' && (
          <div className="mb-2">
            <select
              className="form-select form-select-sm"
              value={editClient.batch_id || ""}
              name="batch_id"
              onChange={handleChangeEdit}
            >
              <option value="" disabled hidden>
                Select a Batch
              </option>
              {batches.map((batch) => (
                <option key={batch.attributes.id} value={batch.attributes.id}>
                  {batch.attributes.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            name="username"
            id={`username-${id}`}
            placeholder="username"
            value={editClient.username || ""}
            onChange={handleChangeEdit}
          />
          <label htmlFor={`username-${id}`}>username</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="email"
            className="form-control"
            name="email"
            id={`email-${id}`}
            placeholder="email"
            value={editClient.email || ""}
            onChange={handleChangeEdit}
          />
          <label htmlFor={`email-${id}`}>email</label>
        </div>
      </form>
    </>
  );
}

export default EditClientForm;