import cls from './Navbar.module.css'
import { HEADER_CATEGORIES } from '@/shared/consts/HEADER_CATEGORIES'

export const Navbar = () => {
  const categories = HEADER_CATEGORIES
  const categoryKeys = Object.keys(categories) as Array<keyof typeof categories>
  return (
    <nav className={cls.Navbar}>
      <ul className={cls.Navbar__items}>
        {categoryKeys.map((category) => {
          return (
            <li className={cls.Navbar__item} key={category}>
              <a className={cls.Navbar__link} href={categories[category]}>
                {category}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
