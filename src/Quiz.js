import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';
let quizData  = require('./quiz_data.json');

/**
 * Quiz component
 *
 * @class Quiz
 * @extends {Component}
 */
class Quiz extends Component {

    /**
     *Creates an instance of Quiz.
     * @param {*} props - props
     * @memberof Quiz
     */
    constructor(props) {
        super(props);
        this.state = {
            quiz_position : 1
        }
    }

    /**
     * Show next question function
     *
     * @memberof Quiz
     */
    showNextQuestion() {
        this.setState((state) => {
            return {quiz_position: state.quiz_position + 1 }
        })
    }

    /**
     * Handle reset click function
     *
     * @memberof Quiz
     */
    handleResetClick() {
        this.setState({ quiz_position: 1})
    }
    render() {
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length);
        return (
            <div>
                {isQuizEnd ? <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}/> :
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]
                } showNextQuestionHandler={this.showNextQuestion.bind(this)}/>
                }
            </div>
        )
    }
}

export default Quiz;