import React from 'react';
import { useAuth } from 'react-use-auth'
import { Link } from 'gatsby';

function Header() {

  const { isAuthenticated, login, logout, user } = useAuth()
  let loginData

  if(isAuthenticated()){
    loginData = <><img alt="User Avatar" src={user.picture} style={{"width":"30px","borderRadius":"30px"}} /><span style={{"marginRight":"20px", "marginLeft":"20px"}}>Welcome {user.given_name}</span><button className="logButton" onClick={ () => logout() }>Logout</button></>
  } else {
    loginData = <button className="logButton" onClick={ () => login() }>Login</button>
  }

  return (

      <header className="App-header">
        <div id="login">
          {loginData}
        </div>
        <div id="hero-text">
          <div id="hero-title">
            <Link to="/" className="homeLink"><span className="slightlyBigger">S</span>ophie <span className="slightlyBigger">W</span>inchester</Link>
          </div>
          <div id="hero-subtitle">Witty Slugline</div>
        </div>

      </header>

  );
}

export default Header;
