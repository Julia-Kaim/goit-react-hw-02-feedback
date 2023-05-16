import styles from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p className={styles.title}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};


