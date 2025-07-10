import type { ChangeEvent } from 'react';
import styles from './Input.module.css';

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

function Input({ value, onChange, placeholder }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
    />
  );
}

export default Input;
