import React from 'react';
import PostIt from './PostIt';

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {
          id: 33,
          note: "Call Jennifer"
        },
        {
          id: 34,
          note: "Go shopping"
        }
      ]
    }
    this.eachNote = this.eachNote.bind(this);
  }
  

  eachNote(note, i) {
    return (
      <PostIt key={i}
            index={i}>
            {note.note}
      </PostIt>
    )
  }
	render() {
		return (
		  <div className="board">
        {this.state.notes.map(this.eachNote)}
        console.log(note);
      </div>
		)
	}
}

export default Board;