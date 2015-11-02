
import React, { Component, PropTypes } from 'react';
import image from '../../assets/images/title-background.png';

class LandingImage extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        return (
            <img {...this.props} src={image}>
            </img>
        );
    }
}


export default LandingImage;