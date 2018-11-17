import React, { Component } from 'react';


import { Route, Switch } from 'react-router-dom'
import Home from './Home';
import CurrentIssues from './CurrentIssues';
import IssueCommentAmount from './IssueCommentAmount';
import IssueLabel from './IssueLabel';
import LanguageList from './LanguageList';
import PieChart from './PieChart';
import RelatingComments from './RelatingComments';
import RepoRecentActivity from './RepoRecentActivity';
import TotalStars from './TotalStars';
import UserRecentActivities from './UserRecentActivities';



class App extends Component {
	
	state = {}

  render() {
		
		return (
			<Switch>
				<Route exact path='/' render={() => (
					<Home />
				)} />
				<Route exact path='/CurrentIssues' render={() => (
					<CurrentIssues />
				)} />
				<Route exact path='/IssueCommentAmount' render={() => (
					<IssueCommentAmount />
				)} />
				<Route exact path='/IssueLabel' render={() => (
					<IssueLabel />
				)} />
				<Route exact path='/LanguageList' render={() => (
					<LanguageList />
				)} />
				<Route exact path='/PieChart' render={() => (
					<PieChart />
				)} />
				<Route exact path='/RelatingComments' render={() => (
					<RelatingComments />
				)} />
				<Route exact path='/RepoRecentActivity' render={() => (
					<RepoRecentActivity />
				)} />
				<Route exact path='/TotalStars' render={() => (
					<TotalStars />
				)} />
				<Route exact path='/UserRecentActivities' render={() => (
					<UserRecentActivities />
				)} />
				<Route render={() => (
						<h1>Not Found</h1>
				)} />
			</Switch>
		);
	}
}

export default App;
