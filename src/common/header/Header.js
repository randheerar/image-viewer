import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <div className='global-header'>
                <header className='logo-text'>Image Viewer</header>
            </div>
        )
    }
}

export default Header;