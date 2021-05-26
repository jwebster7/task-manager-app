import { Switch, Route } from "react-router-dom";

import Login from "./components/login/login.component";
import Register from "./components/register/register.component";

import {
    createTask,
    deleteTask,
    getTask,
    getTasks,
    updateTask
} from "./api/task";

import {
    deleteUserAccount,
    getUserProfile,
    globallyLogoutUser,
    logoutUser,
    updateUserProfile
} from "./api/user";

function App() {
    return (
        <Switch>
            <Route exact path='/'>
                <Login />
                <Register />
                <button onClick={(e) => createTask(e)}>Create Task</button>
                <button onClick={(e) => getTasks(e)}>Get Tasks</button>
                <button onClick={(e) => getTask(e)}>Get Task</button>
                <button onClick={(e) => deleteTask(e)}>Delete Task</button>
                <button onClick={(e) => updateTask(e)}>Update Task</button>
                <button onClick={(e) => logoutUser(e)}>Logout</button>
                <button onClick={(e) => globallyLogoutUser(e)}>
                    Globally Logout
                </button>
                <button onClick={(e) => getUserProfile(e)}>Get Profile</button>
                <button onClick={(e) => updateUserProfile(e)}>
                    Update Profile
                </button>
                <button onClick={(e) => deleteUserAccount(e)}>
                    Delete Profile
                </button>
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/register'>
                <Register />
            </Route>
        </Switch>
    );
}

export default App;
