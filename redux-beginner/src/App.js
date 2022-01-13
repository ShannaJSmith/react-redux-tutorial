import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColour from './components/ChangeColour';

const App = () => {
  return (
    <div className="App">
    <Profile />
    <Login />
    <ChangeColour />
    </div>
  );
}

export default App;
