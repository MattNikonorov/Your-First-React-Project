import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
    super(props);
    var timestamp = Date.now();
    this.state = {
      brand: "Ford",
      object: "Mustang",
      time: timestamp,
      year: 1964
    };

  }

  changeColor = () => {
    var col = ["blue", "turquoise", "purple", "green", "pink", "brown", "red", "orange"]
    var rand = Math.floor(Math.random() * 8 + 0);
    this.setState({color: col[rand]});
  }
  changeObject = () => {
    var ob = ["car", "phone", "table", "bike", "chair", "computer", "coat", "guitar"]
    var rand2 = Math.floor(Math.random() * 8 + 0);
    this.setState({object: ob[rand2]});
  }
  render() {
    return (
      <div>
      <p style={{color: this.state.color}}>
      {this.state.object}
      </p>
      <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
        <button
          type="button"
          onClick={this.changeObject}
      >Change object</button>
      </div>
    );
  }
}
ReactDOM.render(<Car />, document.getElementById('root'));
