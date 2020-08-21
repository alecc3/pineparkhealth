import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

const Item = props => (
    <tr>
        <td>{props.index}</td>
        <td>"{props.name}"</td>
        <td>{props.artist}</td>
        <td>{props.tag}</td>
    </tr>
)

const EditItem = props => (
    <tr>
        <td>{props.index}</td>
        <td>
            <div class="form-group mx-sm-3 mb-2">
                <input type="email" class="form-control" placeholder={props.name}></input>
            </div>
        </td>
        <td>
            <div class="form-group">
                <input type="email" class="form-control" id="exampleInputPassword1" placeholder={props.artist}></input>
            </div>
        </td>
        <td>
            <div class="form-group">
                <input type="email" class="form-control" id="exampleInputPassword1" placeholder={props.tag}></input>
            </div>
        </td>
    </tr>
)

export default class iTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: props.albums,
            edit: false,
        };
    }
    handleClick(){
        this.setState(state => ({
            edit: !state.edit
        }));
    }
    handleSubmit(e){
        e.preventDefault();
        const formData = {};
        for (const field in this.refs){
            formData[field] = this.refs[field].value;
        }
    }

    componentDidMount(){
        console.log(this.state)
    }

    display = () => ( 
        this.state.albums.map((t,i) => {
            return <Item index={i+1} name={t.name} artist={t.artist} tag={t.tag}/>;
        })
    )

    displayEdit = () => (
        this.state.albums.map((t,i) => {
            return <EditItem index={i+1} name={t.name} artist={t.artist} tag={t.tag}/>;
        })
    )

    render(){
        const editing = this.state.edit;
        let table;
        if (editing){table = this.displayEdit();}
        else{table = this.display();}
        let button;
        if (editing){button = <button class="btn btn-info" onClick={() => this.handleClick()}>Ok</button>}
        else{button = <button class="btn btn-info" onClick={() => this.handleClick()}>Edit</button>;}

        return(
            <div>
            {button}
            <Table striped>
                          <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Artist</th>
                                <th scope="col">Tags</th> 
                              </tr>
                          </thead>
                          <tbody>
                            {table}
                          </tbody>
            </Table>
          </div>
        )
    }

}