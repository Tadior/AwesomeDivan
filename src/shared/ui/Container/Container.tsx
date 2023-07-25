import classNames from 'classnames';
import cls from './Container.module.css';
import { PropsWithChildren, ReactNode } from 'react';
interface ContainerProps {
  children: ReactNode;
}
export const Container = (props: ContainerProps) => {
  return <div className={classNames(cls.Container)}>{props.children}</div>;
};
