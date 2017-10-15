import React from 'react';
import PropTypes from 'prop-types';

import {Tabbar, Tab} from 'react-onsenui';

import Home from './containers/Home';
import Dialogs from './containers/Dialogs';
import Forms from './containers/Forms';
import Animations from './containers/Animations';
import SideMenu from './containers/SideMenu';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.renderTabs = this.renderTabs.bind(this);
    }
    renderTabs() {
        return [
            {
                key: 0,
                content: <SideMenu navigator={this.props.navigator}/>,
                tab: <Tab label="SideMenu" icon="fa-bars"/>
            }, {
                key: 1,
                content: <Home navigator={this.props.navigator}/>,
                tab: <Tab label="Home" icon="fa-home"/>
            }, {
                key: 2,
                content: <Dialogs navigator={this.props.navigator}/>,
                tab: <Tab label="Dialogs" icon="fa-warning"/>
            }, {
                key: 3,
                content: <Forms />,
                tab: <Tab label="Forms" icon="fa-comment"/>
            }, {
                key: 4,
                content: <Animations navigator={this.props.navigator}/>,
                tab: <Tab label="Animations" icon="fa-spinner"/>
            }
        ];
    }

    render() {
        if (!this.props.navigator) {
            return;
        }
        return (
            <Tabbar renderTabs={this.renderTabs}/>
        );
    }
}

Layout.propTypes = {
    navigator: PropTypes.object,
};

export default Layout;
