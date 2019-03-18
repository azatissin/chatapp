import React from 'react'

class SendMessageForm extends React.Component{
    constructor(){
        super()
        this.state={
            message:''
        }
    }

    handleChange = (event) => {
        this.setState({
            message:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message:''
        })
    }
    render(){
        return(
            <form className="send-message-form" onSubmit={this.handleSubmit}>
                <input
                    disabled = {this.props.disabled}
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="SendMessageForm"
                    type="text" />
            </form>
        )
    }
}
export default SendMessageForm