import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Draggable from 'react-draggable';

export default class Box extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeDrags: 0,
            deltaPosition: {
            x: 0, y: 0
            },
            type: props.type,
            name: props.name,
            artist: props.artist,
        };
    }

    handleDrag = (e, ui) => {
        const { x, y } = this.state.deltaPosition;
        this.setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
    };

    handleStop = (e, ui) => {
        const { x, y } = this.state.deltaPosition;
        if (this.state.type == "New"){
            if (x > 150){
                // change tag
                console.log("Changed");
                this.setState({
                    deltaPosition: {x:0,y:0},
                    type: "",
                })
            }
        }
        else{
            if (x < -150){
                // change tag
                console.log("Changed");
                this.setState({
                    deltaPosition: {x:0,y:0},
                    type: "New",
                })
            }
        }
    }

    render(){
        const {deltaPosition} = this.state;
        return(
            <div>
                <Draggable onDrag={this.handleDrag} onStop={ () => this.handleStop()}>
                    <div className="drag-box">
                    <div class="newFont">{this.state.type}</div>
                    <div>{this.state.name}</div>
                    <div>{this.state.artist}</div>
                    
                    </div>
                </Draggable>
            </div>
        )
    }

}