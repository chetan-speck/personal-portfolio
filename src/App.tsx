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

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contact from './screens/Contact/Contact';
import Education from './screens/Education/Education';
import Experience from './screens/Experience/Experience';
import Introduction from './screens/Introduction/Introduction';
import Projects from './screens/Projects/Projects';
import Skills from './screens/Skills/Skills';
import Thanks from './screens/Thanks/Thanks';

// -------------------------------------------------------------------------------------------

const App = () => {
	return (
		<>
			<Header />
			<Introduction />
			<Skills />
			<Experience />
			<Projects />
			<Education />
			<Thanks />
			<Contact />
			<Footer />
		</>
	);
};

// -------------------------------------------------------------------------------------------

export default App;

// -------------------------------------------------------------------------------------------
