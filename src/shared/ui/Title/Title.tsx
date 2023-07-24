import classNames from 'classnames';
import cls from './Title.module.css';

type colorMode = 'dark' | 'light';
interface TitleProps {
  className?: string;
  colorMode?: colorMode;
  text: string;
}

export const Title = (props: TitleProps) => {
  const { colorMode = 'light', text, className } = props;
  return (
    <h2
      className={classNames(cls.Title, {
        [`${className}`]: className,
        [cls.darkTitle]: colorMode === 'dark',
      })}>
      {text}
    </h2>
  );
};
