import React, { Component } from 'react'

export default class InfoBox extends Component {

    constructor(props){
        super(props);
        this.props = props;
        this.algorithms = ['Bubble', 'Merge'];
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
                <input onChange={this.props.handleChange} id="samples" type="number" min="1" max="128"></input>
                <div></div>
                <button onClick={this.props.showState}>State</button>
            </div>
        )
    }
}
