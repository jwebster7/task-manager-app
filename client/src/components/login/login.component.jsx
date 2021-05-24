import React, { useState } from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { LoginContainer, LoginTitle } from "./login.styles";

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = state;

        // pass the email and password the /users POST endpoint.
        // it will return a token that needs to be stored somewhere here in the state.
    };

    const { email, password } = state;
    return (
        <LoginContainer>
            <LoginTitle>Login</LoginTitle>
            <p>Login with your email and password</p>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <CustomButton type='submit'>SIGN IN</CustomButton>
            </form>
        </LoginContainer>
    );
};

export default Login;
