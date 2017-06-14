import React from 'react';

const renderField = ({ type, label, input, meta: { touched, error } }) => {
  return (
    <div className="input-row">
      <label className="display-none">{label}</label>
      {!error && <input className="pt-input pt-fill form-text-input" {...input} type={type} placeholder={label} />}
      {touched && error &&
      <input className="pt-input pt-fill form-text-input" {...input} type={type} placeholder={error} />}
    </div>
  )
};

export default renderField;
