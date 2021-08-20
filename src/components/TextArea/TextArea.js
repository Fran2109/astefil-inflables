import React, { useState } from 'react';
import './TextArea.css';
import { EuiTextArea } from '@elastic/eui';

const TextArea = () => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
      <EuiTextArea
        value={value}
        onChange={(e) => onChange(e)}
        fullWidth={true}
        compressed={false}
        resize={"both"}
      />
  );
};

export default TextArea;