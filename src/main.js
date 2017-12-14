'use strict';

import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';

import noteCreateForm from './components/noteCreateForm.js'
import noteItem from './components/noteItem.js'
import noteList from './noteList.js'

class App extends React.Component {

    constructor(props) {
      super(props);

      // this.state = {
      //     content: this.state
      // }
      this.app = this.app.bind(this);
    }

    app() {
      return {
        state: this.state,
        setState: this.setState.bind(this),
        showErrors: true
      }
    }

    render() {
      console.log('form rendered!');
      return (
        <form>
        <div>
          <noteCreateForm />
          <noteList />
        </div>
        </form>
      )
    }

}

ReactDom.render(<App />, document.getElementById('root'));
