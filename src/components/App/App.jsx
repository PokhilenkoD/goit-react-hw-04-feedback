import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { SectionTitle } from 'components/SectionTitile/SectionTitle';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { useState } from 'react';

export const App = ({
  title = 'Please leave feedback',
  subTitle = 'Statistics',
}) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedback = ev => {
    const value = ev.target.textContent.toLowerCase();

    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log('error');
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  const arrayOptions = ['good', 'neutral', 'bad'];
  return (
    <div>
      <SectionTitle title={title}>
        <FeedbackOptions options={arrayOptions} countFeedback={countFeedback} />
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback()}
            goodsFeedback={countPositiveFeedbackPercentage()}
            subTitle={subTitle}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </SectionTitle>
    </div>
  );
};
