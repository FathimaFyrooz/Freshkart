import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import RegistrationForm from './Components/Register';
import ConnectToJDE from './Components/Jde';
import ChatBox from './Components/Chat';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Define the route for the login page */}
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegistrationForm/>}/>
                    {/* <Route path="/jde" element={<ConnectToJDE/>}/> */}
                    <Route path="/chat" element={<ChatBox/>}/>
                    {/* Other routes can be defined here */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
