import React, { useState } from 'react';
import './Label.css';
import { EuiFieldText } from '@elastic/eui';

const Label = ({ placeholder }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
      <EuiFieldText
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        aria-label="Use aria labels when no actual label is in use"
      />
  );
}

export default Label;