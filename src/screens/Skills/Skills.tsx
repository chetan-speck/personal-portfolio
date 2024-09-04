// -------------------------------------------------------------------------------------------

import './Skills.scss';

import css from '../../assets/logos/css.svg';
import express from '../../assets/logos/express.svg';
import git from '../../assets/logos/git.svg';
import html from '../../assets/logos/html.svg';
import javascript from '../../assets/logos/javascript.svg';
import jwt from '../../assets/logos/jwt.svg';
import mongodb from '../../assets/logos/mongodb.svg';
import mysql from '../../assets/logos/mysql.svg';
import node from '../../assets/logos/node.svg';
import react from '../../assets/logos/react.svg';
import three from '../../assets/logos/three.svg';
import typescript from '../../assets/logos/typescript.svg';

// -------------------------------------------------------------------------------------------

const skills = [
	{
		label: 'HTML',
		icon: html,
		description:
			'HTML (Hypertext Markup Language) is the standard language for creating and structuring web pages.',
	},
	{
		label: 'CSS',
		icon: css,
		description:
			'CSS (Cascading Style Sheets) is a language used to style the presentation of HTML elements on web pages.',
	},
	{
		label: 'JavaScript',
		icon: javascript,
		description:
			'JavaScript is a versatile scripting language primarily used for web development to add interactivity and dynamic behavior to websites.',
	},
	{
		label: 'TypeScript',
		icon: typescript,
		description:
			'TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript, adding optional static typing and other advanced features to enhance development workflows.',
	},
	{
		label: 'React',
		icon: react,
		description:
			'React is a JavaScript library for building user interfaces.',
	},
	{
		label: 'React Native',
		icon: react,
		description:
			'React Native is a framework for building mobile applications using JavaScript and React.',
	},
	{
		label: 'Node.js',
		icon: node,
		description:
			'Node.js is a runtime environment that allows execution of JavaScript code outside of a web browser, often used for server-side applications.',
	},
	{
		label: 'Express.js',
		icon: express,
		description:
			'Express.js is a minimalist web application framework for Node.js, used for building server-side applications and APIs.',
	},
	{
		label: 'MongoDB',
		icon: mongodb,
		description:
			'MongoDB is a NoSQL database system that uses a document-oriented data model, storing data in flexible, JSON-like documents.',
	},
	{
		label: 'MySQL',
		icon: mysql,
		description:
			'MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) for managing and querying data.',
	},
	{
		label: 'JWT',
		icon: jwt,
		description:
			'JWT (JSON Web Token) is a compact, self-contained method for securely transmitting information between parties as a JSON object.',
	},
	{
		label: 'Git',
		icon: git,
		description:
			'Git is a distributed version control system for tracking changes in source code during software development.',
	},
	{
		label: 'Three.js',
		icon: three,
		description:
			'Three.js is a JavaScript library that simplifies the creation and rendering of 3D graphics in web browsers using WebGL.',
	},
];

// -------------------------------------------------------------------------------------------

const Skills = () => {
	return (
		<section
			data-component='skills'
			className='section'
			id='skills'
		>
			<div
				data-component='skills'
				className='container'
			>
				<h2
					data-component='skills'
					className='title display-medium'
				>
					Skills
				</h2>
				<div
					data-component='skills'
					className='sub-title body-large'
				>
					Skill is the refined ability to proficiently execute tasks
					or solve problems within a particular domain or activity.
					&#128526;
				</div>
				<div
					data-component='skills'
					className='skill-cards-container'
				>
					{skills.map((skill, index) => {
						return (
							<div
								key={`skill-${index}`}
								data-component='skills'
								className='skill-card'
							>
								<img
									data-component='skills'
									className='icon'
									src={skill.icon}
									alt={skill.label}
								/>
								<div
									data-component='skills'
									className='label title-large'
								>
									{skill.label}
								</div>
								<div
									data-component='skills'
									className='description body-small'
								>
									{skill.description}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

// -------------------------------------------------------------------------------------------

export default Skills;

// -------------------------------------------------------------------------------------------
