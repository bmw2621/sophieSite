import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useAuth } from 'react-use-auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

  const [folded, setFolded] = useState(true);
  const [contentFolded, setContentFolded] = useState(true)
  const { isAuthenticated, login, logout, user } = useAuth()
  const access = require("../Access/access.json")

  // Create User Image on Navbar for mobile view and create toggle function for mobile view menu folding
  let loginData

  if(isAuthenticated()){
    loginData = <><img alt="User Avatar" src={user.picture} style={{"width":"50px","borderRadius":"50px"}} /><span style={{"fontWeight":"100"}}>Welcome {user.given_name}</span><button className="logButton" style={{}} onClick={ () => logout() }>Logout</button></>
  } else {
    loginData = <button className="logButton" style={{"border": "0", "background":"none", "color": "var(--greenish)", "fontSize": "1em", "fontFamily": "'Roboto', sans-serif", "fontWeight": "bold"}} onClick={ () => login() }>Login</button>
  }

  const toggleFold = () => {
    if (!folded){
      Array.from(document.getElementsByClassName("App-Link")).forEach(el => el.style.display="none")
    } else {
      Array.from(document.getElementsByClassName("App-Link")).forEach(el => el.style.display="flex")
    }

    folded ? setFolded(false) : setFolded(true)
  }

  const toggleContentFold = () => {
    if (!contentFolded){
      Array.from(document.getElementsByClassName("Hidden-Link")).forEach(el => el.style.display="none")
    } else {
      Array.from(document.getElementsByClassName("Hidden-Link")).forEach(el => el.style.display="flex")
    }

    contentFolded ? setContentFolded(false) : setContentFolded(true)
  }

  // Get Content Areas, Reference if User has authorization to access content, and produce link if authorized
  const contentAreas = require("../Access/contentAreas.json")
  let userContent = []

  contentAreas.forEach(area => {
    if(Object.keys(access).includes(user.email) && access[user.email].includes(area.accessName)){
      userContent.push(
        <Link to={`/${area.slug}`} className="App-Link Hidden-Link"  key={area.accessName} style={{"display":"none"}}>{area.linkText}</Link>
      )
    }
  })

  if (userContent.length < 1) userContent.push(<div className="App-Link Hidden-Link">No Subscribed Content</div>) 

  return (

      <div className="App-navigation" id="App-navigation">
        <nav id="nav1">
          <div id="hamburger" onClick={toggleFold}><FontAwesomeIcon icon={faBars} /></div>
          <div className="App-Link login1">{loginData}</div>
          <Link to="/blog" className="App-Link">Blog</Link>
          <Link to="/video" className="App-Link">Video</Link>
          <a href="http://sophiewinchester.arbonne.com" className="App-Link">Shop</a>
          <Link to="/interact" className="App-Link">Interact</Link>
          {isAuthenticated() && <a href="https://form.jotform.com/201335579575160" className="App-Link">Class Waiver</a>}
          {isAuthenticated() && <div className="Protected-Links"><div className="App-Link" id="myContentDropdown" onClick={toggleContentFold} style={{"fontWeight":"bold", "fontStyle":"normal","justifyContent":"space-between"}}><FontAwesomeIcon style={{"margin":"0px 20px"}} icon={faChevronDown} />My Content<FontAwesomeIcon style={{"margin":"0px 20px"}} icon={faChevronDown} /></div>{userContent}</div>}
          
        </nav>

      </div>

  );
}

export default Nav;
