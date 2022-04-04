import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Authentication/Login/login';
import ForgetPassword from '../pages/Authentication/ForgetPassword/forgetPassword';


function LoginRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact
                    element={<Login/>} />
                <Route path="/Matrimony/forgetPassword" exact
                    element={<ForgetPassword/>} />
            </Routes>
        </Router>
    );
}

export default LoginRoutes;