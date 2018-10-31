import React, { Component } from 'react';
import Layout from './components/layout';
import AddTask from './components/addTask';

export default class App extends Component {
  render() {
    return (
      <Layout>
          <AddTask/>
      </Layout>
    );
  }
}
