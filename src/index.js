import React from 'react';
import ReactDOM from 'react-dom';

import './css/onsenui.css';
import './css/onsen-css-components.css';

import ons from 'onsenui';

import {
  Page,
  Tabbar,
  Tab,
  Navigator
} from 'react-onsenui';

import Home from './components/Home';
import Dialogs from './components/Dialogs';
import Forms from './components/Forms';
import Animations from './components/Animations';

var Tabs = React.createClass({
  renderTabs: function() {
    return [
      {
        content: <Home navigator={this.props.navigator} />,
        tab: <Tab label="Home" icon="ion-ios-home-outline" />
      },
      {
        content: <Dialogs navigator={this.props.navigator} />,
        tab: <Tab label="Dialogs" icon="ion-ios-albums-outline" />
      },
      {
        content: <Forms />,
        tab: <Tab label="Forms" icon="ion-edit" />
      },
      {
        content: <Animations navigator={this.props.navigator} />,
        tab: <Tab label="Animations" icon="ion-film-marker" />
      }
    ];
  },

  render: function() {
    return (
      <Page>
        <Tabbar
          renderTabs={this.renderTabs}
        />
      </Page>
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
        initialRoute={{comp: Tabs}}
        renderPage={this.renderPage}
      />
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
