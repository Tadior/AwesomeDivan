import classNames from 'classnames';
import cls from './ProductPage.module.css';
import { Container } from '@/shared/ui/Container/Container';

export const ProductPage = () => {
  return (
    <section className={classNames(cls.ProductPage)}>
      <Container>ProductPage</Container>
    </section>
  );
};
