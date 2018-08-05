import "@/script";
import "./style.scss";

import React, {Component} from 'react';
import {Button, Header, Menu, Modal,Loader} from 'semantic-ui-react'

export default class SystemConfig extends Component {





    constructor(props) {
        super(props);

        this.state = {activeItem: 'buy'};
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    handleItemClick(e,{m_key}){
        console.log(m_key)
        this.setState({ activeItem: m_key });
    }

    render() {
        const { activeItem } = this.state

        return (<div>
             <Modal dimmer={'blurring'}  trigger={<Button secondary fluid>Show Modal</Button>}>
                     <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content image>
                        {/*<Image wrapped size='medium' src='/images/avatar/large/rachel.png'/>*/}
                        <Modal.Description>
                            <Header>Default Profile Image</Header>
                            <p>We've found the following gravatar image associated with your e-mail address.</p>
                            <p>Is it okay to use this photo?</p>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                <div style={{height:300,backgroundColor:"#00ccaa"}}>
                    <Loader active>Loading</Loader>
                </div>
                <Menu className={"menu-nav"} fluid widths={3}>
                    <Menu.Item icon={'tasks'} m_key='buy' active={activeItem === 'buy'} onClick={this.handleItemClick} />
                    <Menu.Item icon={'calendar alternate outline'} m_key='sell' active={activeItem === 'sell'} onClick={this.handleItemClick} />
                    <Menu.Item icon={'user'} m_key='rent' active={activeItem === 'rent'} onClick={this.handleItemClick} />
                </Menu>

            </div>


        );
    }
}
