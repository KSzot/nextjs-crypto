import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'gold' | 'outline';
}

export const Button = ({ children, variant, type, ...props }: ButtonProps) => {
  const className = `${styles.custom_button} ${
    styles[`custom_button__${variant}`]
  }`;

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={className} {...props}>
      {children}
    </button>
  );
};
