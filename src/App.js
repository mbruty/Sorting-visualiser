import React from 'react';
import './App.css';
import InfoBox from './InfoBox'
import ContentBox from './ContentBox';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [57,91,37,16,14,38,88,98,68,88,18,34,37,5,94,17,41,39,93,75,3,28,19,36,56,82,28,64,51,64,92,62,37,58,96,13,83,84,73,38,97,21,23,13,88,76,81,15,18,66,49,9,57,72,13,2,78,85,33,39,92,84,37,63,24],
      algorithm: 'Bubble',
      samples: 25
    }

    this.onChange = this.onChange.bind(this);
    this.showState = this.showState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onChange(){
    this.setState({...this.state, algorithm: document.getElementById('algorithm').value});
  }

  handleChange(e){
    let {value, min, max} = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    e.target.value = value;
    this.setState({ ...this.state, samples: Number(value) });
  }

  showState(){
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <ContentBox data={this.state.data}/>
        <InfoBox onChange={this.onChange} handleChange={this.handleChange} showState={this.showState}/>
      </div>
    )
  }
}

export default App;
