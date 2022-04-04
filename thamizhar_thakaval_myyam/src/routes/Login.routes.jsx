import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Authentication/Login/login';
import ForgetPassword from '../pages/Authentication/ForgetPassword/forgetPassword';
import Home from '../pages/TamilMatrimony/Home/home';
import Register from '../pages/TamilMatrimony/Register/register';
import Details from '../pages/TamilMatrimony/Details/details';

function LoginRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact
                    element={<Login/>} />
                <Route path="/Matrimony/forgetPassword" exact
                    element={<ForgetPassword/>} />
                    <Route path="/Matrimony/home" exact
                    element={<Home/>} />
                <Route path="/Matrimony/register" exact
                    element={<Register/>} />
                <Route path="/Matrimony/details" exact
                    element={<Details/>} />
            </Routes>
        </Router>
    );
}

export default LoginRoutes;