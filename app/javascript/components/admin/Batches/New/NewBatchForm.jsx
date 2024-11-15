import React from 'react'

const NewBatchForm = ({formData, setFormData, handleChange}) => {

  return (
    <>
    <form>
      <div className="form-floating mb-2">
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          placeholder="name"
          value={formData.name || ""}
          required
          onChange={(e) => handleChange(e, setFormData)}
        />
        <label htmlFor="name">Name</label>
      </div>
    </form>
    </>
  )
}
export default NewBatchForm;