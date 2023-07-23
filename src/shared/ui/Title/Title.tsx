import classNames from 'classnames';
import cls from './Title.module.css';

type colorMode = 'dark' | 'light';
interface TitleProps {
  colorMode?: colorMode;
  text: string;
}

export const Title = (props: TitleProps) => {
  const { colorMode = 'light', text } = props;
  return (
    <h2
      className={classNames(cls.Title, {
        [cls.darkTitle]: colorMode === 'dark',
      })}>
      {text}
    </h2>
  );
};
