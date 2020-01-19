import React, { Component } from 'react';

import './style.scss';

export default class Header extends Component {
  render() {
    return (

    <div className='header'>
        <div className="hw-logo">
            <a href="/">
            Do Quang Huy
            </a>
        </div>
        <div className="hw-text-center">
            <a className="active" href="/">Discover</a>
            <a href="/">Jobs</a>
        </div>
        <div className="hw-social">
            <div className="hws-text">
            Contact me >
            </div>
            <div className="hws-icon hws-facebook">
            <a href="https://facebook.com" target="_blank">
                <img src="../../images/facebook_circle.svg" alt=""/>
            </a>
            </div>
            <div className="hws-icon hws-google">
            <a href="mailto:huydo0410@gmail.com">
                <img src='../../images/google.svg'></img>
            </a>
            </div>
        </div>
    </div>
    )
  }
};