import React from 'react'
import InputField from "../InputField";

function Employment({handleChange}) {
  return (
    <div>
    <h4 className="h4 fw-medium mb-2">Type of employment</h4>

    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span>Any experience
      </label>

      <InputField
        handleChange={handleChange}
        value="full-time"
        title="Full-time"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value="temporary"
        title="Temporary"
        name="test"
      />
       <InputField
        handleChange={handleChange}
        value="part-time"
        title="Part-time"
        name="test"
      />
    </div>
  </div>
  )
}

export default Employment
