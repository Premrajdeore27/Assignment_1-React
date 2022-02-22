import React, { Component } from 'react';
import ClassComponent from './assignment_1/ClassComponent';
import FuncComponent from './assignment_1/FuncComponent';
import './style.css'


class App extends Component {
  state = {
    isClass: false,
    isFunctional: false,
  };
  render() {
    return (
      <div className='App'>
        <div className='Header'>
          <h1>Styling using Functional and Class Components</h1>
        </div>
        <div className='button'>
          <button
            onClick={() =>
              this.setState({ isFunctional: !this.state.isFunctional })
            }
          >
            To see styling in Functional Component
          </button>
          <button
            onClick={() => this.setState({ isClass: !this.state.isClass })}
          >
            To see styling in Class Component
          </button>
        </div>
        <div className='container'>
          {this.state.isFunctional ? <FuncComponent /> : null}
          {this.state.isClass ? <ClassComponent /> : null}
        </div>
      </div>
    );
  }
}

export default App;
