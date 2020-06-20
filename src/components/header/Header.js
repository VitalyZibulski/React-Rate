import React from 'react';
import './header.scss';
import {NavBar} from "../navbar/Navbar";

export const Header = () => {
  return (
    <div className='header'>
      <div className='headerWrap'>
        <div className="logo">
          <a href="/">
            <h2>React Rate</h2>
          </a>
        </div>

        <NavBar />

        <div className="person">
          <i className="fa fa-user" aria-hidden="true"/></div>
      </div>
      <hr/>
    </div>
  )
}