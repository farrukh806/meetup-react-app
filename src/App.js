import { Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';

function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route path='/' exact component={AllMeetups} />
				<Route path='/favorites' exact component={Favorites} />
				<Route path='/new' exact component={NewMeetups} />
			</Switch>
		</div>
	);
}

export default App;
