import React,{ Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.css';



class addTask extends Component{
    constructor(props){
        super(props);

        this.state = {
            active: false,
        };
    }
    // button trigger
    toggleClass = () =>  {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        console.log(this.state.active);
    };
    render(){
        let className = classNames({
            addTask: true,
            inProggress: this.state.active
        });
        return (
            <div>
                <div className={className}>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className="buttonToggle">
                    <button  onClick={this.toggleClass}>+</button>
                </div>
            </div>
        )
    }
}

export default addTask;