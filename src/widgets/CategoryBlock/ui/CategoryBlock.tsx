import { CATEGORIES_INFO } from '@/shared/consts/CATEGORIES_INFO';
import classNames from 'classnames';
import cls from './CategoryBlock.module.css';
import { CategoryCard } from './CategoryCard';

export const CategoryBlock = () => {
  return (
    <div className={classNames(cls.Categories)}>
      {CATEGORIES_INFO.map((info) => {
        return (
          <CategoryCard
            title={info.title}
            img={info.img}
            url={info.url}
            linkInfo={info.linkInfo}
          />
        );
      })}
    </div>
  );
};
