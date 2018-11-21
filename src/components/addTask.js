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
            todopriority: '',
            myData: ''
        };
    }
    // component did mount with local storage data
    componentDidMount(){
        const myData = localStorage.getItem('title');
        this.setState({myData});
        console.log(myData);
    }
    // button trigger
    toggleClass = () =>  {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        console.log(this.state.active);
    };
    // add to do
    handleAddTodo = (e) => {
        e.preventDefault();
        const titletodo = this.state.todotitle;
        const date = this.state.tododate;
        const priority = this.state.todopriority;
        //  add to localstorage
        // localStorage.clear();
        localStorage.setItem('date', date);
        localStorage.setItem('title', titletodo);
        localStorage.setItem('priority', priority );
        console.log(localStorage);

    };
    // to do title
    handleTDTitle = (e) => {
        const value = e.target.value;
        this.setState({
            todotitle: value
        });
        // console.log(e.target.value)

    };
    // to do date
    handleTDate = (e) => {
        // console.log(e.target.value);
        const date = e.target.value;
        this.setState({
            tododate: date
        });
    };
    // to do priority
    handleTDPriority = (e) => {
        const priority  = e.target.value;
        this.setState({
           todopriority: priority
        });
    };
    // render
    render(){
        let className = classNames({
            addTask: true,
            inProggress: this.state.active
        });
        return (
            <div>
                <div className="today-todolist">
                    <h1>Today's to-do-list</h1>
                    <div>{this.state.myData}</div>
                </div>
                {/* form */}
                <form className={className} onSubmit={this.handleAddTodo}>
                    <input
                        className="to-do-name"
                        type="text"
                        placeholder="Enter To-do"
                        onChange={this.handleTDTitle}
                    />
                    <input
                        type="number"
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