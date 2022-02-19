import React, { useEffect, Suspense } from 'react'
import { AppFooter, AppHeader } from 'src/components/layout'
import { FullScreenLoading, Toasts } from 'src/components/utilities'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { CContainer } from '@coreui/react'

import { useMediaPredicate } from 'react-media-hook'

const DefaultLayout = () => {
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'impact' : 'cyberdrain'
  const themePreference = useSelector((state) => state.app.currentTheme)
  let theme
  if (themePreference === 'default') {
    theme = preferredTheme
  } else {
    theme = themePreference
  }
  useEffect(() => {
    document.body.classList = []
    document.body.classList.add(`theme-${theme}`)
    document.body.dataset.theme = theme
  })

  return (
    <div>
      <Toasts />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1 px-xl-3">
          <CContainer fluid className="mt-2">
            <Suspense fallback={<FullScreenLoading />}>
              <Outlet />
            </Suspense>
          </CContainer>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
