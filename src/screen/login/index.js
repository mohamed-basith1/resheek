import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
const Login = () => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const navigation = useNavigate();
	const handlesubmit = () => {
		console.log(username, password, '--------------');

		navigation('/home');
	};

	return (
		<div className="homecontainer">
			<div className="loginbox">
				<h2>login</h2>
				<div>
					<TextField
						id="outlined-basic"
						label="username"
						variant="outlined"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<p className="errormessage">check user user name</p>
				</div>
				<div>
					<TextField
						id="standard-basic"
						label="password"
						variant="outlined"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<p className="errormessage">check user password</p>
				</div>

				<Button variant="contained" onClick={() => handlesubmit()}>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default Login;
