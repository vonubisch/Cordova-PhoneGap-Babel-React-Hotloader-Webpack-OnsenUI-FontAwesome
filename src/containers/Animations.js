import React from 'react';
import PropTypes from 'prop-types';

import MyPage from './MyPage';

import {Page, Toolbar, List, ListItem, ListHeader} from 'react-onsenui';

const capitalize = (str) => str.replace(/^[a-z]/, (c) => c.toUpperCase());

class Animations extends React.Component {
    pushPage(transition) {
        const nav = this.props.navigator;

        nav.pushPage({
            comp: MyPage,
            props: {
                popPage: () => nav.popPage({
                    animation: transition,
                    animationOptions: {
                        duration: 0.8
                    }
                })
            }
        }, {
            animation: transition,
            animationOptions: {
                duration: 0.8
            }
        });
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className="center">Animations</div>
            </Toolbar>
        );
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <List
                    renderHeader={() => <ListHeader>Transitions</ListHeader>}
                    dataSource={['none', 'fade', 'slide', 'lift']}
                    renderRow={(row) => (
                        <ListItem tappable onClick={this.pushPage.bind(this, row)}>
                            {capitalize(row)}
                        </ListItem>
                    )}
                />
            </Page>
        );
    }
}

Animations.propTypes = {
    navigator: PropTypes.object,
};

export default Animations;
