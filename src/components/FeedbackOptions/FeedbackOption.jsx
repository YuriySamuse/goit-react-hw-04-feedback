import React from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import { Button, Box } from 'components/FeedbackOptions/Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box>
      {options.map(option => {
        const id = nanoid();
        return (
          <Button
            key={id}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {upperFirsLetter(option)}
          </Button>
        );
      })}
    </Box>
  );
};

function upperFirsLetter(str) {
  return str[0].toUpperCase() + str.substring(1);
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
