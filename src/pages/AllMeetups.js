import { useState, useEffect } from 'react';
import MeetupItem from '../components/meetups/MeetupItem';

const styles = {
	textAlign: 'center',
	backgroundColor: '#ffff',
	marginTop: '12px',
};
const AllMeetups = () => {
	const [loading, setLoading] = useState(true);
	const [meetups, setMeetups] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch(process.env.DBURL)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetupData = [];
				for (const key in data) {
					const meet = {
						id: key,
						...data[key],
					};

					meetupData.push(meet);
				}
				setLoading(false);
				setMeetups(meetupData);
			});
	}, []);

	if (loading) return <h1 style={styles}>Loading.....</h1>;
	return (
		<section>
			<h1 style={styles}>All meetups</h1>
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

export default AllMeetups;
