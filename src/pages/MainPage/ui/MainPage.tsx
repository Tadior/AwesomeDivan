import classNames from 'classnames';
import { Title } from '@/shared/ui/Title/Title';
import cls from './Main.module.css';
import { CategoryBlock } from '@/widgets/CategoryBlock';
import { Outlet } from 'react-router-dom';
import { Container } from '@/shared/ui/Container/Container';

export const MainPage = () => {
  return (
    <main className={classNames(cls.Main)}>
      <Container>
        <Title
          className={classNames(cls.Title)}
          text={'популярные категории'}
        />
        <CategoryBlock />
      </Container>
    </main>
  );
};
