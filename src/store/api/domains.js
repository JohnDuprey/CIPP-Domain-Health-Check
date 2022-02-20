import { baseApi } from 'src/store/api/baseApi'

export const domainsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    listDomainHealth: builder.query({
      queryFn: async (_args, _baseQueryApi, _options, baseQuery) => {
        const startRequest = await baseQuery({
          path: '/api/ListDomainHealth',
          params: { ..._args },
        })
        if (startRequest.error) {
          return { error: startRequest.error }
        }

        const GUID = startRequest.data?.GUID

        return new Promise((resolve) => {
          let retries = 0
          const interval = setInterval(async () => {
            const { data, error } = await baseQuery({
              path: '/api/ListDomainHealth',
              params: { GUID },
            })
            if (error) {
              clearInterval(interval)
              resolve({ error })
            }
            if (data.Results) {
              clearInterval(interval)
              resolve({
                error: {
                  message: `Error: ${data.Results}`,
                  status: 503,
                  data: 'Request failed.',
                },
              })
            }
            if (!data['Waiting'] === true) {
              clearInterval(interval)
              resolve({ data })
            }
            if (retries >= 60) {
              clearInterval(interval)
              resolve({
                error: {
                  message: 'Failed to retrieve data in 2 minutes',
                  status: 503,
                  data: 'Request failed with status 503',
                },
              })
            }
            retries++
          }, 2000)
        })
      },
    }),
  }),
})

export const { useListDomainHealthQuery } = domainsApi
