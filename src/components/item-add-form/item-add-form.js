import React,{ Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component{
    constructor(){
        super();
        this.state ={}
    }

    render(){
        return(
            <form className="bottom-panel d-flex">
                <input 
                    type='text'
                    className="form-control new-todo-label" />

                <input 
                    type='submit' 
                    className="btn btn-outline-secondary" />
            </form>
        )
    }
}