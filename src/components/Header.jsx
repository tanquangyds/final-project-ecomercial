import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import {FirebaseContext} from "../firebase/index"

function Header() {

 


   const {user, firebase} = React.useContext(FirebaseContext)
  return <div className="header">
    <div className="flex">
       <img src="/logo.png" alt="logo" className="logo"/>
       <NavLink to="/" className="header-title">
          Hook news
       </NavLink>
       <NavLink to="/" className="header-link">
          News
       </NavLink>
       <div className="divider">|</div>
       <NavLink to="/top" className="header-link">
          Top
       </NavLink>
       <div className="divider">|</div>
       <NavLink to="/search" className="header-link">
          search
       </NavLink>
       <div className="divider">|</div>
       {user && (
          <>
          <NavLink to="/create" className="header-link">
           submit
         </NavLink>
          </>
       )}
  
       <div className="flex">
       {user ? (
          <>
            <div className="header-name">{user.displayName}</div>
            <div className="divider">|</div>
            <div className="header-button" onClick={()=> firebase.logout()}>
               logout
            </div>
          </>
       ) : (<NavLink to="/login" className="header-link">
          login
       </NavLink>)}
       </div>
    </div>
  </div>;
}

export default withRouter(Header);
