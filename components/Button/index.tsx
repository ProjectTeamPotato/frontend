import { Button } from "antd";
import React from "react";

const StyledButton = ({
  onClick,
  style,
  disabled = false,
  ...restProps
}: {
  onClick: any;
  style: any;
  disabled: boolean;
}) => {
  return (
    <>
      <Button
        {...restProps}
        onClick={onClick}
        style={style}
        disabled={disabled}
      />
    </>
  );
};

export default StyledButton;
