import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewClientForm = ({handleChangeNew, newClient, selectedTab}) => {
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
            value={newClient.role || ""}
            disabled
          />
        </div>

        {selectedTab === 'students' && (
            <div className="mb-2">
              <select
                className="form-select form-select-sm"
                value={newClient.batch_id || ""}
                name="batch_id"
                onChange={handleChangeNew}
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
            id="username"
            placeholder="username"
            value={newClient.username || ""}
            onChange={handleChangeNew}
          />
          <label htmlFor="username">username</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="email"
            value={newClient.email || ""}
            onChange={handleChangeNew}
          />
          <label htmlFor="email">email</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={newClient.password || ""}
            onChange={handleChangeNew}
          />
          <label htmlFor="password">password</label>
        </div>
      </form>
    </>
  )
}

export default NewClientForm;