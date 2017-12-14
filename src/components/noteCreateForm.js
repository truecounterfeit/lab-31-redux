'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import uuid from 'uuid/v4';

import noteItem from './components/noteItem.js'
import noteList from './noteList.js'

class noteCreateForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        notes: [],
    }
    this.noteCreateForm = this.noteCreateForm.bind(this);
  }

  note() {
    this.state = {
        id: uuid,
        editing: false,
        completed: false,
        content: this.state
    }
  }

  let newNote = new note(
    id: uuid,
    editing: false,
    completed: false,
    content: this.state
  );

  submitNote() {
    return notes.push(newNote);
  }


  handleSubmitButton(e) {
    e.preventDefault();
    console.log('submit clicked');
    this.submitNote(e.target.id)
  }

  render(){
    return (
      <button onClick={this.handleSubmitButton}>
      Submit
      </button>
    )
  }


}

export default noteCreateForm;
