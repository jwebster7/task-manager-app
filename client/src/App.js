import { Switch, Route } from "react-router-dom";

import Login from "./components/login/login.component";
import Register from "./components/register/register.component";

function App() {
    return (
        <Switch>
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
