import React from 'react';
import List from './list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      todo: [],
    };
  }

  // this.onChange = this.onChange.bind(this)
  // this.onSubmit = this.onSubmit.bind(this)

  onChange = (e) => {
    this.setState({ title: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      title:'',
      todo: [...this.state.todo, this.state.title]
    });
  }

  render() {
    return (
      <div>
        <form className="Application" onSubmit={this.onSubmit}>
          <input value={this.state.title} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List todo={this.state.todo} />
      </div>
    );
  }
}