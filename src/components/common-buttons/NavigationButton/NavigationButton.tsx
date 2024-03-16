// -------------------------------------------------------------------------------------------

import './NavigationButton.scss';

// -------------------------------------------------------------------------------------------

interface NavigationButtonProps {
	link: string;
	label: string;
}

// -------------------------------------------------------------------------------------------

const NavigationButton = (props: NavigationButtonProps) => {
	return (
		<a
			href={props.link}
			data-component='navigation-button'
			className='container label-large'
		>
			{props.label}
		</a>
	);
};

// -------------------------------------------------------------------------------------------

export default NavigationButton;

// -------------------------------------------------------------------------------------------
