import React,{ Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component{
    constructor(){
        super();
        this.state ={}
    }

    render(){
        return(
            <form>
                <input type='text' />
                <input type='submit' />
            </form>
        )
    }
}