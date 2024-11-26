import React from 'react'
import { useBatchesContext } from '../BatchesContext';

const NewBatchForm = ({formData, setFormData, handleChange}) => {
  const { errors } = useBatchesContext()

  return (
    <>
      <form>
        <div className="form-floating mb-2">
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            name="name"
            id="name"
            placeholder="name"
            value={formData.name || ""}
            required
            onChange={(e) => handleChange(e, setFormData)}
          />
          <label htmlFor="name">Name</label>
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
      </form>
      </>
  )
}
export default NewBatchForm;