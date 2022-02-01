import Signin from './Signin';
import '../styles/styles.css';
import Login from './Login';
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login">
          <Login />
          <Signin />
        </Route>
        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
        <Route exact path="/">
          <Navigate exact from="/" to="dashboard" />
        </Route>
        <Route path="*">
          <Navigate from="/" to="dashboard" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
