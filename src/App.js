import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css' 
class App extends React.Component {
 
  render() {
    
    return (
      <div className="todo-list">
        <Header />
        <TodoItem />
        <Footer />
      </div>
    )    
  }

}

export default App;

// /src/App.js