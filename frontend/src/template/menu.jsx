import React from 'react';
export default props => (
	<nav className="navbar navbar-light bg-light">
		<div className="container">
			<div className="navbar-header">
				<a className="navbar-brand" href="#">
					<i className="fa fa-heartbeat" /> App Saúde
				</a>
			</div>
			<div id="navbar" className="navbar-collapse collapse">
				<ul className="nav navbar-nav">
					<li>
						<a href="#/exams">Exames</a>
					</li>
					<li>
						<a href="#/about">Sobre</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);
