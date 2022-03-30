import service from './../service'

export default {
  login: () => service.get('/login'),
  logout: () => service.get('/logout')
}
