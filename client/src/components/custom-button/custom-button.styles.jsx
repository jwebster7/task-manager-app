import styled, { css } from "styled-components";

const buttonStyles = css`

`;

const invertedButtonStyles = css`

`;

const getButtonStyles = (props) => {
    return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
    ${getButtonStyles}
`;
