import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    changeInput = event => {

        this.setState({ value: event.target.value })
    }
    addNewTask = async(e) => {
        e.preventDefault()
        if (this.state.value.length < 3) {
            return alert('Минимальная длина задачи 3 символа')
        }

        this.props.addNewTask(this.state.value)
        this.setState({ value: '' })
    }

    render() {
        return (
            <form className="bottom-panel d-flex">
                <input
                    onChange={this.changeInput}
                    value={this.state.value}
                    type='text'
                    className="form-control new-todo-label" />

                <input
                    onClick={this.addNewTask}
                    type='submit'
                    className="btn btn-outline-secondary" />
            </form>
        )
    }
}