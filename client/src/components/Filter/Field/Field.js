import React from 'react';

function Field({ field, value, setParams }) {
	const { label, type, paramName, choices } = field;
	const handleChange = (e) => {
		let val = e.target.value;
		setParams(prev => ({ ...prev, [paramName]: val }));
	}
	let inputType = null;
	if (type === String)
		inputType = <input type="text" name={paramName} placeholder={label} value={value} onChange={handleChange} className="input" />;

	else if (type === Number)
		inputType = <input type="number" name={paramName} placeholder={label} value={value} onChange={handleChange} className="input" />

	else if (type === Date)
		inputType = <input type="date" name={paramName} placeholder={label} value={value} onChange={handleChange} className="input" />

	else {
		const optionsArr = type === Array ? choices : ["", "True", "False"]; // First array element is the default
		const options = optionsArr.map((opt, id) => <option className="input" key={id}>{opt}</option>);
		inputType = <select name={paramName} className="input" onChange={handleChange}>{options}</select>
	}

	return (
		<div className="row v-center border p-5 m-5">
			<label>{field.label}</label>
			{inputType}
		</div>
	)
}

export default Field;