import cls from './Navbar.module.css'

const categories = {
  Диваны: '/divany/',
  Кровати: '/krovati/',
  Матрасы: '/matrasy/',
  Стенки: '/stenki/',
  Шкафы: '/shkafy/',
  Тумбы: '/tumby/',
  Камоды: '/camody/',
  Столы: '/stoly/',
  Стулья: '/styly/',
  Кресла: '/kresla/',
  Пуфы: '/poofy/',
}

export const Navbar = () => {
  const categoryKeys = Object.keys(categories) as Array<keyof typeof categories>
  return (
    <nav className={cls.Navbar}>
      <ul className={cls.Navbar__items}>
        {categoryKeys.map((category) => {
          return (
            <li className={cls.Navbar__item}>
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
