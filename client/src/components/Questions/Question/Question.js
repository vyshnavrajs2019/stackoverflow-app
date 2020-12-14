import React from 'react';

import classes from './Question.module.css';

function Question({ question }) {
	const createdOn = new Date(question.creation_date);
	const tags = question.tags.map((tag, index) => <span className={classes.Question__tag + " m-5"} key={index}>{tag}</span>)
	return (
		<div className={classes.Question + " col"}>
			<p><a rel="noreferrer" target="_blank" href={question.link}>{question.title}</a></p>
			<div className={classes.Question_smalltext + " col"}>
				<p>Posted by: <a rel="noreferrer" target="_blank" href={question.owner.link}>{question.owner.display_name}</a></p>
				<div className={classes.Question__info + " row"}>
					Views: {question.view_count} |
					Created on: {createdOn.toUTCString()} |
					Score: {question.score} |
				</div>
				<div className="row v-center">
					Tags: {tags}
				</div>
			</div>
		</div>
	)
}

export default Question;