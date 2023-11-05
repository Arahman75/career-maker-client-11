import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const name = useContext(AuthContext)
    return (
        <div>
            <h3>Please login: {name}</h3>
        </div>
    );
};

export default Login;