// import { render } from '@testing-library/react';
import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOption';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = type => {
    switch (type) {
      case 'good':
        return setGood(prevGood => prevGood + 1);
      case 'bad':
        return setBad(prevBad => prevBad + 1);
      case 'neutral':
        return setNeutral(prevNeutral => prevNeutral + 1);
      default:
        throw new Error('Unexpected value of option');
    }
  };

  const countTotalFeedback = () => {
    const values = Object.values([good, bad, neutral]);
    return values.reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total, good);
  const options = { good, neutral, bad };

  return (
    <>
      <Section title="Plese leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="Ще нема жодного feedback, будьте першим!!!" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};
export default App;

/*
class App extends Component {
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
        <Section title="Plese leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="Ще нема жодного feedback, будьте першим!!!" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={positivePrcentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
*/
