import React from 'react';
import {Button, Dialog, Intent} from '@blueprintjs/core';

import './Navbar.css';

export default class DialogExample extends React.Component {
    state = { isOpen: false };

    render() {
        return (
            <div>
                <Button onClick={this.toggleDialog} text="Show dialog" />
                <Dialog
                    iconName="inbox"
                    isOpen={this.state.isOpen}
                    onClose={this.toggleDialog}
                    title="Modify Expense"

                >
                    <div className="pt-dialog-body dialog">
                        {this.props.children}
                    <div className="pt-dialog-footer">
                        <div className="pt-dialog-footer-actions">
                            <Button text="Secondary" />
                            <Button
                                intent={Intent.PRIMARY}
                                onClick={this.toggleDialog}
                                text="Primary"
                            />
                          </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }

    toggleDialog = () => this.setState({ isOpen: !this.state.isOpen });
}
