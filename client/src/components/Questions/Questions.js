import React, { useState } from 'react';

import Question from './Question/Question';
import classes from './Questions.module.css';

const PAGE_SIZE = 10;

function Questions({ questions }) {

	const [page, setPage] = useState(0);

	const startIndex = page * PAGE_SIZE;
	const endIndex = startIndex + PAGE_SIZE;

	const questionList = questions.slice(startIndex, endIndex).map(question => <Question key={question.question_id} question={question} />);

	const totalPages = Math.ceil(questions.length / PAGE_SIZE);
	let pageButtons = [];
	for (let i = 0; i < totalPages; i++) {
		if (i === page) {
			pageButtons.push(<button key={i} className={classes.Questions__pagebtn + " " + classes.Questions__pagebtn_active}>{i + 1}</button>);
			continue;
		} 
		pageButtons.push(<button key={i} className={classes.Questions__pagebtn} onClick={() => setPage(i)}>{i + 1}</button>);
	}

	return (
		<div className={classes.Questions}>
			{questionList}
			<div className="row">
				{pageButtons}
			</div>
		</div>
	)
}

export default Questions;