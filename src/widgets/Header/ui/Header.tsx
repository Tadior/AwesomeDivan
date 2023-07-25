import cls from './Header.module.css';
import { Navbar } from './Navbar/Navbar';
import { HeaderTop } from '@/widgets/Header/ui/HeaderTop/HeaderTop';
import classNames from 'classnames';
import { Container } from '@/shared/ui/Container/Container';
export const Header = () => {
  return (
    <header className={cls.Header}>
      <Container>
        <HeaderTop />
        <Navbar />
      </Container>
    </header>
  );
};
