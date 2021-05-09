import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
	return (
		<nav>
			<h3>MeetUp</h3>
			<ul>
				<li className='nav-link'>
					<Link to='/'>Home</Link>
				</li>
				<li className='nav-link'>
					<Link to='/favorites'>Favorites</Link>
				</li>
				<li className='nav-link'>
					<Link to='/new'>Add New Meetup</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
