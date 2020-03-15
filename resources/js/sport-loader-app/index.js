import ReactDOM from "react-dom";
import React from 'react';

const SportLoaderApp = () => (
	<div className="container">
		<header>
			Sport Logger
		</header>
	</div>
);

{
	const APP_ELEMENT_ID = 'sport-loader-app';
	if (document.getElementById(APP_ELEMENT_ID)) {
		ReactDOM.render(<SportLoaderApp/>, document.getElementById(APP_ELEMENT_ID));
	}
}
