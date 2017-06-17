import React from 'react';

const renderField = ({ type, label, input }) => (
    <div className="input-row display-none">
      <label className="display-none">{label}</label>
        <input
          {...input}
          type={type}
      />
    </div>
  )

export default renderField;
