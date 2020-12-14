import React from 'react';

import classes from './MessageModal.module.css';

function MessageModal({ isError, message, setOverlay }) {
	const msg = (message[0] || "").toUpperCase() + message.slice(1);
	const handleOk = () => {
		setOverlay({ show: false, component: null });
	}
	return (
		<div className={classes.MessageModal}>
			<p className={isError ? classes.MessageModal_error : ""}>{msg}</p>
			<button type="button" className="btn" onClick={handleOk}>Ok</button>
		</div>
	)
}

export default MessageModal;