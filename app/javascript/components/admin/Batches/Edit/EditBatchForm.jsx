import React from 'react';

const EditBatchForm = ({ handleChange, id, formData, setFormData }) => {

  return (
    <>
      <form>
        <div className="form-floating mb-2">
          <input
            type="name"
            className="form-control"
            name="name"
            id={`name-${id}`}
            placeholder="name"
            value={formData.name || ""}
            onChange={(e) => handleChange(e, setFormData)}
          />
          <label htmlFor={`name-${id}`}>name</label>
        </div>
      </form>
    </>
  );
}

export default EditBatchForm;