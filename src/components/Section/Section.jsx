import PropTypes from 'prop-types';
import { Sections } from 'components/Section/Section.styled';

const Section = ({ title, children }) => {
  return (
    <Sections>
      {title && <h2>{title}</h2>}
      {children}
    </Sections>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
