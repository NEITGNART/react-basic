import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmployeeHourReport from "./component/EmployeeHourReport";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EmployeeHourReport/>}></Route>
            </Routes>
        </BrowserRouter>


    );
};

export default App;
