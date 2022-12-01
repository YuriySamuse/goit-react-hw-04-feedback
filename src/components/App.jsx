// import { render } from '@testing-library/react';
import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOption';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <>
        <section>
          <h1>Plese leave feedback</h1>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeadback}
          />
        </section>
        <section>
          <h2>Statistics</h2>
          <ul>
            <li>Good</li>
            <li>Netural</li>
            <li>Bad</li>
          </ul>
        </section>
      </>
    );
  }
}

export default App;
