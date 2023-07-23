import { HEADER_CATEGORIES } from '@/shared/consts/HEADER_CATEGORIES';
import BedImg from '@/shared/assets/category/beds.jpg';
import WallsImg from '@/shared/assets/category/walls.jpg';
import ClosetsImg from '@/shared/assets/category/closets.jpg';
import SofaImg from '@/shared/assets/category/sofas.jpg';
import TablesImg from '@/shared/assets/category/tables.jpg';

export const CATEGORIES_INFO = [
  {
    title: 'диваны',
    url: HEADER_CATEGORIES.Диваны,
    img: SofaImg,
    linkInfo: [
      {
        name: 'Диваны-кровати',
        url: `${HEADER_CATEGORIES.Диваны}sofas-bed/`,
      },
      {
        name: 'Прямые диваны',
        url: `${HEADER_CATEGORIES.Диваны}sofas-direct/`,
      },
      {
        name: 'Угловые диваны',
        url: `${HEADER_CATEGORIES.Диваны}sofas-corner/`,
      },
      {
        name: 'Все диваны',
        url: HEADER_CATEGORIES.Диваны,
      },
    ],
  },
  {
    title: 'Стенки',
    img: WallsImg,
    url: HEADER_CATEGORIES.Стенки,
    linkInfo: [
      {
        name: 'Для гостиной',
        url: `${HEADER_CATEGORIES.Стенки}dlya-gostinoy/`,
      },
      {
        name: 'Модульные стенки',
        url: `${HEADER_CATEGORIES.Стенки}modulnye/`,
      },
      {
        name: 'Под телевизор',
        url: `${HEADER_CATEGORIES.Стенки}pod-TV`,
      },
      {
        name: 'Все стенки',
        url: HEADER_CATEGORIES.Стенки,
      },
    ],
  },
  {
    title: 'Шкафы',
    img: ClosetsImg,
    url: HEADER_CATEGORIES.Шкафы,
    linkInfo: [
      {
        name: 'Шкафы-купе',
        url: `${HEADER_CATEGORIES.Шкафы}kupe/`,
      },
      {
        name: 'Распашные шкафы',
        url: `${HEADER_CATEGORIES.Шкафы}raspashnye/`,
      },
      {
        name: 'Прямые шкафы',
        url: `${HEADER_CATEGORIES.Шкафы}direct`,
      },
      {
        name: 'Все шкафы',
        url: HEADER_CATEGORIES.Шкафы,
      },
    ],
  },
  {
    title: 'кровати',
    img: BedImg,
    url: HEADER_CATEGORIES.Кровати,
    linkInfo: [
      {
        name: 'Двуспальные кровати',
        url: `${HEADER_CATEGORIES.Кровати}double/`,
      },
      {
        name: 'Односпальные кровати',
        url: `${HEADER_CATEGORIES.Кровати}single/`,
      },
      {
        name: 'Все кровати',
        url: HEADER_CATEGORIES.Кровати,
      },
    ],
  },
  {
    title: 'столы',
    img: TablesImg,
    url: HEADER_CATEGORIES.Столы,
    linkInfo: [
      {
        name: 'Журнальные столы',
        url: `${HEADER_CATEGORIES.Столы}magazine/`,
      },
      {
        name: 'Обеденные столы',
        url: `${HEADER_CATEGORIES.Столы}obedennye/`,
      },
      {
        name: 'Столы-трансформеры',
        url: `${HEADER_CATEGORIES.Столы}transformery`,
      },
      {
        name: 'Все столы',
        url: HEADER_CATEGORIES.Столы,
      },
    ],
  },
];
