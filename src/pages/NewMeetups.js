import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const styles = {
	textAlign: 'center',
	backgroundColor: '#ffff',
	marginTop: '12px',
};
const NewMeetups = () => {
	const history = useHistory();

	const addMeetupHandler = (meetupData) => {
		fetch(process.env.DBURL, {
			method: 'POST',
			body: JSON.stringify(meetupData),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => {
			history.replace('/');
		});
	};

	return (
		<section>
			<h1 style={styles}>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	);
};

export default NewMeetups;
