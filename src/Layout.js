import React from 'react';
import PropTypes from 'prop-types';

import {Tabbar, Tab, Toolbar} from 'react-onsenui';

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

    renderToolbar() {
        return (
            <Toolbar>
                <div className="center">Forms</div>
            </Toolbar>
        );
    }

    renderTabs() {
        return [
            {
                content: <SideMenu key={0} navigator={this.props.navigator}/>,
                tab: <Tab key={0} label="SideMenu" icon="fa-bars" />
            }, {
                content: <Home key={1} navigator={this.props.navigator}/>,
                tab: <Tab key={1} label="Home" icon="fa-home"/>
            }, {
                content: <Dialogs key={2} navigator={this.props.navigator}/>,
                tab: <Tab key={2} label="Dialogs" icon="fa-warning"/>
            }, {
                content: <Forms key={3} />,
                tab: <Tab key={3} label="Forms" icon="fa-comment"/>
            }, {
                content: <Animations key={4} navigator={this.props.navigator}/>,
                tab: <Tab key={4} label="Animations" icon="fa-spinner"/>
            }
        ];
    }

    render() {
        if (!this.props.navigator) {
            return;
        }
        return (
            <Tabbar
                swipeable
                renderTabs={this.renderTabs}
            />
        );
    }
}

Layout.propTypes = {
    navigator: PropTypes.object,
};

export default Layout;
