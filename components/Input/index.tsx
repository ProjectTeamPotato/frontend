import { Input } from 'antd';
import React from 'react';

const StyledInput = ({
    placeholder,
    style,
    disabled = false,
    ...restProps
  }: {
    placeholder: any;
    style: any;
    disabled: boolean;
  }) => {
    return (
      <>
        <Input
          {...restProps}
          placeholder={placeholder}
          style={style}
          disabled={disabled}
        />
      </>
    );
  };

export default StyledInput;