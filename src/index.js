import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import 'font-awesome-webpack';

import React from 'react';
import ReactDOM from 'react-dom';

// import ons from 'onsenui';

import {Tabbar, Tab, Navigator} from 'react-onsenui';

import Home from './containers/Home';
import Dialogs from './containers/Dialogs';
import Forms from './containers/Forms';
import Animations from './containers/Animations';
import SideMenu from './containers/SideMenu';

class Layout extends React.Component {
    renderTabs() {
        return [
            {
                content: <SideMenu navigator={this.props.navigator}/>,
                tab: <Tab label="SideMenu" icon="fa-bars"/>
            }, {
                content: <Home navigator={this.props.navigator}/>,
                tab: <Tab label="Home" icon="fa-home"/>
            }, {
                content: <Dialogs navigator={this.props.navigator}/>,
                tab: <Tab label="Dialogs" icon="fa-warning"/>
            }, {
                content: <Forms />,
                tab: <Tab label="Forms" icon="fa-comment"/>
            }, {
                content: <Animations navigator={this.props.navigator}/>,
                tab: <Tab label="Animations" icon="fa-spinner"/>
            }
        ];
    }

    render() {
        return (
            <Tabbar renderTabs={this.renderTabs}/>
        );
    }
}

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

ReactDOM.render(<App />, document.getElementById('app'));
