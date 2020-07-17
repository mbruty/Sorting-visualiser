import React, { Component } from 'react'

export default class ContentBox extends Component {

    render() {
        const data = this.props.data;
        const elementWidth = 100 / data.length -0.1;
        return (
            <div className="content-box">
                <div className="bar-pannel">
                    {data.map(element => {
                        return <div className="bar" style={{width: `${elementWidth}%`, height: `${element}%`}}/>
                    })}
                </div>
            </div>
        )
    }
}
