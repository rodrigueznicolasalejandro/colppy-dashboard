import { fetchMetrics, fetchKpis } from '../../services/api'

describe('API service', () => {
  const API_URL = 'http://localhost:4000'

  beforeEach(() => {
    vi.stubGlobal('import', { meta: { env: { VITE_API_URL: API_URL } } })
    global.fetch = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('fetchMetrics realiza la petición con el parámetro days', async () => {
    const mockResponse = { data: 'ok' }
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    })

    const result = await fetchMetrics(60)
    expect(fetch).toHaveBeenCalledWith(`${API_URL}/metrics?days=60`)
    expect(result).toEqual(mockResponse)
  })

  it('fetchMetrics lanza un error si la respuesta no es ok', async () => {
    fetch.mockResolvedValueOnce({ ok: false })
    await expect(fetchMetrics()).rejects.toThrow('API error')
  })

  it('fetchKpis obtiene los KPIs correctamente', async () => {
    const mockResponse = { kpis: [1, 2, 3] }

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    })

    const result = await fetchKpis()
    expect(fetch).toHaveBeenCalledWith(`${API_URL}/kpis`)
    expect(result).toEqual(mockResponse)
  })

  it('fetchKpis lanza un error si la respuesta no es ok', async () => {
    fetch.mockResolvedValueOnce({ ok: false })
    await expect(fetchKpis()).rejects.toThrow('API error')
  })
})
