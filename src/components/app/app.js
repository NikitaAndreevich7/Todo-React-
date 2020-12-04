import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import axios from 'axios'
import './app.css';

export default class App extends Component {

    maxId = 100;
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    componentDidMount() {

        this.getTodosList()
    }

    getTodosList = async () => {
        const result = await axios.get('https://glacial-ocean-75858.herokuapp.com/api/todo/list')
        this.setState({ items: result.data.todos })
    }

    createItem(label) {
        this.setState({
            items: [...this.state.items, {
                id: ++this.maxId,
                title: label,
                important: false,
                done: false
            }]
        })
    }
    // DONE
    onToggleDone = (id) => {
        this.setState(({ items }) => {
            const idx = items.findIndex((el) => el._id === id);

            const oldItem = items[idx];
            const newItem = { ...oldItem, done: !oldItem.done }
            return {
                items: [
                    ...items.slice(0, idx),
                    newItem,
                    ...items.slice(idx + 1)
                ]
            }
        })
    }

    // IMPORTANT
    onToggleImportant = (id) => {
        this.setState(({ items }) => {
            const idx = items.findIndex((el) => el._id === id);

            const oldItem = items[idx];
            const newItem = { ...oldItem, important: !oldItem.important }
            return {
                items: [
                    ...items.slice(0, idx),
                    newItem,
                    ...items.slice(idx + 1)
                ]
            }
        })
    }

    // DELETE
    onDelete = async(id) => {

        const idx = this.state.items.findIndex((el) => el._id === id);
        const newItems = [...this.state.items.slice(0,idx),...this.state.items.slice(idx +1)]
        this.setState({items: newItems})

        try{
            await axios.post('https://glacial-ocean-75858.herokuapp.com/api/todo/delete',{id})
        }catch(e){
            console.log(e)
        }


    }

    //ADD
    addItem = async (value) => {
        const payload = {
            title: value,
            done: false,
            important: false
        }
        this.createItem(value)

        try {
            await axios.post('https://glacial-ocean-75858.herokuapp.com/api/todo/create', payload)
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { items } = this.state;

        return (
            <div className="todo-app">
                <AppHeader />
                <TodoList
                    items={items}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                    onDelete={this.onDelete} />
                <ItemAddForm addNewTask={this.addItem} />
            </div>
        )
    }
}
