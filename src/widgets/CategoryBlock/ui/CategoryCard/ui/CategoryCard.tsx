import classNames from 'classnames';
import cls from './CategoryCard.module.css';

type CategoryMode = 'large' | 'small';
interface CategoryCardProps {
  title: string;
  mode?: CategoryMode;
  img: string;
  url: string;
  linkInfo: {
    name: string;
    url: string;
  }[];
}
export const CategoryCard = (props: CategoryCardProps) => {
  const { title, mode = 'small', img, linkInfo, url } = props;
  const mods = {
    [cls.Large]: Boolean(mode === 'large'),
    [cls.Small]: Boolean(mode === 'small'),
  };
  return (
    <div className={classNames(cls.Card, mods)}>
      <a href={url} className={classNames(cls.CardTop)}>
        <div>
          <img className={classNames(cls.CardImage)} src={img} alt={title} />
        </div>
        <div className={classNames(cls.Title)}>{title}</div>
      </a>
      <ul className={classNames(cls.Links)}>
        {linkInfo.map((info) => {
          return (
            <li className={classNames(cls.LinkItem)} key={info.name}>
              <a className={classNames(cls.Link)} href={info.url}>
                {info.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
