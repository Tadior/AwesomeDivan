import { HEADER_ITEMS } from '@/shared/consts/HEADER_ITEMS'
import cls from './HeaderItems.module.css'
export const HeaderItems = () => {
  const infoKeys = Object.keys(HEADER_ITEMS) as Array<keyof typeof HEADER_ITEMS>

  return (
    <div className={cls.Header__items}>
      {infoKeys.map((key) => {
        return (
          <a
            href={HEADER_ITEMS[key].link}
            className={cls.Header__item}
            key={key}>
            <img
              src={HEADER_ITEMS[key].img}
              style={{ width: '18px' }}
              alt={key}
            />
            <div className="">{key}</div>
          </a>
        )
      })}
    </div>
  )
}
