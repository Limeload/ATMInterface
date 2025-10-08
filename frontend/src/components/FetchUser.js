import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Dashboard from "./Dashboard";

function FetchUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const storedUser = localStorage.getItem('atmUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setLoading(false);
            return;
        }

        fetch('http://localhost:8080/api/session/active')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 204) {
                    // No active session
                    return null;
                }
                throw new Error('Session check failed');
            })
            .then(data => {
                if (data) {
                    setUser(data);
                    localStorage.setItem('atmUser', JSON.stringify(data));
                    localStorage.setItem('atmToken', data.sessionToken);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching active session:', error);
                localStorage.removeItem('atmUser');
                localStorage.removeItem('atmToken');
                setLoading(false);
            });
    }, [location]);

    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h3>Loading...</h3>
            </div>
        );
    }

    return (
        <div>
            <Dashboard user={user} />
        </div>
    );
}

export default FetchUser;