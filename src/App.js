import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { FullScreenLoading, ErrorBoundary } from 'src/components/utilities'
import 'src/scss/style.scss'
import routes from 'src/routes'
import { CSpinner } from '@coreui/react'
import { Helmet } from 'react-helmet'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<FullScreenLoading />}>
        <ErrorBoundary>
          <Helmet>
            <title>CIPP</title>
          </Helmet>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              {routes.map((route, idx) => {
                return (
                  route.component && (
                    <Route
                      key={`route-${idx}`}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      element={
                        <Suspense fallback={<CSpinner color="primary" />}>
                          <Helmet>
                            <title>CIPP - {route.name}</title>
                          </Helmet>
                          <route.component />
                        </Suspense>
                      }
                    />
                  )
                )
              })}
              <Route path="/" element={<Navigate to="/home" replace={true} />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
