import React from 'react';
import { Link } from 'gatsby';
import { useAuth } from 'react-use-auth'

function Nav() {
  const { isAuthenticated } = useAuth()

  return (

      <div className="App-navigation">
        <nav id="nav1">
          <Link to="/blog" className="App-Link">Blog</Link>
          <Link to="/video" className="App-Link">Video</Link>
          <a href="http://sophiewinchester.arbonne.com" className="App-Link">Shop</a>
          <Link to="/interact" className="App-Link">Interact</Link>
          {isAuthenticated() && <div className="App-Link">Protected Stuff</div>}
        </nav>

      </div>

  );
}

export default Nav;
