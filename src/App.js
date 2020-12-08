import React from 'react'
import {Redirect, BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import Homepage from './components/Homepage/Homepage'
import CardContent from './components/CardContent/CardContent'
import error from './components/error/error'
import {englishWritings} from './components/data/englishWritings'
import {hindiWritings} from './components/data/hindiWritings'

const App = () => {
	const renderPosts = (routerProps) => {
		let postId = parseInt(routerProps.match.params.postId)
		let genre = routerProps.match.params.genre
		if (genre === 'english') {
			let post = englishWritings.find(postObj => postObj.id === postId)
			return ( post ? <CardContent post={post} /> : <error />)
		} else {
			let post = hindiWritings.find(postObj => postObj.id === postId)
			return ( post ? <CardContent post={post} /> : <error />)
		}
	}

	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Homepage} />
			    	<Route exact path="/:genre/:postId" render={renderPosts} />
			    	<Route path="/404" component={error} />
	            	<Redirect to="/404" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
