import classNames from 'classnames';
import { Title } from '@/shared/ui/Title/Title';
import cls from './Main.module.css';
import { CategoryBlock } from '@/widgets/CategoryBlock';

export const MainPage = () => {
  return (
    <main className={classNames(cls.Main)}>
      <div className={classNames('container')}>
        <Title text={'популярные категории'} />
        <CategoryBlock />
      </div>
    </main>
  );
};
