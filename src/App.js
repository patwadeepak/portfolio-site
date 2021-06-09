import './App.css';
import {
  WelcomeText,
  FloatingPicture,
  UnderlineDiv,
  BrandGrid,
  ProgressBar,
  Contact,
  IntroText,
  AnimatedCube,
} from './components/Components';

function App() {
  return (
    <div className='App'>
      <ProgressBar />

      <UnderlineDiv text='Deepak Patwa' />

      <WelcomeText />

      <FloatingPicture src='../static/img/mypic.jpg' />

      <IntroText />

      <BrandGrid />

      <AnimatedCube />

      <Contact />
    </div>
  );
}

export default App;
