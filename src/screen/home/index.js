import { Button, Skeleton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';
import Axios from '../../api/index';
import './home.css';
const Home = () => {
	const [ data, setData ] = useState([]);
	const [ refresh, setRefresh ] = useState(true);
	useEffect(
		() => {
			getdata();
		},
		[ refresh ]
	);

	const getdata = async () => {
		const res = await Axios.get();
		console.log(res.data, 'etu api');
		const apidata = res.data;
		let newdata = [];
		apidata.results.forEach((e) => {
			const newformat = {
				name: e.name.first,
				email: e.email,
				id: e.login.uuid,
				gender: e.gender,
				cell: e.cell
			};
			newdata.push(newformat);
		});
		setData(newdata);
	};
	console.log(data, 'state------------------------------------------------------');
	const columns = [
		{
			field: 'id',
			headerName: 'Id',
			width: 130
		},
		{
			field: 'name',
			headerName: 'Name',
			width: 230
		},

		{ field: 'gender', headerName: 'Gender', width: 130 },
		{ field: 'email', headerName: 'Email', width: 230 },
		{ field: 'cell', headerName: 'Cell', width: 230 }
	];

	return (
		<div className="homecontainer">
			<Button variant="outlined" onClick={() => setRefresh(!refresh)}>
				Refresh
			</Button>
			<div className="tablescontainer">
				<div className="tables">
					<DataGrid rows={data} columns={columns} pageSize={5} />
				</div>

				<div className="tiles">
					<div>title</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
