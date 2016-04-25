
import React, { Component, PropTypes } from 'react';



class HomePage extends Component {

    render() {
        return (
            <div>
                <h3 style={ { padding: '1em', textAlign: 'center' } }
                    params={ this.props.params }
                    location={ this.props.location }><span params={ this.props.params } location={ this.props.location }>Click on me and start creating a new cool page.</span></h3>
            </div>
            );
    }
}

export default HomePage;

