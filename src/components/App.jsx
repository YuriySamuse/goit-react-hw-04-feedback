// import { render } from '@testing-library/react';
import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOption';
import Statistics from './Statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePrcentage = this.countPositiveFeedbackPercentage(total, good);
    const options = Object.keys(this.state);
    return (
      <>
        <section title="Plese leave feedback">
          <h1>Plese leave feedback</h1>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </section>
        <section title="Statistics">
          <h2>Statistics</h2>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={positivePrcentage}
          />
        </section>
      </>
    );
  }
}

export default App;
