import { Checkbox } from "antd";
import React from "react";

const StyledCheckBox = ({
  onChange,
  style,
  disabled = false,
  ...restProps
}: {
    onChange: any;
  style: any;
  disabled: boolean;
}) => {
  return (
    <>
      <Checkbox
        {...restProps}
        onChange={onChange}
        style={style}
        disabled={disabled}
      />
    </>
  );
};

export default StyledCheckBox;