import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageIamOn: 'home' };
  }

  render() {
    return (
      <React.Fragment>
        <Router exact path="/" component={Home} />
        <nav>
          <ul>
            <li onClick={() => this.setState({ pageIamOn: 'home' })}> Go Home</li>
            <li onClick={() => this.setState({ pageIamOn: 'sales' })}> Go To Sales</li>
          </ul>
        </nav>
        {this.state.pageIamOn === 'home' && <h1>Home</h1>}
        {this.state.pageIamOn === 'sales' && <h1>Sales</h1>}
      </React.Fragment>
    );
  }
}

export default Router;
