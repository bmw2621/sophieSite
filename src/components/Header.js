import React from 'react';
import { useAuth } from 'react-use-auth'

function Header() {

  const { isAuthenticated, login, logout, user } = useAuth()
  let loginData
  console.log(user)

  if(isAuthenticated()){
    loginData = <><img alt="User Avatar" src={user.picture} style={{"width":"30px","border-radius":"30px"}} /><span style={{"margin-right":"20px", "margin-left":"20px"}}>Welcome {user.given_name}</span><button className="logButton" onClick={ () => logout() }>Logout</button></>
  } else {
    loginData = <button className="logButton" onClick={ () => login() }>Login</button>
  }

  return (

      <header className="App-header">
        <div id="login">
          {loginData}
        </div>
        <div id="hero-text">
        <i id="nav-bars" class="fas fa-bars"></i>
          <div id="hero-title">
            <span className="slightlyBigger">S</span>ophie <span className="slightlyBigger">W</span>inchester
          </div>
          <div id="hero-subtitle">Witty Slugline</div>
        </div>

      </header>

  );
}

export default Header;
