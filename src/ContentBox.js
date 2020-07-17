import React, { Component } from 'react'

export default class ContentBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: props.data
        }
    }
    render() {
        return (
            <div className="content-box">
                <div className="bar-pannel">
                    {this.state.data.map(element => {
                        console.log(`${100 / this.state.data.length - 0.4}`)
                        return <div className="bar" style={{width: `${100 / this.state.data.length - 0.4}%`, height: `${element}%`}}/>
                    })}
                </div>
            </div>
        )
    }
}
