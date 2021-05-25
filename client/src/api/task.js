import axios from "axios";

export const createNewTask = async (e, description) => {
    e.preventDefault();

    const headers = {
        "content-type": "application/json",
        connection: "keep-alive",
        withCredentials: true
    };

    const data = {
        description: "Created this through using an auth cookie from the browser",
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
