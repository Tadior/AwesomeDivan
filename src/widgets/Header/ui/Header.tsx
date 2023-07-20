import cls from './Header.module.css'
import { Navbar } from './Navbar/Navbar'
import { HeaderTop } from '@/widgets/Header/ui/HeaderTop/HeaderTop'
export const Header = () => {
  return (
    <header className={cls.Header}>
      <HeaderTop />
      <Navbar />
    </header>
  )
}
