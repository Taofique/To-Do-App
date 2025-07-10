import styles from './Button.module.css';

type Props = {
  label: string;
  onClick?: () => void;
  type?: 'primary' | 'secondary'; // for styling
  buttonType?: 'button' | 'submit'; // native HTML button type
};

function Button({
  label,
  onClick,
  type = 'primary',
  buttonType = 'button',
}: Props) {
  return (
    <button
      type={buttonType} // ✅ this line is the key
      className={`${styles.button} ${styles[type]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
