import { createContext, useState } from 'react';

const FavoritesContext = createContext({
	favorites: [],
	favoritesTotal: 0,
	addFavorite: (favoriteMeetup) => {},
	removeFavorite: (meetupId) => {},
	isFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = (props) => {
	const [userFavorites, setUserFavorites] = useState([]);

	const addFavoriteHandler = (favoriteMeetup) => {
		setUserFavorites((preUserFavorites) => {
			return preUserFavorites.concat(favoriteMeetup);
		});
	};

	const removeFavoriteHandler = (meetupId) => {
		setUserFavorites((preUserFavorites) => {
			return preUserFavorites.filter((meetup) => meetup.id !== meetupId);
		});
	};

	const isFavoriteHandler = (meetupId) => {
		return userFavorites.some((meetup) => meetup.id === meetupId);
	};

	const context = {
		favorites: userFavorites,
		favoritesTotal: userFavorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		isFavorite: isFavoriteHandler,
	};

	return (
		<FavoritesContext.Provider value={context}>
			{props.children}
		</FavoritesContext.Provider>
	);
};

export default FavoritesContext;
