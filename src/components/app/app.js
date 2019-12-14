import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {
    constructor(){
        super();
        this.state={}
    }

    render(){

        return(
            <div>
                <AppHeader/>
                <TodoList />
                <ItemAddForm />
            </div>
        )
    }
}
