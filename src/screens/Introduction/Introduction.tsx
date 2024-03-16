// -------------------------------------------------------------------------------------------

import './Introduction.scss';

import Resume from '../../assets/documents/Chetan Thosare (resume).pdf';
import Profile from '../../assets/images/profile.png';

// -------------------------------------------------------------------------------------------

const Introduction = () => {
	return (
		<section
			data-component='introduction'
			className='section'
			id='introduction'
		>
			<div
				data-component='introduction'
				className='container'
			>
				<div
					data-component='introduction'
					className='leading'
				>
					<div
						data-component='introduction'
						className='greeting title-medium'
					>
						&#128075; Hello there, I am
					</div>
					<div
						data-component='introduction'
						className='name display-large'
					>
						Chetan Thosare
					</div>
					<div
						data-component='introduction'
						className='profession title-large'
					>
						a full-stack developer,
					</div>
					<div
						data-component='introduction'
						className='description body-large'
					>
						As a self-taught developer with over 2.5 years of
						experience, my goal is to leverage my coding skills to
						enhance my problem-solving abilities, ultimately driving
						project success. I am eager to apply my expertise and
						contribute meaningfully to new opportunities.
					</div>
					<div
						data-component='introduction'
						className='buttons-container'
					>
						<a
							href={Resume}
							data-component='introduction'
							className='resume-button label-large'
							download='Chetan Thosare (resume)'
						>
							My resume
							<div
								data-component='introduction'
								className='overlay'
							></div>
						</a>
						<a
							href='#contact'
							data-component='introduction'
							className='contact-button label-large'
						>
							Contact me
							<div
								data-component='introduction'
								className='overlay'
							></div>
						</a>
					</div>
				</div>
				<div
					data-component='introduction'
					className='trailing'
				>
					<div
						data-component='introduction'
						className='frame'
					>
						<img
							data-component='introduction'
							className='profile'
							src={Profile}
							alt='Profile'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

// -------------------------------------------------------------------------------------------

export default Introduction;

// -------------------------------------------------------------------------------------------
