import React from 'react';

import ons from 'onsenui';

import {
  Page,
  Toolbar,
  List,
  ListItem,
  ListHeader
} from 'react-onsenui';

import PullToRefresh from './PullToRefresh';
import InfiniteScroll from './InfiniteScroll';
import SideMenu from './SideMenu';
import FloatingActionButton from './FloatingActionButton';
import SpeedDials from './SpeedDials';

const initialPlatform = ons.platform.isAndroid() ? 'android' : 'ios';

class Home extends React.Component {
  gotoComponent(component) {
    this.props.navigator.pushPage({comp: component});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Home</div>
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
          <a href="https://onsen.io/v2/react.html" target="_blank"><strong>Official site with docs</strong></a>
        </p>

        <List
          renderHeader={() => <ListHeader>Components</ListHeader>}
          dataSource={[{
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
          }]}
          renderRow={(row) =>
            <ListItem tappable onClick={this.gotoComponent.bind(this, row.component)}>
              {row.name}
            </ListItem>
          }
        />
      </Page>
    );
  }
}

module.exports = Home;
