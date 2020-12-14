import React, { useState } from 'react';

import Filter from '../../components/Filter/Filter';
import Overlay from '../../components/Overlay/Overlay';
import Questions from '../../components/Questions/Questions';

function App() {

	const [overlay, setOverlay] = useState({ show: false, component: null });
	const [stackoverflow, setStackoverlow] = useState({ questions: [] });

	return (
		<React.Fragment>
			<Filter setStackoverlow={setStackoverlow} setOverlay={setOverlay} />
			<Questions hasNext={stackoverflow.hasNext} hasPrevious={stackoverflow.hasPrevious} questions={stackoverflow.questions} />
			{overlay.show ? <Overlay>{overlay.component}</Overlay> : null}
		</React.Fragment>
	)
}

export default App;