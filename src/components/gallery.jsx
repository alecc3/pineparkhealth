import React, {useState, Component } from 'react';
import {Form, Modal, Button} from 'react-bootstrap';

function AddModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <button type="button" class="btn btn-info" onClick={handleShow}>Add</button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add to Gallery</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>Album Art URL:</div>
            <Form.Group>
            <Form.Control type="text" placeholder=""/>
            <br />
            </Form.Group>
            <div>Album name:</div>
            <Form.Group>
            <Form.Control type="text" placeholder="" />
            <br />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="button" class="btn btn-dark" onClick={handleClose}>Add</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <div>
                <AddModal/>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                    <img src="https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png" class="img-thumbnail"></img>
                    <div class="centered">folklore</div>
                    </div>
                    <div class="col-sm">
                    <img src="https://upload.wikimedia.org/wikipedia/en/7/71/Future_-_High_Off_Life.png" class="img-thumbnail"/>
                    <div class="centered">High Off Life</div>
                    </div>
                    <div class="col-sm">
                    <img src="https://upload.wikimedia.org/wikipedia/en/2/23/Phoebe_Bridgers_Punisher_%282020%29.png" class="img-thumbnail"/>
                    <div class="centered">Punisher</div>
                    </div>
                    <div class="col-sm">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/A1MwaIeBpwL._SL1500_.jpg" class="img-thumbnail"/>
                    <div class="centered">In Rainbows</div>
                    </div>
                </div>
            </div>
            </div>
        )}
}