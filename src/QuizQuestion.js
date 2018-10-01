import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {

    /**
     *Creates an instance of QuizQuestion.
     * @param {*} props -  props
     * @memberof QuizQuestion
     */
    constructor(props) {
        super(props);
        this.state = { incorrectAnswer: false };
    }

    /**
     * Handle click function.
     *
     * @param {*} buttonText - button
     * @memberof QuizQuestion
     */
    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.setState({ incorrectAnswer: false })
            this.props.showNextQuestionHandler()
        } else {
           this.setState({ incorrectAnswer: true })
        }
    }
    render() {
        return(
            <main>
                <p><b>Question</b></p>
                <section  className="question-container">
                    <p><i>{this.props.quiz_question.instruction_text}</i></p>
                </section>
                <br/>
                <p><b>Answers</b></p>
                <br/>
                <section className="buttons answer-container">
                    <ul className="flex-container row">
                        {this.props.quiz_question.answer_options.map((answer_option, index) => {
                            return <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)}/>
                        })}
                    </ul>
                </section>
                {this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null }
            </main>
        );
    }
}

export default QuizQuestion;