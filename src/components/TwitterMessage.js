import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value 
    })
  }

  remainingChars = () => {
    let remChars = this.props.maxChars - this.state.value.length 
    return remChars
  }

  render() {
    console.log(this.props.maxChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>Remaining characters: {this.remainingChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
