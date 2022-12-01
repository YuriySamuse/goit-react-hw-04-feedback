import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, idx) => {
    return (
      <button key={idx} type="button" onClick={() => onLeaveFeedback(option)}>
        {upperFirsLetter(option)}
      </button>
    );
  });
};

function upperFirsLetter(str) {
  return str[0].toUpperCase() + str.substring(1);
}
export default FeedbackOptions;
