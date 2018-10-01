import React, { Component } from 'react';

/**
 * QuizEnd component
 *
 * @class QuizEnd
 * @extends {Component}
 */
class QuizEnd extends Component {

    /**
     * HandleResetClick function
     *
     * @memberof QuizEnd
     */
    handleResetClick() {
        this.props.resetClickHandler()
    }
    render() {
        return(
            <div>
                <p>Thanks for playing!</p>
                <a href="" onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
            </div>
        );
    }

}

export default QuizEnd;