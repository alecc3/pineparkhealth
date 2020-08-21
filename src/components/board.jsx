import React, { Component } from 'react';
import Box from './box';
import {Container, Grid, Row, Col} from 'react-bootstrap';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: props.albums,
        };
    }
    
    displayNew = () => (
        this.state.albums.filter(obj => obj.tag == "New").map((t,i) => {
            return <Box type="New" name={t.name} artist={t.artist}/>;
        })
    )

    displayOther = () => (
        this.state.albums.filter(obj => obj.tag != "New").map((t,i) => {
            return <Box type="" name={t.name} artist={t.artist}/>;
        })
    )

    render(){
        return(
            <div class="container">
                <div class="row align-items-start">
                    <div class="col">New
                    {this.displayNew()}
                    </div>
                    <div class="col">Other
                    {this.displayOther()}
                    </div>
                </div>
            </div>
        )
    }
}