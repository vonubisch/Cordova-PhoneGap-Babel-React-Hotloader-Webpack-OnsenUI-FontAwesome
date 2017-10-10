import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import 'font-awesome-webpack';

import React from 'react';
import ReactDOM from 'react-dom';

import ons from 'onsenui';

import {Page, Tabbar, Tab, Navigator} from 'react-onsenui';

import Home from './containers/Home';
import Dialogs from './containers/Dialogs';
import Forms from './containers/Forms';
import Animations from './containers/Animations';
import SideMenu from './containers/SideMenu';

var Layout = React.createClass({
    renderTabs: function() {
        return [
            {
                content: <SideMenu navigator={this.props.navigator}/>,
                tab: <Tab label="SideMenu" icon="fa-building"/>
            }, {
                content: <Home navigator={this.props.navigator}/>,
                tab: <Tab label="Home" icon="fa-building"/>
            }, {
                content: <Dialogs navigator={this.props.navigator}/>,
                tab: <Tab label="Dialogs" icon="fa-globe"/>
            }, {
                content: <Forms />,
                tab: <Tab label="Forms" icon="fa-comment"/>
            }, {
                content: <Animations navigator={this.props.navigator}/>,
                tab: <Tab label="Animations" icon="fa-user"/>
            }
        ];
    },

    render: function() {
        return (
            <Tabbar renderTabs={this.renderTabs}/>
        );
    }
});

var App = React.createClass({
    renderPage: function(route, navigator) {
        route.props = route.props || {};
        route.props.navigator = navigator;

        return React.createElement(route.comp, route.props);
    },

    render: function() {
        return (
            <Navigator
                initialRoute={{comp: Layout}}
                renderPage={this.renderPage}
            />
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
