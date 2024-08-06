// -------------------------------------------------------------------------------------------

import './Projects.scss';

// -------------------------------------------------------------------------------------------

const projects = [
	{
		name: 'Cargojet',
		description:
			'Cargojet is a comprehensive web platform designed to manage goods and transportation across states and interstate. It includes features for managing various branches responsible for receiving and delivering goods, as well as functionalities for user management and generating essential documents such as bills, statements, quotations, and memos.',
		features: [
			'Goods Management: Efficiently manage the transportation of goods within states and interstate.',
			'Branch Management: Oversee various branches responsible for receiving and delivering goods.',
			'User Management: Administer users who interact with the system, including branch admins, branch managers, and customers.',
			'Document Generation: Generate and print essential documents such as bills, statements, quotations, and memos.',
			'Goods Tracking: Track the state of goods, including whether they are loaded in a truck, unloaded at the delivery branch, or delivered.',
			'Analytics Dashboard: Provide an analytics dashboard for administrators to monitor transportation efficiency and other key metrics.',
			'Security Measures: Incorporate security measures to protect sensitive data and ensure privacy.',
		],
	},
	{
		name: 'Bhusawal Division Catering Vendor Id',
		description:
			'The Bhusawal Division Catering Vendor ID application is a platform designed to facilitate the registration and verification process for catering vendors associated with the railway division. It includes both a mobile and web application interface, ensuring accessibility and ease of use for vendors and administrators alike.',
		features: [
			'Registration Portal: Vendors can register their details through a user-friendly registration portal.',
			'Verification Process: The application includes a robust verification process to ensure that registered vendors meet the necessary criteria and standards set by the railway division.',
			'Document Submission: Vendors can upload required documents directly through the application for verification purposes.',
			'Mobile App Integration: The mobile application provides convenience for vendors to access the platform on the go, facilitating seamless interaction and updates.',
			'Admin Dashboard: Administrators have access to a comprehensive dashboard where they can manage vendor registrations, verify documents, and monitor the overall process.',
			'Real-time Updates: Both vendors and administrators receive real-time updates on the status of registrations and verification processes.',
			'Security Measures: The application incorporates security measures to protect sensitive vendor information and ensure data privacy.',
			'User Support: The platform offers user support to assist vendors and administrators with any queries or issues they may encounter during the registration and verification process.',
		],
	},
	{
		name: 'Gym management',
		description:
			'The gym management application is a comprehensive software solution designed to streamline various aspects of gym operations and member management.',
		features: [
			'Membership Management: Allows administrators to add, edit, and remove member profiles, including personal information, membership plans, and payment details.',
			'Attendance Tracking: Enables gym staff to monitor member check-ins and track attendance records for classes, sessions, and facility usage.',
			'Class Scheduling: Facilitates the scheduling of fitness classes, group workouts, and personal training sessions, with options for recurring schedules and instructor assignments.',
			'Billing and Invoicing: Automates billing processes, generates invoices for membership fees, class fees, and additional services, and tracks payment status and history.',
			'Inventory Management: Manages gym equipment inventory, tracks usage, and notifies staff of maintenance requirements or low stock levels.',
			'Reporting and Analytics: Provides insights into member demographics, attendance trends, revenue generation, and other key performance indicators to inform business decisions.',
			'Security and Access Control: Implements role-based access control to ensure data privacy and security, with permissions tailored for administrators, staff, and members.',
			'Mobile Accessibility: Provides a mobile-friendly interface or dedicated mobile app for members to access schedules, make reservations, and manage their accounts on the go.',
		],
	},
	{
		name: 'Food delivery application',
		description:
			'A food delivery application designed to provide a convenient way for users to order food from various restaurants and have it delivered to their doorstep.',
		features: [
			'User-friendly interface allowing customers to easily browse restaurants and menus.',
			'Search functionality enabling users to find specific dishes or restaurants.',
			'Secure user authentication system for account creation and login.',
			'Integration with online payment gateways for seamless and secure transactions.',
			'Customizable user profiles allowing customers to save their favorite orders and delivery addresses.',
			'Interactive maps for users to locate nearby restaurants and track delivery drivers.',
			'Rating and review system for users to provide feedback on restaurants and dishes.',
			'Admin dashboard for restaurant owners to manage menu items, orders, and track performance.',
			'Order management system for delivery drivers to efficiently fulfill orders and navigate delivery routes.',
		],
	},
	{
		name: 'Online book store',
		description:
			'An online bookstore offering a diverse range of books across various genres.',
		features: [
			"Extensive catalog of books including fiction, non-fiction, academic, and children's literature.",
			'User-friendly interface for easy navigation and search functionality.',
			'Book recommendations based on user preferences.',
			'Customer reviews and ratings for informed purchasing decisions.',
			'Secure payment options for safe transactions.',
			'Seamless order tracking to monitor delivery status.',
			'Convenient online shopping experience from the comfort of home.',
		],
	},
];

// -------------------------------------------------------------------------------------------

const Projects = () => {
	return (
		<section
			data-component='projects'
			className='section'
			id='projects'
		>
			<div
				data-component='projects'
				className='container'
			>
				<h2
					data-component='projects'
					className='title display-medium'
				>
					Projects
				</h2>
				<div
					data-component='projects'
					className='sub-title body-large'
				>
					Projects are organized endeavors with specific goals,
					resources, and timelines aimed at achieving a desired
					outcome or delivering a product, service, or result.
					&#129312;
				</div>
				<div
					data-component='projects'
					className='projects-container'
				>
					{projects.map((project, index) => {
						return (
							<div
								key={`project-${index}`}
								data-component='projects'
								className='project'
							>
								<div
									data-component='projects'
									className='name title-large'
								>
									{project.name}
								</div>
								<div
									data-component='projects'
									className='description body-large'
								>
									{project.description}
								</div>
								<ul
									data-component='projects'
									className='features-container'
								>
									{project.features.map(
										(feature, featureIndex) => {
											return (
												<li
													key={`feature-${index}-${featureIndex}`}
													data-component='projects'
													className='feature body-small'
												>
													{feature}
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

export default Projects;

// -------------------------------------------------------------------------------------------
