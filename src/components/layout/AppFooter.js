import React from 'react'
import { CFooter, CLink } from '@coreui/react'
import { Link } from 'react-router-dom'

const AppFooter = () => {
  return (
    <CFooter className="d-flex justify-content-between align-items-center">
      <div className="attribution">
        <p>
          This site is built with the
          <CLink className="mx-1" href="https://cipp.app" target="_blank">
            CyberDrain Improved Partner Portal
          </CLink>
        </p>
      </div>
      <nav className="footer-nav">
        <CLink
          className="me-2"
          target="_blank"
          href="https://github.com/johnduprey/CIPP-Domain-Health-Check"
        >
          GitHub
        </CLink>
        <Link to="/license">License</Link>
      </nav>
    </CFooter>
  )
}

export default React.memo(AppFooter)
