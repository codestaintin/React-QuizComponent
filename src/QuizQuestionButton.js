import React, { Component } from 'react';

/**
 * QuizQuestionButton component
 *
 * @class QuizQuestionButton
 * @extends {Component}
 */
class QuizQuestionButton extends Component {

    /**
     * Handle click function
     *
     * @memberof QuizQuestionButton
     */
    handleClick() {
        this.props.clickHandler(this.props.button_text)
    }
    render() {
        return(
            <li className="flex-item"><button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button></li>
        )
    }
}

export default QuizQuestionButton;