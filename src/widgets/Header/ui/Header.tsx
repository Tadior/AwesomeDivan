import cls from './Header.module.css'
import { Navbar } from './Navbar/Navbar'
import percentImg from '/percent.png'
import heartImg from '/heart.png'
import cartImg from '/cart.png'
import { Input } from '@/shared/Input/Input'
export const Header = () => {
  const info = {
    акции: {
      img: percentImg,
      link: '/promo/',
    },
    избранное: {
      img: heartImg,
      link: '/favorites/',
    },
    корзина: {
      img: cartImg,
      link: '/basket/',
    },
  }
  const infoKeys = Object.keys(info) as Array<keyof typeof info>
  return (
    <header className={cls.Header}>
      <div className={cls.Header__main}>
        <div className={cls.Header__logo}>
          <a className={cls.Header__link} href="#">
            <span className={cls.Header__span}>Divan</span>Awesome
          </a>
        </div>
        <Input />
        <div className={cls.Header__items}>
          {infoKeys.map((key) => {
            return (
              <a href={info[key].link} className={cls.Header__item}>
                <img
                  src={info[key].img}
                  style={{ width: '18px' }}
                  alt="percent"
                />
                <div className="">{key}</div>
              </a>
            )
          })}
        </div>
      </div>
      <Navbar />
    </header>
  )
}
