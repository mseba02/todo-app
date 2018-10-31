// imports
import React,{ Component } from 'react';
import classNames from 'classnames/bind';

class addTask extends Component{
    constructor(props){
        super(props);

        this.state = {
            active: false,
            todotitle: '',
            tododate: '',
            todopriority: ''
        };
    }
    // button trigger
    toggleClass = () =>  {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        console.log(this.state.active);
    };
    // add to do
    handleAddTodo= (e) => {
      e.preventDefault();
      const titletodo = this.state.todotitle;
      console.log(titletodo);

    };
    // to do title
    handleTDTitle = (e) => {
        const value = e.target.value;
        this.setState({
            todotitle: value
        });
        console.log(e.target.value)

    };
    handleTDate = (e) => {
        console.log(e.target.value)
    };
    handleTDPriority = (e) => {
        console.log(e.target.value)
    };
    render(){
        let className = classNames({
            addTask: true,
            inProggress: this.state.active
        });
        return (
            <div>
                <div className="today-todolist">
                    <h1>Today's to-do-list</h1>
                    <div>to do 1 ...</div>
                </div>
                <form className={className} onSubmit={this.handleAddTodo}>
                    <input
                        className="to-do-name"
                        type="text"
                        placeholder="Enter To-do"
                        onChange={this.handleTDTitle}
                    />
                    <input
                        type="text"
                        placeholder="Pick Date"
                        onChange={this.handleTDate}
                    />
                    <div className="form-select">
                        <label>Priority</label>
                        <select onChange={this.handleTDPriority}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Critical</option>
                        </select>
                    </div>
                    <button type="submit">Add To do</button>
                </form>
                <div className="buttonToggle">
                    <button onClick={this.toggleClass}>+</button>
                </div>
            </div>
        )
    }
}

export default addTask;