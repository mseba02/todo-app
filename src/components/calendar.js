// imports
import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';

// component
class EventsCalendar extends Component{
    constructor(props){
        super(props);
        // state
        this.state = {
            date: new Date(),
            hasEvent: '1'
        }
    }
    componentDidMount() {
        const eventsData = JSON.parse(localStorage.getItem('todoinfo'));
        this.setState({
            hasEvent: eventsData
        });
        console.log(eventsData);
    }

    // calendar
    onChange = date => this.setState({ date  } )

    // render component
    render() {
        return (
            <div className="calendar-wrap">
                <h1>Calendar</h1>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        )
    }
}

export default EventsCalendar;