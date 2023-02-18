import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');

  const [open, setOpen] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {open && <Toast message={message} variant={variant} onClose={() => setOpen(false)}></Toast>}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} 
                      value={message} 
                      onChange={(event) => setMessage(event.target.value)}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          {VARIANT_OPTIONS.map((option) => (
          <div key={option}
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <label htmlFor={`variant-${option}`}>
              <input
                id={`variant-${option}`}
                type="radio"
                name="variant"
                checked={option === variant}
                onChange={() => setVariant(option)}
                value={option}
              />
              {option}
            </label>
          </div>
          ))}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => setOpen(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
