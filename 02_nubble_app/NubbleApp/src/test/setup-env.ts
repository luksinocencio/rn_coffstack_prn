import { resetInMemoryResponse, server } from '@test'

beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers()
  resetInMemoryResponse()
  // jest.resetAllMocks()
})

afterAll(() => server.close())
