import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth.js';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const { token,authError } = useAuth();

    

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://morning-coast-54846.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('User Added as Admin');
                    setSuccess(true);
                        e.target.reset();
                    }
                    else if (data.modifiedCount === 0 && data.matchedCount > 0) {
                        alert('User Already Added as Admin');
                        e.target.reset();
                    }
                else {
                   alert('User is not Valid!');
                    e.target.reset();
                }
            })

        e.preventDefault()
        
    }
    return (
        <div className="text-center mt-5">
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
          
            
        </div>
    );
};

export default MakeAdmin;