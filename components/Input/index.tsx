import { useState } from "react";
import { Label, StyledInput } from "./styled";

const Input = ({ placeholder, className, onChange }) => {
    return (
        <>
            <Label for="name"></Label>
            <StyledInput className={className} type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" placeholder={placeholder} onChange={onChange}/>
        </>
    )
}

export default Input;