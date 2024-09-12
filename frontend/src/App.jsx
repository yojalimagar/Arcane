// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserManagement from "./components/UserManagement"; // Import the new UserManagement component
import Signup from "./authentication/Signup";
import Login from "./authentication/Login";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/users" element={<UserManagement />} /> {/* Route for user management */}
                <Route path="/signup" element={<Signup />} /> {/* Route for signup */}
                <Route path="/login" element={<Login />} /> {/* Route for login */}
            </Routes>
        </Router>
    );
}

export default App;
