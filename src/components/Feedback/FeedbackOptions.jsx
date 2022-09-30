import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FeedbackWrapper, OptionButton } from './FeedbackOptions.styled';
import { MyContext } from 'components/MyContext/MyContext';

export const FeedbackOptions = () => {
  const { state, addFeedback } = useContext(MyContext);
  const stateKeys = Object.keys(state);

  return (
    <FeedbackWrapper>
      {' '}
      {stateKeys.map((option, index) => {
        return (
          <OptionButton
            key={index}
            type="button"
            onClick={() => addFeedback(option)}
          >
            {option}
          </OptionButton>
        );
      })}
    </FeedbackWrapper>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
};
