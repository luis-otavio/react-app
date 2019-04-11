import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Exam from '../exam/exam';
import About from '../about/about';

export default props => (
	<Router history={hashHistory}>
		<Route path="/exams" component={Exam} />
		<Route path="/about" component={About} />
		<Redirect from="*" to="/exams" />
	</Router>
);
