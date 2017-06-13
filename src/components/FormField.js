import React from 'react';

const renderField = ({ type, label, input, meta: { touched, error } }) => (
  <div className="input-row">
    <label className="pt-label">{label}</label>
    <input className="pt-input" {...input} type={type}/>
    {touched && error &&
     <span className="error">{error}</span>}
  </div>
);

export default renderField;
