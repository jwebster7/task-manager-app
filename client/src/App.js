import { Switch, Route } from "react-router-dom";

import Login from "./components/login/login.component";
import Register from "./components/register/register.component";

import { createNewTask } from "./api/task";
import {
    deleteUserAccount,
    getUserProfile,
    globallyLogoutUser,
    loginUser,
    logoutUser,
    registerUser,
    updateUserProfile
} from "./api/user";

function App() {
    return (
        <Switch>
            <Route exact path='/'>
                <button onClick={(e) => registerUser(e)}>Register</button>
                <button onClick={(e) => createNewTask(e)}>Create Task</button>
                <button onClick={(e) => loginUser(e)}>Login</button>
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
