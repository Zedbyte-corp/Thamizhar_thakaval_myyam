import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Authentication/Login/login';
import ForgetPassword from '../pages/Authentication/ForgetPassword/forgetPassword';
import Home from '../pages/TamilMatrimony/Home/home';
import Register from '../pages/TamilMatrimony/Register/register';
import Details from '../pages/TamilMatrimony/Details/details';
import EditDetails from '../pages/TamilMatrimony/EditDetails/edit_details';
import About from "../pages/TamilMatrimony/About/about"
import Mission from "../pages/TamilMatrimony/MissionVision/mission"
import Terms from "../pages/TamilMatrimony/Terms/terms"

function LoginRoutes() {
    return (
        <BrowserRouter>
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
                <Route path="/Matrimony/edit_details" exact
                    element={<EditDetails/>} />
                <Route path="/Matrimony/about" exact
                    element={<About/>} />
                <Route path="/Matrimony/vision_and_mission" exact
                    element={<Mission/>} />
                <Route path="/Matrimony/terms" exact
                    element={<Terms/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default LoginRoutes;