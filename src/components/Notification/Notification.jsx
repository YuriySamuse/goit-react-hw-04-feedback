import PropTypes from 'prop-types';
import { Notifi } from 'components/Notification/Notification.styled';

const Notification = ({ message }) => {
  return <Notifi>{message}</Notifi>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
