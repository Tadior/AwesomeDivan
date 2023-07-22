import cls from './Header.module.css'
import { Navbar } from './Navbar/Navbar'
import { HeaderTop } from '@/widgets/Header/ui/HeaderTop/HeaderTop'
import classNames from 'classnames'
export const Header = () => {
  return (
    <header className={cls.Header}>
      <div className={classNames('container')}>
        <HeaderTop />
        <Navbar />
      </div>
    </header>
  )
}
