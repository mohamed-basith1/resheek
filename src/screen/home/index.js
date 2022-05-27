import { Skeleton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';
import Axios from '../../api/index';
import './home.css';
const Home = () => {
	const [ data, setData ] = useState([]);
	useEffect(() => {
		getdata();
	}, []);

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
			width: 130,
			renderCell: (e) => {
				return data.length != 0 ? <div>{e.row.name}</div> : <div>loosu</div>;
			}
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
	const simmercolumns = [
		{
			field: 'id',
			headerName: 'Id',
			width: 130,
			renderCell: (e) => {
				return <Skeleton variant="rectangular" width={20} height={18} />;
			}
		},
		{
			field: 'name',
			headerName: 'Name',
			width: 230,
			renderCell: (e) => {
				return <Skeleton variant="rectangular" width={20} height={18} />;
			}
		},

		{
			field: 'gender',
			headerName: 'Gender',
			width: 130,
			renderCell: (e) => {
				return <Skeleton variant="rectangular" width={20} height={18} />;
			}
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 230,
			renderCell: (e) => {
				return <Skeleton variant="rectangular" width={20} height={18} />;
			}
		},
		{
			field: 'cell',
			headerName: 'Cell',
			width: 230,
			renderCell: (e) => {
				return <Skeleton variant="rectangular" width={20} height={18} />;
			}
		}
	];
	const simmerdata = [
		{ name: 'sample', id: '1', gender: 'male', email: 'email', cell: '000' },
		{ name: 'sample', id: '2', gender: 'male', email: 'email', cell: '000' },
		{ name: 'sample', id: '3', gender: 'male', email: 'email', cell: '000' },
		{ name: 'sample', id: '4', gender: 'male', email: 'email', cell: '000' },
		{ name: 'sample', id: '5', gender: 'male', email: 'email', cell: '000' }
	];
	return (
		<div className="homecontainer">
			{data.length}
			<div className="tables">
				{data.length === 0 ? (
					<DataGrid rows={simmerdata} columns={columns} pageSize={5} />
				) : (
					<DataGrid rows={data} columns={columns} pageSize={5} />
				)}
			</div>

			<div className="tiles">
				<DataGrid rows={data} columns={columns} pageSize={5} />
			</div>
		</div>
	);
};

export default Home;
