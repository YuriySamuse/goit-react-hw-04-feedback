import React from 'react';
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
export default FeedbackOptions;
