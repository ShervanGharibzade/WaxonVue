import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import PortfolioView from '../views/PortfolioView'
import TestimonailView from '../views/TestimonailView'
import NewsView from '../views/NewsView'
import ContactView from '../views/ContactView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/testimonail',
    name: 'Testimonail',
    component: TestimonailView
  },
  {
    path: '/news',
    name: 'News',
    component: NewsView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  }
]

const router = new VueRouter({
  routes
})

export default router
