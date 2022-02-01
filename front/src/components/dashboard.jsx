import React, { Component } from "react";
import { Navigate, Routes, Route, Link } from "react-router-dom";
import "../styles/Dashboard.css";
import Master from "./Master";
import Pos from "./Pos";
import IndexDashboard from "./IndexDashboard";
import NotFound from "./404";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Navigate to="/login" />;
    }
    const { match } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.path}`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`${match.path}/master`}>Master</Link>
          </li>
          <li>
            <Link to={`${match.path}/pos`}>Pos</Link>
          </li>
          <li className="push-right">
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
          </li>
        </ul>
        <main role="main">
          <div className="main">
            <Routes>
              <Route path={`${match.path}/master`}>
                <Master />
              </Route>
              <Route path={`${match.path}/pos`}>
                <Pos />
              </Route>
              <Route exact path={`${match.path}`}>
                <IndexDashboard />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Routes>
          </div>
        </main>
      </div>
    );
  }
}
 
export default (Dashboard);