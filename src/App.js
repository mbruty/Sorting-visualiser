import React from 'react';
import './App.css';
import InfoBox from './InfoBox'
import ContentBox from './ContentBox';
import randList from './RandList'
// eslint-disable-next-line
import Worker from 'worker-loader!./workers/Sort.worker.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            algorithm: 'Bubble Sort',
            samples: 25,
            delay: 25,
            sort: false,
            data: []
        }

        this.state.data = randList(this.state.samples);

        this.onChange = this.onChange.bind(this);
        this.showState = this.showState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sort = this.sort.bind(this);
        this.updateData = this.updateData.bind(this);

        this.worker = null;
    }


    onChange() {
        this.setState({
            ...this.state,
            algorithm: document.getElementById('algorithm').value
        });
    }

    handleChange(e) {
        let {
            value,
            min,
            max
        } = e.target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
        e.target.value = value;
        let newList = randList(value);
        if (e.target.id == "samples") {
            this.setState({
                ...this.state,
                samples: Number(value),
                data: newList
            });
        } else if (e.target.id == "delay") {
            this.setState({
                ...this.state,
                delay: Number(value)
            });
        }
    }

    // Doing this in a separate function so that it can be binded to this component.
    updateData(event){
        this.setState({...this.state, data: event.data});
    }

    sort(e) {
        e.preventDefault();
        //Destory the worker if one is already running
        if(this.worker){
            this.worker.terminate();
        }
        this.worker = new Worker();
        // Using a worker here rather than doing it on the main thread to make it
        // easier to cancel
        this.worker.postMessage({
            data: this.state.data,
            delay: this.state.delay,
            algorithm: this.state.algorithm
        }); // start the sorting worker

        // Read the data posted from the worker to update the state of
        // the data
        this.worker.addEventListener('message', this.updateData)
    }

    showState() {
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