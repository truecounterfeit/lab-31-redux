'use strict';
import React from 'react';
import ReactDom from 'react-dom';

import noteCreateForm from './noteCreateForm.js'

class noteItem extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {
    //     content: this.state
    // }
    this.noteItem = this.noteItem.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }

  handleDeleteButton(e) {
    e.preventDefault();
    console.log('delete clicked');
    let deleteNote = this.newNote.content = '';
    this.deleteNote(e.target.id)
  }

  render(){
    return (
      <button onClick={this.handleDeleteButton}>
      Delete
      </button>
    )
  }

}

export default noteItem;
