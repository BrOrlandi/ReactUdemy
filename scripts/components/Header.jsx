import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-default header">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        IMGUR Browser
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="">Topic #1</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};
