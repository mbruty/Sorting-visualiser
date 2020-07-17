import React, { Component } from 'react'

export default class InfoBox extends Component {

    constructor(props){
        super(props);
        this.props = props;
        this.algorithms = ['Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Heap Sort'];
    }
    
    render() {
        return (
            <div className="info-box">
                <h2>Algorithm</h2>
                <select name="algorithm" id="algorithm" onChange={this.props.onChange}>
                    {this.algorithms.map((element) => {
                    return <option value={element}>{element}</option>
                    })}
                </select>
                <h2>Number of elements</h2>
                <input onChange={this.props.handleChange} id="samples" type="number" min="1" max="128" defaultValue="25"/>
                <h2>Delay between sorting iterations (ms)</h2>
                <input onChange={this.props.handleChange} id="delay" type="number" min="0" max="1000" defaultValue="25"/>
                <button onClick={this.props.sort}>Sort</button>
                <button onClick={this.props.showState}>State</button>
            </div>
        )
    }
}
