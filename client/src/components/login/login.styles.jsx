import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    @media screen and (max-width: 800px) {
        width: 325px;
    }
`;

export const LoginTitle = styled.h2`
    margin: 10px 0;
`;
