import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import "./Landing.css";

class LandingPage extends Component {
  render = () => {
    return (
      <div className="text-center">
        <h1>Landing page</h1>
        <Link to={ROUTES.HOME}>Sign In</Link>
      </div>
    );
  };
}

export default LandingPage;
