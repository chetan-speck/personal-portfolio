// -------------------------------------------------------------------------------------------

import './styles/animation.scss';
import './styles/color.scss';
import './styles/elevation.scss';
import './styles/global.scss';
import './styles/layout.scss';
import './styles/motion.scss';
import './styles/shape.scss';
import './styles/scroll.scss';
import './styles/typography.scss';

import Header from './components/Header/Header';
import Introduction from './screens/Introduction/Introduction';
import Skills from './screens/Skills/Skills';

// -------------------------------------------------------------------------------------------

const App = () => {
	return (
		<>
			<Header />
			<Introduction />
			<Skills />
		</>
	);
};

// -------------------------------------------------------------------------------------------

export default App;

// -------------------------------------------------------------------------------------------
