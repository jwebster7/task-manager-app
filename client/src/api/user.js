import axios from "axios";

export const registerUser = async (name, email, password) => {
    const headers = {
        "content-type": "application/json"
    };

    const body = {
        name,
        email,
        password
    };

    try {
        const response = await axios.post("/api/users/register", body, headers);
        return { status: response.status, data: response.data };
    } catch (error) {
        return { status: error.response.status, data: "Unable to register!" };
    }
};

export const loginUser = async (email, password) => {
    const headers = {
        "content-type": "application/json"
    };

    const body = {
        email,
        password
    };

    try {
        const response = await axios.post("/api/users/login", body, headers);
        return { status: response.status, data: response.data };
    } catch (error) {
        return { status: error.response.status, data: "Unable to login!" };
    }
};

export const logoutUser = async () => {
    const headers = {
        "content-type": "application/json",
        withCredentials: true
    };

    try {
        const response = await axios.post("/api/users/logout", headers);
        return { status: response.status, data: response.data };
    } catch (error) {
        return { status: error.response.status, data: "Unable to logout!" };
    }
};

export const globallyLogoutUser = async () => {
    // e.preventDefault();

    const headers = {
        "content-type": "application/json",
        withCredentials: true
    };

    try {
        const response = await axios.post("/api/users/logoutAll", headers);
        console.log(response);
        return { status: response.status, data: response.data };
    } catch (error) {
        return { status: error.response.status, data: "Unable to logout!" };
    }
};

// need a POST function for "/api/users/me/avatar"

// need to implement this after uploading avatar for the test user
export const getUserAvatar = async (e) => {
    e.preventDefault();

    const headers = {
        "content-type": "application/json",
        withCredentials: true
    };

    try {
        const response = await axios.get("/api/users/me", headers);
        console.log(response);
        return response;
    } catch (e) {
        // do something different here like an alert or something.
        console.error(e);
    }
};

export const getUserProfile = async (e) => {
    e.preventDefault();

    const headers = {
        "content-type": "application/json",
        withCredentials: true
    };

    try {
        const response = await axios.get("/api/users/me", headers);
        console.log(response);
        return response;
    } catch (e) {
        // do something different here like an alert or something.
        console.error(e);
    }
};

export const updateUserProfile = async (e) => {
    e.preventDefault();

    const headers = {
        "content-type": "application/json",
        withCredentials: true
    };

    const data = {
        name: "jwebster7",
        email: "jwebster7@app.com",
        password: "nextPassword"
    };

    try {
        const response = await axios.patch("/api/users/me", data, headers);
        console.log(response);
        return response;
    } catch (e) {
        // do something different here like an alert or something.
        console.error(e);
    }
};

export const deleteUserAccount = async (e) => {
    e.preventDefault();

    const headers = {
        "content-type": "application/json",
        withCredentials: true
    };

    try {
        const response = await axios.delete("/api/users/me", headers);
        console.log(response);
        return response;
    } catch (e) {
        // do something different here like an alert or something.
        console.error(e);
    }
};
