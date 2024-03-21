// -------------------------------------------------------------------------------------------

import './Footer.scss';

import { useState } from 'react';

// -------------------------------------------------------------------------------------------

const jokes = [
	'Why do programmers prefer dark mode? Because light attracts bugs.',
	"Why don't programmers like nature? It has too many bugs.",
	"Why was the JavaScript developer sad? Because he didn't know how to 'null'.",
	'Why did the developer go broke? Because he used up all his cache.',
	'Why did the developer go to therapy? He had too many unsolved issues.',
	"Why did the programmer quit his job? He didn't get arrays.",
	'Why did the developer go broke? He spent all his cache on cookies.',
	'Why did the developer go broke? Because he used up all his gigs.',
	'Why did the JavaScript developer go broke? He spent all his cache on promises.',
	'Why did the JavaScript developer go broke? He lost all his prototypes.',
	'Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.',
	"Why do Java developers wear glasses? Because they can't C#.",
	'Why do programmers hate nature? It has too many bugs.',
	'Why do programmers prefer dark mode? Light attracts bugs.',
	"Why don't programmers like nature? It has too many bugs.",
	"Why did the programmer get stuck in the shower? Because the instructions said 'lather, rinse, repeat'.",
	'Why do programmers hate nature? It has too many bugs.',
	"Why don't programmers like nature? It has too many bugs.",
	"Why was the JavaScript developer sad? Because he didn't know how to 'null'.",
	'Why did the developer go broke? Because he used up all his cache.',
	"Why did the programmer go broke? He didn't get arrays.",
	'Why did the developer go broke? He spent all his cache on cookies.',
	'Why did the developer go broke? Because he used up all his gigs.',
	'Why did the JavaScript developer go broke? He spent all his cache on promises.',
	'Why did the JavaScript developer go broke? He lost all his prototypes.',
	'Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.',
	"Why do Java developers wear glasses? Because they can't C#.",
	'Why do programmers hate nature? It has too many bugs.',
	'Why do programmers prefer dark mode? Light attracts bugs.',
	"Why don't programmers like nature? It has too many bugs.",
	"Why did the programmer get stuck in the shower? Because the instructions said 'lather, rinse, repeat'.",
	"Why don't programmers like nature? It has too many bugs.",
	"Why did the programmer get stuck in the shower? Because the instructions said 'lather, rinse, repeat'.",
	'Why do programmers prefer dark mode? Light attracts bugs.',
	"Why don't programmers like nature? It has too many bugs.",
	"Why did the JavaScript developer sad? Because he didn't know how to 'null'.",
	'Why did the developer go broke? Because he used up all his cache.',
	"Why did the programmer go broke? He didn't get arrays.",
	'Why did the developer go broke? He spent all his cache on cookies.',
	'Why did the developer go broke? Because he used up all his gigs.',
	'Why did the JavaScript developer go broke? He spent all his cache on promises.',
	'Why did the JavaScript developer go broke? He lost all his prototypes.',
	'Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.',
	"Why do Java developers wear glasses? Because they can't C#.",
	'Why do programmers hate nature? It has too many bugs.',
	'Why do programmers prefer dark mode? Light attracts bugs.',
	"Why don't programmers like nature? It has too many bugs.",
	"Why did the programmer get stuck in the shower? Because the instructions said 'lather, rinse, repeat'.",
];

// -------------------------------------------------------------------------------------------

const Footer = () => {
	const [joke, _setJoke] = useState((): string => {
		const randomIndex = Math.floor(Math.random() * jokes.length);
		return jokes[randomIndex];
	});

	return (
		<>
			<div
				data-component='footer'
				className='container'
			>
				<div
					data-component='footer'
					className='frame'
				>
					<div
						data-component='footer'
						className='joke body-small'
					>
						{joke} &#128514;
					</div>
					<div
						data-component='footer'
						className='developer body-small'
					>
						Design & developed by Chetan Thosare
					</div>
				</div>
			</div>
		</>
	);
};

// -------------------------------------------------------------------------------------------

export default Footer;

// -------------------------------------------------------------------------------------------
