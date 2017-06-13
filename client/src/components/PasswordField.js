import React from 'react';

const renderField = ({ type, label, input, meta: { touched, error } }) => (
  <div>
    <label className="pt-label">Password</label>
    <input className="pt-input" type="password" {...input} placeholder="Password"/>
    {touched && error && <span className="error">{error}</span>}
  </div>
);

export default renderField;
