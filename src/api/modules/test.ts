import service from './../service'

interface ITestParams {
  id: number
  offset: number
  limit: number
}

export default {
  test1: (params: ITestParams) => service.get('/test', { params, errorCustom: true })
}
