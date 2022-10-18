import React from 'react';

const Header = () => {
    return (
  <nav>
    <div className="nav-wrapper teal lighten-2">
      <a href="!#" className="brand-logo">React Movie Database</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://github.com/mmoresun/movies">Source code on GitHub</a></li>        
      </ul>
    </div>
  </nav>
    );
}

export default Header;
