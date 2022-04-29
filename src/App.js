import './App.css';
import Content from './layout/Content';
import MobileNav from './layout/MobileNav';
import NavBar from './layout/NavBar';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar className='display-desktop' />
        <MobileNav />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
}

export default App;
