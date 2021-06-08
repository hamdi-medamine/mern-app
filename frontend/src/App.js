import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/NavBar'
import UsersList from './Components/UsersList'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UsersList/>
    </div>
  );
}

export default App;
