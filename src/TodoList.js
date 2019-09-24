import React, { Fragment, Component } from 'react'
import TodoItem from './TodoItem'
import './style.css'

export default class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render () {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className='input'
            value={ this.state.inputValue }
            onChange={ this.handleInputChange } />
          <button onClick={ this.handleButtonClick }>提交</button>
        </div>
        <ul>{ this.getTodoItem() }</ul>
      </Fragment>
    )
  }
  getTodoItem () {
    return this.state.list.map((item, i) => <TodoItem
      key={ i }
      content={ item }
      index={ i }
      deleteItem={ this.handleItemDelete } />
    )
  }
  handleInputChange (e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleButtonClick () {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }
  handleItemDelete (i) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(i, 1)
      return { list }
    })
  }
}
