import React from 'react';
import { Link } from 'gatsby';
import { useAuth } from 'react-use-auth'

function Nav() {
  const { isAuthenticated } = useAuth()

  return (

      <div className="App-navigation">
        <nav id="nav1">
          <Link to="/blog" className="App-Link">Blog</Link>
          <div className="App-Link">Video</div>
          <div className="App-Link">Shop</div>
          <div className="App-Link">Interact</div>
          {isAuthenticated() && <div className="App-Link">Protected Stuff</div>}
        </nav>

      </div>

  );
}

export default Nav;
