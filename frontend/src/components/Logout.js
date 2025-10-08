import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();

    const handleLogout = async () => {
        try {
            const storedUser = localStorage.getItem('atmUser');
            if (storedUser) {
                const user = JSON.parse(storedUser);
                
                // Call logout API
                await fetch('http://localhost:8080/api/logout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: user.username }),
                });
            }
        } catch (error) {
            console.error('Logout API error:', error);
        } finally {
            localStorage.removeItem('atmUser');
            localStorage.removeItem('atmToken');
            history.push('/');
        }
    };

    return (
        <button className="btn-default" onClick={handleLogout}>
            Exit Transaction
        </button>
    );
};

export default Logout;
