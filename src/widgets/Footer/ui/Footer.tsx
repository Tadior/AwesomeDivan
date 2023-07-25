import classNames from 'classnames';
import cls from './Footer.module.css';
import { Container } from '@/shared/ui/Container/Container';

export const Footer = () => {
  return (
    <footer className={classNames(cls.Footer)}>
      <Container>
        <div className={classNames(cls.Wrapper)}>
          <div className={classNames(cls.Logo)}>
            <a className={cls.Link} href="#">
              <span className={cls.Span}>Divan</span>Awesome
            </a>
          </div>
          <div className={classNames(cls.Info)}>
            Вся информация и товары взяты с сайта{' '}
            <a
              className={classNames(cls.OriginalLink)}
              href="https://divanboss.ru/">
              Divan Boss
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
