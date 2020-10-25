import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <div className={classes.wrapp}>
            <img alt="logo"src="https://www.pinclipart.com/picdir/big/15-152737_global-vector-vector-world-logo-png-clipart.png" />
            <h2>The Wolrd</h2>
        </div>
    </header>
}

export default Header;