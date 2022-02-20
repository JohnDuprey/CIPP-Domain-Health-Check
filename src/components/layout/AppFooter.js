import React from 'react'
import { CImage, CFooter, CLink } from '@coreui/react'
import { Link } from 'react-router-dom'
import cyberdrainsquare from 'src/assets/images/logo-square.png'

const AppFooter = () => {
  return (
    <CFooter className="d-flex justify-content-between align-items-center">
      <div className="attribution">
        <p>
          <CImage src={cyberdrainsquare} height={25} alt="Logo" className="me-2" />
          Powered by
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
