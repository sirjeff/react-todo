import React from "react"

class TodoItem extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: []
    }    
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }
  
  componentDidMount() {
    this.getItems()
  }


  onDragStart = (e, index) => {
    this.draggedItem = this.state.todos[index]
    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/html", e.target.parentNode)
    //e.dataTransfer.setDragImage(e.target.parentNode, 20, 20)
  }

  onDragOver = index => {
    const draggedOverItem = this.state.todos[index] // item being 
    if (this.draggedItem === draggedOverItem) { return } // ignore self
    let todos = this.state.todos.filter(item => item !== this.draggedItem)
    todos.splice(index, 0, this.draggedItem)
    this.setState({ todos })
  }

  onDragEnd = () => {
    this.draggedIdx = null
  }
  
  
  getItems() {
    fetch("http://omi.nz/bin/pxydb/?file=todosData&type=json&action=select")
      .then(results => results.json())
      .then(results => this.setState({todos:results})
    )
  }
  
  handleRemove(id) {
    const newState = this.state;
    const index = newState.todos.findIndex(a => a.id === id);

    if (index === -1) return;
    newState.todos.splice(index, 1);

    this.setState(newState); // This will update the state and trigger a rerender of the components
  }
  
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  
  render() {

//    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
//  const todoItems = [].concat(this.state.todos).sort((a, b) => a.sorder > b.sorder).map( (item, i) => <TodoItem key={i} item={item} handleChange={this.handleChange} />)
  
    return (
    this.state.todos.map( (item,idx) => 
    <div 
      key={item.id}
      className="drag todo-item" 
      draggable
      onDragStart={e => this.onDragStart(e, idx)}
      onDragOver={() => this.onDragOver(idx)}
      onDragEnd={this.onDragEnd}
    >
      <input 
        className="form-check-input"
        type="checkbox" 
        checked={item.completed} 
        onChange={() => this.handleChange(item.id)}
        id={'status_'+item.id}
      />
      <label
        className="form-check-label"
        contentEditable="true"
        suppressContentEditableWarning={true}
        id={'content_'+item.id}
        data-sorder={item.sorder}
      >{item.text}</label>

      <input 
        className="form-check-input remove"
        type="button"
        value="X"
        onClick={() => this.handleRemove(item.id)}
        id={'status_'+item.id}
      />
      
    </div>
    )
  )}
  
}

export default TodoItem

