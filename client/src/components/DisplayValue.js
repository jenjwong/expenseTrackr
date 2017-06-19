import React from 'react';

const DisplayValue = ({val, format}) => <span>{val && <div>{format(val)}</div>}</span>

export default DisplayValue;
