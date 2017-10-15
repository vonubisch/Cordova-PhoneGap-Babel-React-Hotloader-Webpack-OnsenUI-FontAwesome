import React from 'react';
import PropTypes from 'prop-types';

// import ons from 'onsenui';

import {Page, Toolbar, List, ListItem, ListHeader} from 'react-onsenui';

import PullToRefresh from '../components/PullToRefresh';
import InfiniteScroll from '../components/InfiniteScroll';
import SideMenu from '../containers/SideMenu';
import FloatingActionButton from '../components/FloatingActionButton';
import SpeedDials from '../components/SpeedDials';
//
// const initialPlatform = ons.platform.isAndroid()
//     ? 'android'
//     : 'ios';

class Home extends React.Component {
    
    gotoComponent(component) {
        this.props.navigator.pushPage({comp: component});
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className="center">Home</div>
            </Toolbar>
        );
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <p style={{padding: '0 15px'}}>
                    This is a kitchen sink example that shows off the React extension for Onsen UI.
                </p>
                <p style={{padding: '0 15px'}}>
                    <a href="https://onsen.io/v2/react.html" target="_blank" rel="noopener noreferrer">
                        <strong>Official site with docs</strong>
                    </a>
                </p>
                <List
                    renderHeader={() => <ListHeader>Components</ListHeader>}
                    dataSource={[
                        {
                            name: 'Pull to refresh',
                            component: PullToRefresh
                        }, {
                            name: 'Infinite scroll',
                            component: InfiniteScroll
                        }, {
                            name: 'Side menu',
                            component: SideMenu
                        }, {
                            name: 'Floating action button',
                            component: FloatingActionButton
                        }, {
                            name: 'Speed dials',
                            component: SpeedDials
                        }
                    ]}
                    renderRow={(row, i) => (
                        <ListItem
                            key={i}
                            tappable
                            onClick={this.gotoComponent.bind(this, row.component)}
                        >
                            {row.name}
                        </ListItem>
                    )}
                />
            </Page>
        );
    }
}

Home.propTypes = {
    navigator: PropTypes.object,
};

export default Home;
