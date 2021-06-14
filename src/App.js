
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import { AuthProvider } from "./context/Auth";
import SecureRoute from "./components/SecureRoute";

export default function App() {

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <SecureRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
         
        </div>
      </Router>
    </AuthProvider>
  );

}


