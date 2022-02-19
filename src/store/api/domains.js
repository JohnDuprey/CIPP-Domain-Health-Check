import { baseApi } from 'src/store/api/baseApi'

export const domainsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    execDnsHelper: builder.query({
      query: ({ ...rest }) => ({
        path: '/api/ExecDnsHelper',
        params: {
          ...rest,
        },
      }),
    }),
  }),
})

export const { useExecDnsHelperQuery } = domainsApi
