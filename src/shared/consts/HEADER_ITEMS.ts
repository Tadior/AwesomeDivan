import percentImg from '../assets/icons/percent.png'
import heartImg from '../assets/icons/heart.png'
import cartImg from '../assets/icons/cart.png'

export const HEADER_ITEMS = {
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
