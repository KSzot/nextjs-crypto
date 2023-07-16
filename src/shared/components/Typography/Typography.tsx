import styles from './Typography.module.scss';

type TypeOwnProps<T extends React.ElementType> = {
  children: React.ReactNode;
  // className?: string;
  // fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  // fontWeight?:
  //   | 'light'
  //   | 'normal'
  //   | 'medium'
  //   | 'semibold'
  //   | 'bold'
  //   | 'extrabold'
  //   | 'black';
  fontColor?:
    | 'white'
    | 'black'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'disabled';
  as?: T;
};

type TypeProps<T extends React.ElementType> = TypeOwnProps<T> &
  React.ComponentPropsWithoutRef<T>;

export const Typography = <T extends React.ElementType>({
  children,
  fontColor = 'white',
  className,
  as,
  ...rest
}: TypeProps<T>) => {
  const Component = as || 'p';
  return (
    <Component
      // className={`${styles[`custom_text__text-${fontSize}`]} ${
      //   styles[`custom_text__font-${fontWeight}`]
      // }
      // ${styles[`custom_text__color-${fontColor}`]}
      // ${className} `}
      className={`${styles[`custom_text__color-${fontColor}`]}
       ${className} `}
      {...rest}
    >
      {children}
    </Component>
  );
};
