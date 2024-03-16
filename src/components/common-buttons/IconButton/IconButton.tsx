// -------------------------------------------------------------------------------------------

import './IconButton.scss';

// -------------------------------------------------------------------------------------------

interface IconButtonProps {
	icon: JSX.Element;
	onClick?: () => void;
}

// -------------------------------------------------------------------------------------------

const IconButton = (props: IconButtonProps) => {
	return (
		<button
			data-component='icon-button'
			className='container'
			onClick={props.onClick}
		>
			{props.icon}
		</button>
	);
};

export default IconButton;

// -------------------------------------------------------------------------------------------
