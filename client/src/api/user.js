import axios from "axios";

export const registerUser = async (e, name, email, password) => {
    // adding this for now, but will be unnecessary once the rest of the app is together
    e.preventDefault();

    const headers = {
        "content-type": "application/json"
    };

    const data = {
        name: "jwebster7",
        email: "jwebster7@app.com",
        password: "nextPassword"
    };

    try {
        const response = await axios.post("/api/users/register", data, headers);
        console.log(response);
        return response;
    } catch (e) {
        // do something different here like an alert or something.
        console.error(e);
    }
};

export const loginUser = async (e, email, password) => {
    e.preventDefault();

    const headers = {
        "content-type": "application/json"
    };

    const data = {
        email: "jwebster7@app.com",
        password: "nextPassword"
    };

    try {
        const response = await axios.post("/api/users/login", data, headers);
        console.log(response);
        return response;
    } catch (e) {
        // do something different here like an alert or something.
        console.error(e);
    }
};

export const logoutUser = async (e, email, password) => {
    e.preventDefault();

    const headers = {
        "content-type": "application/json",
        withCredentials: true
    };

    try {
        const response = await axios.post("/api/users/logout", headers);
        console.log(response);
        return response;
    } catch (e) {
        // do something different here like an alert or something.
        console.error(e);
    }
};

export const globallyLogoutUser = async (e) => {
    e.preventDefault();

    const headers = {
        "content-type": "application/json",
        withCredentials: true
    };

    try {
        const response = await axios.post("/api/users/logoutAll", headers);
        console.log(response);
        return response;
    } catch (e) {
        // do something different here like an alert or something.
        console.error(e);
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
