import React from 'react';

import {Navigator} from 'react-onsenui';

import Layout from './Layout';

class App extends React.Component {
    renderPage(route, navigator) {
        route.props = route.props || {};
        route.props.navigator = navigator;
        return React.createElement(route.comp, route.props);
    }

    render() {
        return (
            <Navigator
                initialRoute={{comp: Layout}}
                renderPage={this.renderPage}
            />
        );
    }
}

export default App;
