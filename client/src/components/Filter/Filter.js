import React, { useState, useEffect } from 'react';

import classes from './Filter.module.css';
import fieldConfigs from '../../configurations/Fields';
import Field from './Field/Field';
import Loader from '../Loader/Loader';
import MessageModal from '../MessageModal/MessageModal';

const API_ENDPOINT = "http://localhost:8000";

function Filter({ setStackoverlow, setOverlay }) {

	const initialState = {};
	fieldConfigs.forEach(field => {
		if (field.type === Array)
			return initialState[field.paramName] = field.choices[0];
		else
			return initialState[field.paramName] = "";
	});
	const [params, setParams] = useState(initialState);

	const fetchData = async () => {
		setOverlay({ show: true, component: <Loader /> });
		let query = "";
		Object.keys(params).forEach(key => {
			if (params[key].length) {
				if (query.length)
					query += '&';
				let value = params[key];
				if (fieldConfigs.filter(_ => _.paramName === key)[0].type === Date)
					value = new Date(value).getTime();
				query += `${key}=${value}`;
			}
		});
		const url = `${API_ENDPOINT}?${query}`;
		console.log("Fetching data from", url);
		const response = await fetch(url);
		const { items, error_message, error_name, detail } = await response.json();
		if (error_name) {
			setOverlay({ show: true, component: <MessageModal isError message={`${error_name}: ${error_message}`} setOverlay={setOverlay} /> });
			return;
		} 
		else if (detail && response.status === 429) {
			setOverlay({ show: true, component: <MessageModal isError message={`${detail}`} setOverlay={setOverlay} /> });
			return;
		}
		setStackoverlow({ questions: items });
		setOverlay({ show: false, component: null });
	};

	const fields = fieldConfigs.map((field, id) => {
		return <Field key={id} field={field} value={params[field.paramName] || ""} setParams={setParams} />
	});

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className={classes.Filter}>
			<button type="button" className={classes.Filter__button + " btn m-5"} onClick={fetchData}>Update Filter</button>
			{fields}
		</div>
	)
}

export default Filter;