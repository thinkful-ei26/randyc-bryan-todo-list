import React from 'react';
import List from './list-item';
import DisplayList from './display-list';
//import DisplayList from '.'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      todos: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  // this.onChange = this.onChange.bind(this)
  

  onChange = (e) => {
    this.setState({ title: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      title:'',
      todos: [...this.state.todos, this.state.title]
    });
  }

  onDeleteClick = (index) => {

    const filteredList = this.state.todos.filter((item,i) => i !== index);
     
    this.setState({

      todos : filteredList

    })


  }

  onEditClick = (index) => {

    //value from text target

    //setState
 
  }


  render() {
    return (
      <div>
        <form className="Application" onSubmit={this.onSubmit}>
          <input value={this.state.title} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <DisplayList todos={this.state.todos} onChange={this.onChange} onEditClick={this.onEditClick} onDeleteClick={this.onDeleteClick} />
      </div>
    );
  }
}