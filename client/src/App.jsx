import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { useAuth0 } from "@auth0/auth0-react";
import Login from './components/Login';

function App() {

  const {isAuthenticated} = useAuth0();
  return (
    <div data-testid="taskModal" className="App">
      {!isAuthenticated ? <Login  /> : null}
      <Home/>
    </div>
  )
}

export default App;
