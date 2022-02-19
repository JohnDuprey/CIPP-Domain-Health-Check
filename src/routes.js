import React from 'react'

/* eslint-disable prettier/prettier */
const IndividualDomain = React.lazy(() => import('src/views/IndividualDomain'))
const License = React.lazy(() => import('src/views/License'))

const routes = [
  { path: '/', name: 'Domain Health Check', component: IndividualDomain },
  {
    name: 'License',
    path: '/license',
    component: License,
  },
]

export default routes
