import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useAuth } from 'react-use-auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

  const [folded, setFolded] = useState(true);

  const toggleFold = () => {
    if (!folded){
      Array.from(document.getElementsByClassName("App-Link")).forEach(el => el.style.display="none")
    } else {
      Array.from(document.getElementsByClassName("App-Link")).forEach(el => el.style.display="flex")
    }

    folded ? setFolded(false) : setFolded(true)
  }

  const { isAuthenticated, login, logout, user } = useAuth()

  let loginData

  if(isAuthenticated()){
    loginData = <><img alt="User Avatar" src={user.picture} style={{"width":"50px","borderRadius":"50px"}} /><span style={{"fontWeight":"100"}}>Welcome {user.given_name}</span><button className="logButton" style={{}} onClick={ () => logout() }>Logout</button></>
  } else {
    loginData = <button className="logButton" style={{"border": "0", "background":"none", "color": "var(--greenish)", "fontSize": "1em", "fontFamily": "'Roboto', sans-serif", "fontWeight": "bold"}} onClick={ () => login() }>Login</button>
  }

  return (

      <div className="App-navigation">
        <nav id="nav1">
          <div id="hamburger" onClick={toggleFold}><FontAwesomeIcon icon={faBars} /></div>
          <div className="App-Link login1">{loginData}</div>
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
