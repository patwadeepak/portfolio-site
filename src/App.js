import './App.css';
import {
  WelcomeText,
  FloatingPicture,
  UnderlineDiv,
  BrandGrid,
  ProgressBar,
  Contact,
  IntroText,
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
      <Contact />
    </div>
  );
}

export default App;
