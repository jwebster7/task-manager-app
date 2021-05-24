import React, { useState } from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { RegisterContainer, RegisterTitle } from "./register.styles";

const Register = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, password, confirmPassword } = state;
        console.log(state);

        if (password !== confirmPassword) {
            alert("Passwords don't match!");
        } else {
            const userCredentials = { name, email, password };
            // dispatch some action to state to setup auth for the whole app.
            // make the post here to POST /users with the form data
            // also set the JWT as a cookie to handle auth for different pages in the client
            // signUpStart(userCredentials);
        }
    };

    const { name, email, password, confirmPassword } = state;
    return (
        <RegisterContainer>
            <RegisterTitle>Register</RegisterTitle>
            <p>Sign up for a free account</p>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleChange}
                    label='Name'
                    required
                />
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
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </RegisterContainer>
    );
};

export default Register;
