import { useContext } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { Section } from './Section';
import { MyContext } from 'components/MyContext/MyContext';

export const Feedback = () => {
  const { state } = useContext(MyContext);

  const stateArr = Object.values(state);

  // const addFeedback = option => {
  //   console.log(option);
  //   setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  // };

  const countTotalFeedback = () => {
    const totalFeedback = stateArr.reduce((total, state) => {
      return total + state;
    }, 0);
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    return good === 0 ? 0 : Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions />
        {/* !render */}
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
