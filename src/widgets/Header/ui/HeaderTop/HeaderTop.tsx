import cls from './HeaderTop.module.css'
import { Input } from '@/shared/ui/Input/Input'
import { HeaderItems } from '@/widgets/Header/ui/HeaderItems/HeaderItems'

export const HeaderTop = () => {
  return (
    <div className={cls.HeaderTop}>
      <div className={cls.HeaderLogo}>
        <a className={cls.HeaderLink} href="#">
          <span className={cls.HeaderSpan}>Divan</span>Awesome
        </a>
      </div>
      <div className={cls.HeaderInput}>
        <Input placeholder={'Что вы ищите ?'} />
      </div>
      <HeaderItems />
    </div>
  )
}
