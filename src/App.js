// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RoomDesigns from './pages/RoomDesigns';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';




function App() {
  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/rooms/' component={RoomDesigns} />
    <Route exact path='/rooms/:slug' component={SingleRoom} />
    <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
