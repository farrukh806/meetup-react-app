import { useRef } from 'react';
import './NewMeetupForm.css';
const NewMeetupForm = ({ onAddMeetup }) => {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		};

		onAddMeetup(meetupData);
	};
	return (
		<section className='meetup-form'>
			<form onSubmit={submitHandler}>
				<input
					type='text'
					id='title'
					required
					autoComplete='off'
					placeholder='Title'
					ref={titleInputRef}
				/>
				<br />
				<input
					type='url'
					id='image'
					required
					autoComplete='off'
					placeholder='Image URL'
					ref={imageInputRef}
				/>
				<br />

				<input
					type='text'
					id='address'
					required
					autoComplete='off'
					placeholder='Address'
					ref={addressInputRef}
				/>
				<br />

				<textarea
					id='description'
					required
					autoComplete='off'
					rows='10'
					cols='44'
					ref={descriptionInputRef}
				></textarea>
				<br />
				<button className='favorite-btn'>Add Meetup</button>
			</form>
		</section>
	);
};

export default NewMeetupForm;
