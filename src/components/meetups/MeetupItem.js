import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import './Meetup.css';

const MeetupItem = ({ id, title, image, description, address }) => {
	const favoritesContext = useContext(FavoritesContext);
	const isFavorite = favoritesContext.isFavorite(id);
	const toggleFavoriteHandler = () => {
		if (isFavorite) {
			favoritesContext.removeFavorite(id);
		} else {
			favoritesContext.addFavorite({
				id,
				title,
				image,
				description,
				address,
			});
		}
	};

	return (
		<div className='card'>
			<li>
				<div className='meetup-image'>
					<img src={image} alt={title} />
				</div>
				<div>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
				</div>
				<button className='favorite-btn' onClick={toggleFavoriteHandler}>
					{isFavorite ? 'Remove from Favorites' : 'To Favorites'}
				</button>
			</li>
		</div>
	);
};

export default MeetupItem;
