import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupItem from '../components/meetups/MeetupItem';

const styles = {
	textAlign: 'center',
	backgroundColor: '#ffff',
	marginTop: '12px',
};

const Favorites = () => {
	const favoritesContext = useContext(FavoritesContext);
	const meetups = favoritesContext.favorites;
	 
	let content;
	if (favoritesContext.favoritesTotal === 0) {
		content = <h3 style={styles}>No favorite meetups yet!</h3>;
		return content;
	}
	return (
		<section>
			<h1 style={styles}>Favorites</h1>;
			<ul className='meetup-list'>
				<div className='item'>
					{meetups.map((meetup) => {
						return (
							<MeetupItem
								id={meetup.id}
								title={meetup.title}
								image={meetup.image}
								description={meetup.description}
								address={meetup.address}
								key={meetup.id}
							/>
						);
					})}
				</div>
			</ul>
		</section>
	);
};

export default Favorites;
