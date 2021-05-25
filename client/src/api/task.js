import axios from "axios";

export const createTask = async (e, description) => {
    e.preventDefault();

    const headers = {
        "content-type": "application/json",
        withCredentials: true
    };

    const data = {
        description:
            "Created this through using an auth cookie from the browser",
        completed: "false"
    };

    try {
        const response = await axios.post("/api/tasks", data, headers);
        // dispatch a new action to store the cookie in the response header.
        console.log(response);
        return response;
    } catch (e) {
        // do something different here like an alert or something.
        console.error(e);
    }
};

export const getTasks = async (e, options) => {
    e.preventDefault();

    const headers = {
        withCredentials: true
    };

    // GET /tasks?completed=false
    // GET /tasks?limit='x'&skip='y'
    // GET /tasks?sortBy=createdAt:desc
    const params = {
        ...options,
        sortBy: "createdAt:desc"
    };

    try {
        const response = await axios.get("/api/tasks", { headers, params });
        // dispatch a new action to store the cookie in the response header.
        console.log(response);
        return response;
    } catch (e) {
        // do something different here like an alert or something.
        console.error(e);
    }
};

export const getTask = async (e, id) => {
    e.preventDefault();

    const dummyId = "60ad431f2abb873f0230f902";
    id = dummyId;

    const headers = {
        withCredentials: true
    };

    try {
        const response = await axios.get(`/api/tasks/${id}`, headers);
        // dispatch a new action to store the cookie in the response header.
        console.log(response);
        return response;
    } catch (e) {
        // do something different here like an alert or something.
        console.error(e);
    }
};

export const updateTask = async (e, id, description, completed) => {
    e.preventDefault();

    const dummyId = "60ad431f2abb873f0230f902";
    id = dummyId;

    const data = {
        description: "Updated this task through the client again",
        completed: "false"
    };

    const headers = {
        "content-type": "application/json",
        withCredentials: true
    };

    try {
        // this patch uses route param (not query param)
        const response = await axios.patch(`/api/tasks/${id}`, data, headers);
        // dispatch a new action to store the cookie in the response header.
        console.log(response);
        return response;
    } catch (e) {
        // do something different here like an alert or something.
        console.error(e);
    }
};

export const deleteTask = async (e, id) => {
    e.preventDefault();

    const dummyId = "60ad431f2abb873f0230f902";
    id = dummyId;

    const headers = {
        withCredentials: true
    };

    try {
        const response = await axios.delete(`/api/tasks/${id}`, headers);
        // dispatch a new action to store the cookie in the response header.
        console.log(response);
        return response;
    } catch (e) {
        // do something different here like an alert or something.
        console.error(e);
    }
};
