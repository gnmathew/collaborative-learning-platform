import React from 'react';

const EditBatchForm = ({ handleChange, id, formData, setFormData, errors }) => {

  return (
    <>
      <form>
        <div className="form-floating mb-2">
          <input
            type="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            name="name"
            id={`name-${id}`}
            placeholder="name"
            value={formData.name || ""}
            onChange={(e) => handleChange(e, setFormData)}
          />
          <label htmlFor={`name-${id}`}>name</label>
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-2">
          <select
            className="form-select form-select-sm"
            value={formData.status || ""}
            name="status"
            required
            onChange={(e) => handleChange(e, setFormData)}
          >
            <option value="ongoing">ongoing</option>
            <option value="completed">completed</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default EditBatchForm;