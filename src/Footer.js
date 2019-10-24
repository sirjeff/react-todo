import React from "react"

class Footer extends React.Component {


  
  render() {

//    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
//  const todoItems = [].concat(this.state.todos).sort((a, b) => a.sorder > b.sorder).map( (item, i) => <TodoItem key={i} item={item} handleChange={this.handleChange} />)
  
    return (

    <div 
      className="drag todo-item" 
    >
      <input 
        className="form-check-input"
        type="checkbox" 
        id={'status_666'}
      />
      <label
        className="form-check-label"
        contentEditable="true"
        suppressContentEditableWarning={true}
        id={'content_666'}
        data-sorder={666}
      ></label>
    </div>
    
  )}
  
}

export default Footer

