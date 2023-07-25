import classNames from 'classnames';
import cls from './ErrorPage.module.css';
import { Container } from '@/shared/ui/Container/Container';

export const ErrorPage = () => {
  return (
    <section className={classNames(cls.ErrorPage)}>
      <Container>
        <div>Not found page 404</div>
      </Container>
    </section>
  );
};
