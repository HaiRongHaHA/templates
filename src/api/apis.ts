import service from './service'

export default {
  user: {
    login: () => service.get('/login'),
    logout: () => service.get('/logout')
  },
  test: {
    test1: (data: any) => service.post('/test1', data)
  }
}
