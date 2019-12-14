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
    // DONE
    onToggleDone = (id) =>{
        this.setState(({items}) =>{
            const idx = items.findIndex((el) => el.id === id);

            const oldItem = items[idx];
            const newItem = {...oldItem, done: !oldItem.done}
            return{
                items: [
                    ...items.slice(0, idx),
                    newItem,
                    ...items.slice(idx + 1)
                ]
            }
        })
    }

    // IMPORTANT
    onToggleImportant =(id) =>{
        this.setState(({items}) =>{
            const idx = items.findIndex((el) => el.id === id);

            const oldItem = items[idx];
            const newItem = {...oldItem, important: !oldItem.important}
            return{
                items: [
                    ...items.slice(0, idx),
                    newItem,
                    ...items.slice(idx + 1)
                ]
            }
        })
    }

    // DELETE
    onDelete = (id) =>{
        this.setState(({items})=>{
            const idx = items.findIndex((el) => el.id === id);
            

            return{
                items: [
                    ...items.slice(0, idx),
                    ...items.slice(idx +1)
                ]
            }

        })
    }

    //ADD
    addItem =(id) =>{

    }

    render(){
        const { items } =this.state;

        return(
            <div className="todo-app">
                <AppHeader/>
                <TodoList
                    items = {items}
                    onToggleDone = {this.onToggleDone}
                    onToggleImportant = {this.onToggleImportant}
                    onDelete = {this.onDelete}/>
                <ItemAddForm />
            </div>
        )
    }
}
