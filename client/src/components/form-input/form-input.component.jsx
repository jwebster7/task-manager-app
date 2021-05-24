import React from "react";

import {
    FormInputContainer,
    FormInputLabelContainer,
    GroupContainer
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <GroupContainer>
            {label ? (
                <FormInputLabelContainer>{label}</FormInputLabelContainer>
            ) : null}
            <FormInputContainer onChange={handleChange} {...otherProps} />
        </GroupContainer>
    );
};

export default FormInput;
