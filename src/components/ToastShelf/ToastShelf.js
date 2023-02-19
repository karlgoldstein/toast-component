import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts}) {

  return (
    <ol className={styles.wrapper}
    role="region"
aria-live="assertive"
aria-label="Notification">
      {toasts.map(({variant, id, message, dismiss}) => (
      <li key={id} className={styles.toastWrapper}>
        <Toast onClose={dismiss} variant={variant}>{message}</Toast>
      </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
