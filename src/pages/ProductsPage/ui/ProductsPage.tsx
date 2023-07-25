import classNames from 'classnames';
import { Title } from '@/shared/ui/Title/Title';
import cls from './ProductsPage.module.css';
import { Container } from '@/shared/ui/Container/Container';

export const ProductsPage = () => {
  return (
    <section className={classNames(cls.ProcuctsPage)}>
      <Container>
        <Title text={'Диваны'} colorMode={'dark'} />
      </Container>
    </section>
  );
};
