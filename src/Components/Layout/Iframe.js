import React, { Component } from 'react'

class Iframe extends Component {
    render() {
        return (
            <iframe src={this.props.src} height={this.props.height} width={this.props.width}  className="fullheight"/>
        )
    }
}

export default Iframe
