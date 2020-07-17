import React from 'react';
import './App.css';
import InfoBox from './InfoBox'
import ContentBox from './ContentBox';
import bubbleSort from './BubbleSort'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      algorithm: 'Bubble Sort',
      samples: 25,
      delay: 25,
      sort: false,
      data: []
    }

    this.state.data = this.randList(this.state.samples);

    this.onChange = this.onChange.bind(this);
    this.showState = this.showState.bind(this);
    this.randList = this.randList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sort = this.sort.bind(this);
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
    if(e.target.id == "samples"){
      this.setState({ ...this.state, samples: Number(value), data: newList});
    }
    else if(e.target.id == "delay"){
      this.setState({ ...this.state, delay: Number(value)});
    }
  }

  sort(){
    switch(this.state.algorithm){
      case 'Bubble Sort':
        bubbleSort({data: this.state.data, delay: this.state.delay, callback: (data) => { this.setState( {...this.state, data: data})}})
    }
  }

  showState(){
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <ContentBox data={this.state.data}/>
        <InfoBox onChange={this.onChange} handleChange={this.handleChange} showState={this.showState} sort={this.sort}/>
      </div>
    )
  }
}

export default App;
