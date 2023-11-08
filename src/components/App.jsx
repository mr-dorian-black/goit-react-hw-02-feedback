import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Section/Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  updateFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1
    }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good === 0 ? 0 : Math.round(good / this.countTotalFeedback() * 100);

  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const options = Object.keys(this.state);

    return(
    <>
      <Section title="Please leave feedback"><FeedbackOptions options={options} onLeaveFeedback={this.updateFeedback} /></Section>
      <Section title="Statistics">
        {totalFeedback === 0
        ? (<Notification message="There is no feedback"/>)
        : (<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()} />)}
      </Section>
    </>      
    )
  }
}

export default App;
