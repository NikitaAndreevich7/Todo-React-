import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {

    maxId = 100;
    constructor(){
        super();
        this.state={
            items:[
                this.createItem('Drink Coffee'),
                this.createItem('Learn React'),
                this.createItem('Make Awesome App'),
            ]
        }
    }

    createItem(label){
        return{
            id: ++this.maxId,
            label,
            important:false,
            done:false
        }
    }

    render(){
        const { items } =this.state;

        return(
            <div className="todo-app">
                <AppHeader/>
                <TodoList items={items}/>
                <ItemAddForm />
            </div>
        )
    }
}
