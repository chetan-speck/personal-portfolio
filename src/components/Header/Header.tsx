// -------------------------------------------------------------------------------------------

import './Header.scss';

import { useState } from 'react';

import IconButton from '../common-buttons/IconButton/IconButton';
import NavigationButton from '../common-buttons/NavigationButton/NavigationButton';
import { CloseIcon, MenuIcon } from '../Icons/Icons';

// -------------------------------------------------------------------------------------------

const routes = [
	{ label: 'Introduction', link: '#introduction' },
	{ label: 'Skills', link: '#skills' },
	{ label: 'Experience', link: '#experience' },
	{ label: 'Projects', link: '#projects' },
	{ label: 'Education', link: '#education' },
	{ label: 'Thanks', link: '#thanks' },
	{ label: 'Contact', link: '#contact' },
];

// -------------------------------------------------------------------------------------------

const Header = () => {
	const [navigationScreen, setNavigationScreen] = useState(false);

	const handleNavigationScreenToggle = () => {
		setNavigationScreen((prev) => !prev);
	};

	return (
		<>
			<div
				data-component='header'
				className='container'
			>
				<div
					data-component='header'
					className='frame'
				>
					<div
						data-component='header'
						className='leading'
					>
						<h1
							data-component='header'
							className='headline title-large'
						>
							Portfolio
						</h1>
					</div>
					<div
						data-component='header'
						className='trailing'
					>
						<div
							data-component='header'
							className='navigation-buttons-container'
						>
							{routes.map((button, index) => {
								return (
									<NavigationButton
										key={`navigation-button-${index}`}
										{...button}
									/>
								);
							})}
						</div>
						<div
							data-component='header'
							className='icon-button-container'
						>
							<IconButton
								icon={<MenuIcon />}
								onClick={handleNavigationScreenToggle}
							/>
						</div>
					</div>
				</div>
			</div>
			{navigationScreen && (
				<div
					data-component='header'
					className='navigation-screen'
				>
					<div
						data-component='header'
						className='top'
					>
						<IconButton
							icon={<CloseIcon />}
							onClick={handleNavigationScreenToggle}
						/>
					</div>
					<div
						data-component='header'
						className='bottom'
					>
						{routes.map((button, index) => {
							return (
								<div
									key={`navigation-button-${index}`}
									onClick={handleNavigationScreenToggle}
								>
									<NavigationButton {...button} />
								</div>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

// -------------------------------------------------------------------------------------------

export default Header;

// -------------------------------------------------------------------------------------------
