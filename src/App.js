import React from 'react';
import './App.css';
import InfoBox from './InfoBox'
import ContentBox from './ContentBox';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      algorithm: 'Bubble',
      samples: 25,
      data: []
    }

    this.state.data = this.randList(this.state.samples);

    this.onChange = this.onChange.bind(this);
    this.showState = this.showState.bind(this);
    this.randList = this.randList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  randList(nItems){
    let arr = [];
    for(let i = 0; i < nItems; ++i){
      arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
  }

  onChange(){
    this.setState({...this.state, algorithm: document.getElementById('algorithm').value});
  }

  handleChange(e){
    let {value, min, max} = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    e.target.value = value;
    let newList = this.randList(value);
    this.setState({ ...this.state, samples: Number(value), data: newList});
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
