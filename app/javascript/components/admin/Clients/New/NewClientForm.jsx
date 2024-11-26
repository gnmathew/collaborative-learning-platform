import React from 'react';
import { useBatches } from '../../../../hooks/useBatches';
import { useClientsContext } from '../ClientsContext';

const NewClientForm = ({ handleChange, selectedTab, formData, setFormData }) => {
  const { batches } = useBatches();
  const { errors } = useClientsContext();

  return (
    <>
      <form>
        <div className="mb-2">
          <input
            type="text"
            className="form-control form-control-sm"
            value={formData.role || ""}
            disabled
          />
        </div>

        {selectedTab === 'students' && (
          <>
            <div className="mb-2">
              <select
                className={`form-select form-select-sm ${errors.batch_id ? 'is-invalid' : ''}`}
                value={formData.batch_id || ""}
                name="batch_id"
                required
                onChange={(e) => handleChange(e, setFormData)}
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
              {errors.batch_id && <div className="invalid-feedback">{errors.batch_id}</div>}
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className={`form-control ${errors.full_name ? 'is-invalid' : ''}`}
                name="full_name"
                id="full_name"
                placeholder="Full Name"
                value={formData.full_name || ""}
                required
                onChange={(e) => handleChange(e, setFormData)}
              />
              <label htmlFor="full_name">Full Name</label>
              {errors.full_name && <div className="invalid-feedback">{errors.full_name}</div>}
            </div>
          </>
        )}
        <div className="form-floating mb-2">
          <input
            type="text"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            name="username"
            id="username"
            placeholder="Username"
            value={formData.username || ""}
            required
            onChange={(e) => handleChange(e, setFormData)}
          />
          <label htmlFor="username">Username</label>
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>
        <div className="form-floating mb-2">
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email || ""}
            required
            onChange={(e) => handleChange(e, setFormData)}
          />
          <label htmlFor="email">Email</label>
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="form-floating mb-2">
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password || ""}
            required
            onChange={(e) => handleChange(e, setFormData)}
          />
          <label htmlFor="password">Password</label>
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
      </form>
    </>
  );
};

export default NewClientForm;
