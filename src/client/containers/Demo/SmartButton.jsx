
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchServerData } from '../../actions/serverActions.js';

class SmartButton extends Component {

    constructor(props, content) {
        super(props, content);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.dispatch(fetchServerData());
    }

    render() {
        const { fetching: { status } } = this.props;
        return (
            <button {...this.props} onClick={this.handleClick}>
                { status === 'loading' ? <span>Loading data...</span> : <span>Fetch server data</span> }
            </button>
            );
    }
}



function mapStateToProps(state) {
    const { application: { serverData: { fetching } } } = state;
    return {
        fetching
    };
}

export default connect(mapStateToProps)(SmartButton);


