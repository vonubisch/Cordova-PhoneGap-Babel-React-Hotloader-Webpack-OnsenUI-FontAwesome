import React from 'react';
import PropTypes from 'prop-types';

import {
    Page,
    Splitter,
    SplitterSide,
    SplitterContent,
    Toolbar,
    ToolbarButton,
    Icon,
    List,
    ListItem,
    ListHeader,
    Tab,
    Tabbar
} from 'react-onsenui';

import Home from './containers/Home';
import Dialogs from './containers/Dialogs';
import Forms from './containers/Forms';
import Animations from './containers/Animations';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.renderTabs = this.renderTabs.bind(this);
    }

    hide() {
        this.setState({isOpen: false});
    }

    show() {
        this.setState({isOpen: true});
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className="left">
                    <ToolbarButton onClick={this.show.bind(this)}>
                        <Icon icon="fa-bars"/>
                    </ToolbarButton>
                </div>
                <div className="center">
                    <img src="svg/logo.svg" style={{maxHeight: 20, color: 'white', marginRight: 20}}/>
                    My App
                </div>
                <div className="right">
                    <ToolbarButton onClick={this.show.bind(this)}>
                        <Icon icon="fa-cog"/>
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    }

    renderTabs() {
        return [
            {
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
        return (
            <Page>
                <Splitter>
                    <SplitterSide
                        side="left"
                        isOpen={this.state.isOpen}
                        onClose={this.hide.bind(this)}
                        onOpen={this.show.bind(this)}
                        collapse={true}
                        width={240}
                        swipeable={true}
                    >
                        <Page>
                            <List
                                dataSource={[1, 2, 3, 4]}
                                renderHeader={() => <ListHeader>Menu</ListHeader>}
                                renderRow={(i) => <ListItem key={i} modifier="longdivider" tappable>{"Menu item " + i}</ListItem>}
                            />
                        </Page>
                    </SplitterSide>
                    <SplitterContent>
                        <Page renderToolbar={this.renderToolbar.bind(this)}>
                            <Tabbar
                                swipeable
                                position="top"
                                renderTabs={this.renderTabs}
                            />
                        </Page>
                    </SplitterContent>
                </Splitter>
            </Page>
        );
    }
}

Layout.propTypes = {
    navigator: PropTypes.object,
};

export default Layout;
