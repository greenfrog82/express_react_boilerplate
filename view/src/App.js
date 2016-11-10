import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
    render() {
        return (
                <div>
                    <ul>
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="articles">Articles</Link></li>
                    </ul>
                    {this.props.children}
                </div>
        );
    }
}
