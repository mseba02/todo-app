import React, { Component } from 'react';
import Layout from './components/layout';
import AddTask from './components/addTask';
import EventsCalendar from './components/calendar';



export default class App extends Component {
  render() {
    return (
      <Layout>
          <AddTask />
          <EventsCalendar />
      </Layout>
    );
  }
}
