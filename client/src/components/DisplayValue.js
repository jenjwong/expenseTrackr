import React from 'react';

import './DisplayValue.css';

const DisplayValue = ({ val, format, text }) => (
  <span className="display-value--wrapper">
    {val &&
    <div className="pt-callout pt-intent-default pt-text-muted">
      {`${text}  ${format(val)}`}
    </div>}
  </span>
);

export default DisplayValue;
