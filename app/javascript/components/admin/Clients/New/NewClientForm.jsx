import React from 'react';

const NewClientForm = ({handleChange, selectedTab, batches, formData, setFormData}) => {

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
                className="form-control"
                name="full_name"
                id="full_name"
                placeholder="Full Name"
                value={formData.full_name || ""}
                required
                onChange={(e) => handleChange(e, setFormData)}
              />
              <label htmlFor="first_name">Full Name</label>
            </div>
          </>
        )}
        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            placeholder="username"
            value={formData.username || ""}
            required
            onChange={(e) => handleChange(e, setFormData)}
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
            value={formData.email || ""}
            required
            onChange={(e) => handleChange(e, setFormData)}
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
            value={formData.password || ""}
            required
            onChange={(e) => handleChange(e, setFormData)}
          />
          <label htmlFor="password">password</label>
        </div>
      </form>
    </>
  )
}

export default NewClientForm;