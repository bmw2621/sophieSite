import React from 'react';
import { useAuth } from 'react-use-auth'

function Nav() {
  const { isAuthenticated } = useAuth()

  return (

      <div className="App-navigation">
        <nav id="nav1">
          <div className="App-Link">Blog</div>
          <div className="App-Link">Video</div>
          <div className="App-Link">Shop</div>
          <div className="App-Link">Interact</div>
          {isAuthenticated() && <div className="App-Link">Protected Stuff</div>}
        </nav>

      </div>

  );
}

export default Nav;
