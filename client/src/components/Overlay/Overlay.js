import React from 'react';

import classes from './Overlay.module.css';

function Overlay({ children }) {
	return (
		<div className={classes.Overlay}>
			{children}
		</div>
	)
}

export default Overlay;