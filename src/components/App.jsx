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

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <section>
          <h1>Plese leave feedback</h1>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </section>
        <section>
          <h2>Statistics</h2>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </section>
      </>
    );
  }
}

export default App;
