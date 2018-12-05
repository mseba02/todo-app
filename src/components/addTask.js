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
            todopriority: 'Low',
            myData: '',
            plus: ''
        };
    }

    // component did mount with local storage data
    componentDidMount(){
        console.log('didmount');
        const myData = localStorage.getItem('todoinfo');
        const data = JSON.parse(myData);
        this.setState({
            myData: data
        });
        // console.log(myData);
    }
    // componentDidUpdate() {
    //     console.log('updated');
    //     console.log(this.state.myData);
    // }

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
        const priority =  this.state.todopriority;

        let storedItems = JSON.parse(localStorage.getItem('todoinfo')) || [];
        storedItems.push({titletodo, date, priority});
        localStorage.setItem('todoinfo', JSON.stringify(storedItems));

        this.setState({
            myData: JSON.parse(localStorage.getItem('todoinfo'))
        })

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
        const priority = e.target.value;
        this.setState({
           todopriority: priority
        });

    };

    // render items from localStorage
    showItems()  {
        if(!this.state.myData) {
            return <div>There is no to do</div>
        } else {
            return this.state.myData.map( item => {
                return <li key={item.date * 154}>
                    <span>{item.titletodo} </span>
                    <span>{item.date} </span>
                    <span>{item.priority}</span>
                </li>
            });
        }

      // console.log(data ,'from')
    };

    // render
    render(){
        // classnames
        let addTask = classNames({
            addTask: true,
            inProggress: this.state.active,
        });
        let plus = classNames({
            plusAdd: true,
            active: this.state.plus
        });
        return (
            <div className="todo-section">
                <h1>Today's to-do-list</h1>
                <div className="wrapper">
                    <div className="today-todolist">
                        <ul>
                            {this.showItems()}
                        </ul>
                    </div>
                    {/* form */}
                    <form className={addTask} onSubmit={this.handleAddTodo}>
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
                                <option defaultValue>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                                <option>Critical</option>
                            </select>
                        </div>
                        <button type="submit">Add To do</button>
                    </form>
                    <div className="buttonToggle">
                        <button className={plus} onClick={this.toggleClass}>
                            <img src="../src/images/add-button.svg" width="30" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default addTask;