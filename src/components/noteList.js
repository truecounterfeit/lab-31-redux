'use strict';
import React from 'react';
import ReactDom from 'react-dom';

import noteItem from './components/noteItem.js'
import noteCreateForm from './noteCreateForm.js'

class noteCreateForm extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
          content: this.state
      }
      this.noteList= this.noteList.bind(this);
    }

    render() {
      return (
        <ul>
          <li>newNote</li>
        </ul>
      )
    }

export defauly noteList;
