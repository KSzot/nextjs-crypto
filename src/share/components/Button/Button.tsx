import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'gold' | 'outline';
}

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  const className = `${styles.custom_button} ${
    styles[`custom_button__${variant}`]
  }`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
