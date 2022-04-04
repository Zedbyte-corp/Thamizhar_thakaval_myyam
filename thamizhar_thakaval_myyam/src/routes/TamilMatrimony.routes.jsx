import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/TamilMatrimony/Home/home';
import Register from '../pages/TamilMatrimony/Register/register';
import Details from '../pages/TamilMatrimony/Details/details';


function MatrimonyRoutes() {
    return (
        <Router>
            <Routes>
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

export default MatrimonyRoutes;