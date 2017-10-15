import React from 'react';

// import ons from 'onsenui';

import {
    Page,
    List,
    ListHeader,
    ListItem,
    Switch,
    Input,
    Radio,
    Checkbox,
} from 'react-onsenui';

class Forms extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            switchEnabled: true,
            vegetables: [
                'Tomato', 'Cabbage', 'Cucumber'
            ],
            selectedVegetable: 'Cabbage',
            colors: [
                'Red', 'Blue', 'Green', 'Yellow'
            ],
            name: 'Andreas'
        };
    }

    handleSwitchChange(event) {
        this.setState({switchEnabled: event.target.checked});
    }

    setVegetable(vegetable) {
        this.setState({selectedVegetable: vegetable});
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <Page>
                <List
                    dataSource={[
                        <ListItem key={0}>
                            <div className="center">
                                Switch ({this.state.switchEnabled ? 'on' : 'off'})
                            </div>
                            <div className="right">
                                <Switch
                                    checked={this.state.switchEnabled}
                                    onChange={this.handleSwitchChange.bind(this)}
                                />
                            </div>
                        </ListItem>,
                        <ListItem key={1}>
                            <div className="center">
                                Disabled switch
                            </div>
                            <div className="right">
                                <Switch disabled/>
                            </div>
                        </ListItem>
                    ]}
                    renderHeader={() => <ListHeader>Switches</ListHeader>}
                    renderRow={(row) => row}
                />
                <List
                    dataSource={this.state.vegetables}
                    renderHeader={() => <ListHeader>Radio buttons</ListHeader>} renderFooter={() => <ListItem>I love&nbsp;{this.state.selectedVegetable}!</ListItem>}
                    renderRow={(vegetable, index) => {
                        return (
                            <ListItem key={index} tappable>
                                <label className="left">
                                    <Radio
                                        name="vegetable"
                                        onChange={this.setVegetable.bind(this, vegetable)}
                                        checked={this.state.selectedVegetable === vegetable}
                                    />
                                </label>
                                <label htmlFor={'radio' + index} className="center">
                                    {vegetable}
                                </label>
                            </ListItem>
                        );
                    }}
                />

                <List
                    dataSource={this.state.colors}
                    renderHeader={() => <ListHeader>Checkboxes</ListHeader>}
                    renderRow={(color, index) => {
                        return (
                            <ListItem key={index} tappable>
                                <label className="left">
                                    <Checkbox />
                                </label>
                                <label htmlFor={'checkbox' + index} className="center">
                                    {color}
                                </label>
                            </ListItem>
                        );
                    }}
                />

                <List
                    dataSource={[0, 1]}
                    renderHeader={() => <ListHeader>Text input</ListHeader>}
                    renderRow={(_, index) => {
                        if (index === 0) {
                            return (
                                <ListItem key={index}>
                                    <Input value={this.state.name} onChange={this.handleNameChange.bind(this)} placeholder="Name" float/>
                                </ListItem>
                            );
                        } else {
                            return (
                                <ListItem key={index}>
                                    Heldlo&nbsp;{this.state.name}!
                                </ListItem>
                            );
                        }
                    }}
                />
            </Page>
        );
    }
}

export default Forms;
