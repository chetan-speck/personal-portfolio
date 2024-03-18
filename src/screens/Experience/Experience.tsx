// -------------------------------------------------------------------------------------------

import './Experience.scss';

// -------------------------------------------------------------------------------------------

const experience = [
	{
		company: 'Ecomperor',
		location: 'Bhusawal',
		role: 'Intern',
		duration: 'July 2021 - Dec 2021',
		durationMonths: 6,
		description:
			'Frontend web development internship focusing on enhancing user experience.',
		responsibilities: [
			'Developed frontend components using HTML, CSS, and JavaScript.',
			'Utilized React.js to improve frontend functionality and interactivity.',
			'Assisted in integrating REST APIs for data retrieval and updates.',
			'Collaborated with team members to troubleshoot and resolve frontend issues.',
			'Participated in team meetings to discuss project progress and goals.',
			'Contributed ideas for improving user interface and user experience.',
		],
	},
	{
		company: 'Ecomperor',
		location: 'Kalyan',
		role: 'Frontend Developer',
		duration: 'January 2022 - Nov 2022',
		durationMonths: 11,
		description:
			'Focused on developing responsive and user-friendly web applications.',
		responsibilities: [
			'Developed frontend interfaces using React.js to create dynamic user experiences.',
			'Ensured web applications were responsive across various devices and screen sizes.',
			'Integrated REST APIs into frontend applications for seamless data communication.',
			'Collaborated with backend developers to ensure frontend and backend integration.',
			'Performed code reviews and provided feedback to improve code quality.',
			'Worked closely with UX/UI to implement design specifications.',
		],
	},
	{
		company: 'M-SOFTS',
		location: 'Bhusawal',
		role: 'Full-stack Developer',
		duration: 'December 2022 - February 2024',
		durationMonths: 14,
		description:
			'Focused on developing and maintaining web applications with a full-stack approach.',
		responsibilities: [
			'Led full-stack development projects using React.js, Node.js, and Express.js.',
			'Managed web applications and databases with MySQL for efficient data handling.',
			'Designed and implemented REST APIs for seamless frontend-backend communication.',
			'Implemented authentication and authorization with JWT tokens to enhance security.',
			'Provided mentorship and technical guidance to junior and intern developers.',
			'Conducted regular code reviews to ensure adherence to best practices.',
		],
	},
];

// -------------------------------------------------------------------------------------------

const Experience = () => {
	return (
		<section
			data-component='experience'
			className='section'
			id='experience'
		>
			<div
				data-component='experience'
				className='container'
			>
				<h2
					data-component='experience'
					className='title display-medium'
				>
					Experience
				</h2>
				<div
					data-component='experience'
					className='sub-title body-large'
				>
					Experience is the accumulation of knowledge, skills, and
					understanding gained through direct involvement or
					observation of events, activities, or situations over time.
					&#129300;
				</div>
				<div
					data-component='experience'
					className='experience-cards-container'
				>
					{experience.map((data, index) => {
						return (
							<div
								key={`experience-${index}`}
								data-component='experience'
								className='experience-card'
							>
								<div
									data-component='experience'
									className='tape'
								></div>
								<div
									data-component='experience'
									className='role title-large'
								>
									{data.role}
								</div>
								<div
									data-component='experience'
									className='company title-medium'
								>
									{data.company},
								</div>
								<div
									data-component='experience'
									className='location body-medium'
								>
									at {data.location},
								</div>
								<div
									data-component='experience'
									className='duration body-medium'
								>
									{data.duration},
								</div>
								<div
									data-component='experience'
									className='durationMonths body-medium'
								>
									worked for {data.durationMonths} months
								</div>

								<div
									data-component='experience'
									className='description body-medium'
								>
									{data.description}
								</div>
								<ul
									data-component='experience'
									className='responsibilities-container'
								>
									{data.responsibilities.map(
										(
											responsibility,
											responsibilityIndex
										) => {
											return (
												<li
													key={`responsibility-${index}-${responsibilityIndex}`}
													data-component='experience'
													className='responsibility body-small'
												>
													{responsibility}
												</li>
											);
										}
									)}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

// -------------------------------------------------------------------------------------------

export default Experience;

// -------------------------------------------------------------------------------------------
