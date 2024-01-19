import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();

    const handleLogout = () => {
        // Perform any logout-related tasks (clearing tokens, etc.)
        // Redirect to the login page after logout
        history.push('/');
    };

    return (
        <button className="btn-default" onClick={handleLogout}>
            Exit Transaction
        </button>
    );
};

export default Logout;
