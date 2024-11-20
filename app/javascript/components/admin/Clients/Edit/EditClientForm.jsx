import React from 'react';

const EditClientForm = ({ handleChange, selectedTab, id, batches, formData, setFormData, errors }) => {

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
                className="form-select form-select-sm"
                value={formData.status || ""}
                name="status"
                required
                onChange={(e) => handleChange(e, setFormData)}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>
            <div className="mb-2">
              <select
                className="form-select form-select-sm"
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
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className={`form-control ${errors.full_name ? 'is-invalid' : ''}`}
                name="full_name"
                id={`full_name_${id}`}
                placeholder="Full Name"
                value={formData.full_name || ""}
                required
                onChange={(e) => handleChange(e, setFormData)}
              />
              <label htmlFor={`full_name_${id}`}>Full Name</label>
              {errors.full_name && <div className="invalid-feedback">{errors.full_name}</div>}
            </div>
          </>
        )}
        <div className="form-floating mb-2">
          <input
            type="text"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            name="username"
            id={`username-${id}`}
            placeholder="username"
            value={formData.username || ""}
            required
            onChange={(e) => handleChange(e, setFormData)}
          />
          <label htmlFor={`username-${id}`}>Username</label>
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>
        <div className="form-floating mb-2">
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            id={`email-${id}`}
            placeholder="Email"
            value={formData.email || ""}
            required
            onChange={(e) => handleChange(e, setFormData)}
          />
          <label htmlFor={`email-${id}`}>Email</label>
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
      </form>
    </>
  );
}

export default EditClientForm;