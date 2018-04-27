import React from 'react';



class PostIt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }

    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
    this.renderFrom = this.renderForm.bind(this);
  }

  edit() {
    this.setState({
      editing: true
    })
  }
  
  remove() {
    alert("remove clicked")
  }

  save() {
    alert(this._newText.value)
  }

  renderForm() {
    return (
      <div className="post-it">
        <textarea ref={input => this._newText = input}/>
        <button onClick={this.save} className="submit-btn">Save</button>
      </div>
    )
  }
  
renderDisplay() {
    return (
      <div className="post-it">
        <h3>{this.props.children}</h3>
        <button onClick={this.edit}>Edit</button>
        <button onClick={this.remove}>Remove</button>
      </div>
    )
  }
  
    render() {
      return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

export default PostIt;