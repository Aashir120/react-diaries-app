import React from 'react'
import {Link} from 'react-router-dom';
import './style.css';
import logo from '../images/logo.svg';

export const Header=()=> {
    return (
        <div>
            <div className="navbar">
                <ol>
                    <li className="navbar-li">
                        Diary App
                    </li>
                    <li className="login-li">
                        <Link className="login" to="/auth">LogIn</Link>
                    </li>
                </ol>
            </div>
            <div className="content">
                <ol>
                    <li><h1 className="heading">Digitize Your Routine, Thoughts And Memories</h1></li>
                    <li className="img-li"><img width="200px" className="img-logo" height="200px" src={logo} alt="logo" /></li>
                </ol>
            </div>
        </div>
    )
}
