import React from 'react';

const renderField = ({ type, label, input, meta: { touched, error } }) => {
  let placeholder = touched && error ? error : label;
  return (
    <div className="input-row">
      <label className="display-none">{label}</label>
        <input
          className="pt-input pt-fill form-text-input"
          {...input}
          type={type}
          placeholder={placeholder}
      />
    </div>
  )
};

export default renderField;
