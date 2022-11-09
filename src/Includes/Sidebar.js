import React from 'react';
import { bubble as Menu } from 'react-burger-menu'

class Sidebar extends React.Component {

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <div>
        <a className="navbar-brand" href="/"><img src="assets/images/logo.png"/></a>
        <Menu>
            <a className='pull-top' href="/"><img src="assets/images/logo.png"/></a>
            
                <a className="menu-item" href="/">Home</a>
                <a className="menu-item" href="/services">Services</a>
                <a className="menu-item" href="/partners">Partners</a>
                <a className="menu-item" href="/resources">Resources</a>
                <a className="menu-item" href="/careers">Careers</a>
                <a className="menu-item" href="/contact">Contact</a>
        </Menu>
      </div>
    );
  }
}
export default Sidebar