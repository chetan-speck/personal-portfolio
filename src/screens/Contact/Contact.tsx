// -------------------------------------------------------------------------------------------

import './Contact.scss';

import { useState } from 'react';

import github from '../../assets/logos/github.svg';
import gmail from '../../assets/logos/gmail.svg';
import linkedin from '../../assets/logos/linkedin.svg';
import phone from '../../assets/logos/phone.svg';
import IconButton from '../../components/common-buttons/IconButton/IconButton';
import { ContentCopyIcon, DoneIcon } from '../../components/Icons/Icons';
import copyToClipboard from '../../utils/copyToClipboard';

// -------------------------------------------------------------------------------------------

interface SocialLink {
	icon: string;
	title: string;
	href: string;
}

const contacts: SocialLink[] = [
	{
		icon: phone,
		title: 'Phone',
		href: '9172656709',
	},
	{
		icon: gmail,
		title: 'Gmail',
		href: 'chetan.speck@gmail.com',
	},
	{
		icon: github,
		title: 'GitHub',
		href: 'github.com/chetan-speck',
	},
	{
		icon: linkedin,
		title: 'LinkedIn',
		href: 'linkedin.com/in/chetan-thosare-3253142b9',
	},
];

// -------------------------------------------------------------------------------------------

const ContactCard = (props: SocialLink) => {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopyToClipboard = () => {
		copyToClipboard(props.href).then((success) => {
			if (success) {
				setIsCopied(true);

				setTimeout(() => {
					setIsCopied(false);
				}, 2000);
			} else {
				setIsCopied(false);
			}
		});
	};

	return (
		<div
			data-component='contact'
			className='contact'
		>
			<img
				data-component='contact'
				className='icon'
				src={props.icon}
				alt={props.title}
			/>
			<div
				data-component='contact'
				className='contact-title title-large'
			>
				{props.title}
			</div>
			<div
				data-component='contact'
				className='href body-large'
			>
				{props.href}
			</div>
			<div
				data-component='contact'
				className='icon-button-container'
			>
				<IconButton
					icon={isCopied ? <DoneIcon /> : <ContentCopyIcon />}
					onClick={handleCopyToClipboard}
				/>
			</div>
		</div>
	);
};

// -------------------------------------------------------------------------------------------

const Contact = () => {
	return (
		<section
			data-component='contact'
			className='section'
			id='contact'
		>
			<div
				data-component='contact'
				className='container'
			>
				<h2
					data-component='contact'
					className='title display-medium'
				>
					Contact
				</h2>
				<div
					data-component='contact'
					className='sub-title body-large'
				>
					"Contact" refers to the act of communication or interaction
					between individuals or entities, typically through physical
					touch or various forms of communication such as phone calls,
					emails, or messages. &#129321;
				</div>
				<div
					data-component='contact'
					className='contacts-container'
				>
					{contacts.map((contact, index) => {
						return <ContactCard {...contact} />;
					})}
				</div>
			</div>
		</section>
	);
};

// -------------------------------------------------------------------------------------------

export default Contact;

// -------------------------------------------------------------------------------------------
