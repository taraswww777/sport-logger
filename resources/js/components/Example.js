import React from 'react';
import ReactDOM from 'react-dom';

export function Example() {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="card">
						<div className="card-header">Example Component</div>

						<div className="card-body">I'm an example component!</div>
					</div>
				</div>
			</div>
		</div>
	);
}

console.log('example');
if (document.getElementById('example')) {
	console.log('document.getElementById(\'example\'):', document.getElementById('example'));
	ReactDOM.render(<Example/>, document.getElementById('example'));
}
