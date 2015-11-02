
import React, { Component, PropTypes } from 'react';

import '../assets/css/font-awesome.css';
import '../assets/css/app.css';

import LandingImage from '../components/Demo/LandingImage.jsx';
import SmartButton from '../containers/Demo/SmartButton.jsx';
import SmartPanel from '../containers/Demo/SmartPanel.jsx';


class HomePage extends Component {

    render() {
        return (
            <div>
                <h3 style={ {    padding: '1em',    textAlign: 'center'} } params={ this.props.params }><span params={ this.props.params }>Click on the button below to fetch data from the server, if you see an Error, please check if you have started local server from the root folder of current project: node ./server.js</span></h3>
                <div style={ {    width: '90%',    margin: '0 5% 0 5%'} } params={ this.props.params }>
                    <div style={ {    width: '100%'} } params={ this.props.params }>
                        <SmartPanel style={ {    textAlign: 'center'} } params={ this.props.params }></SmartPanel>
                        <div style={ {    display: 'table',    width: '100%'} } params={ this.props.params }>
                            <div style={ {    display: 'table-row'} } params={ this.props.params }>
                                <div style={ {    display: 'table-cell',    textAlign: 'center'} } params={ this.props.params }>
                                    <SmartButton style={ {    height: '2em'} } params={ this.props.params }></SmartButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LandingImage style={ {    width: '100%'} } params={ this.props.params }></LandingImage>
                </div>
            </div>
            );
    }
}

export default HomePage;

