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
        const events = [
            {
                start: '2015-07-20',
                end: '2015-07-02',
                eventClasses: 'optionalEvent',
                title: 'test event',
                description: 'This is a test description of an event',
            },
            {
                start: '2015-07-19',
                end: '2015-07-25',
                title: 'test event',
                description: 'This is a test description of an event',
                data: 'you can add what ever random data you may want to use later',
            },
        ];
        return (
            <div className="calendar-wrap">
                <h1>Calendar</h1>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    // events: {events}
                />
            </div>
        )
    }
}

export default EventsCalendar;