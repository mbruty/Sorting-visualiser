import React from 'react';
import './App.css';
import InfoBox from './InfoBox'
import ContentBox from './ContentBox';
import bubbleSort from './sorting algos/BubbleSort';
import insertionSort from './sorting algos/InsertionSort';
import selectionSort from './sorting algos/SelectionSort'
import HeapSort from './sorting algos/HeapSort';

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

        this.state.data = this.randList(this.state.samples);

        this.onChange = this.onChange.bind(this);
        this.showState = this.showState.bind(this);
        this.randList = this.randList.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sort = this.sort.bind(this);
    }

    randList(nItems) {
        let arr = [];
        for (let i = 0; i < nItems; ++i) {
            arr.push(Math.floor(Math.random() * 100));
        }
        return arr;
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
        let newList = this.randList(value);
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

    sort() {
		const params = {
			data: this.state.data,
			delay: this.state.delay,
			callback: (data) => {
				this.setState({
					...this.state,
					data: data
				})
			}
		}
        switch (this.state.algorithm) {
            case 'Bubble Sort':
                bubbleSort(params);
				break;
			
			case 'Insertion Sort':
				insertionSort(params);
				break;

			case 'Selection Sort':
				selectionSort(params);
				break;

			case 'Heap Sort':
				HeapSort(params);
				break;
				
        }
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