// imports
import React,{ Component } from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'react-datepicker';
// import style from 'react-datepicker/dist/react-datepicker.css';


// add to do
class addTask extends Component{
    constructor(props){
        super(props);

        this.state = {
            active: false,
            todotitle: '',
            todopriority: 'Low',
            myData: '',
            plus: false,
            startDate: new Date()
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
        console.log(myData);
    }

     // button trigger
    toggleClass = () =>  {
        const currentState = this.state.active;
        const plusState = this.state.plus;
        this.setState({
            active: !currentState,
            plus: !plusState
        });
        console.log(this.state.active);
    };

    // add to do
    handleAddTodo = (e) => {
        e.preventDefault();
        const titletodo = this.state.todotitle;
        const dateV = this.state.startDate;
        const storedData = `${dateV.getDate()}-${dateV.getMonth()+1}-${dateV.getFullYear()}`;
        const priority =  this.state.todopriority;

        let storedItems = JSON.parse(localStorage.getItem('todoinfo')) || [];
        storedItems.push({titletodo, storedData, priority});
        localStorage.setItem('todoinfo', JSON.stringify(storedItems));

        this.setState({
            myData: JSON.parse(localStorage.getItem('todoinfo')),
            active: false,
            plus: false
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
    handleTDate = (date) => {
        console.log(date, this.state.startDate);
        this.setState({
            startDate: date
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
                return <li className={item.priority}>
                    <span>{item.titletodo} </span>
                    <span>{item.storedData} </span>
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
                        <div className="lay">
                            <input
                                className="to-do-name"
                                type="text"
                                placeholder="enter to do"
                                onChange={this.handleTDTitle}
                            />
                            {/* datepicker */}
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleTDate}
                            />
                            <div className="form-select">
                                <label>Type:</label>
                                <select onChange={this.handleTDPriority}>
                                    <option defaultValue>Personal</option>
                                    <option>Birthday</option>
                                    <option>Work</option>
                                    <option>Shopping</option>
                                </select>
                            </div>
                            <button type="submit">Add To do</button>
                        </div>
                    </form>
                    <div className="buttonToggle">
                        <button className={plus} onClick={this.toggleClass}>
                            <span className="hor"></span>
                            <span className="vert"></span>
                        </button>
                        <p className="add-task-text">Add new task</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default addTask;