import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Dashboard from "./Dashboard";

function FetchUser() {
    const [user, setUser] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Fetch user information from your authentication service or backend
        // Replace this with your actual logic to retrieve user data
        fetch('http://localhost:8080/api/bankUsers')
            .then(response => response.json())
            .then(data => setUser(data));
    }, [location]); // Run the effect when the location changes (e.g., after login)

    return (
        <div>
            <Dashboard user={user} />
        </div>
    );
}

export default FetchUser;