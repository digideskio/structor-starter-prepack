require('../../src/client/assets/css/font-awesome.css');
require('../../src/client/assets/css/app.css');
module.exports = {
    ReactRouter: {
        Link: require('react-router').Link,
        IndexLink: require('react-router').IndexLink
    },
    Demo: {
        LandingImage: require('../../src/client/components/Demo/LandingImage.jsx'),
        SmartButton: require('../../src/client/containers/Demo/SmartButton.jsx'),
        SmartPanel: require('../../src/client/containers/Demo/SmartPanel.jsx')
    }
};