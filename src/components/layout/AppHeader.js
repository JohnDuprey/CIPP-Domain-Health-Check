import React from 'react'
import { CContainer, CHeader, CHeaderBrand, CImage, CLink, CTooltip } from '@coreui/react'
import { ThemeSwitcher } from '../utilities'
import cyberdrainlogo from 'src/assets/images/CIPP.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const AppHeader = () => {
  return (
    <CHeader position="sticky">
      <CContainer fluid>
        <CHeaderBrand className="">
          <Link to="/">
            <CImage src={cyberdrainlogo} height={52} alt="Logo" />
          </Link>
        </CHeaderBrand>
        <div className="d-flex">
          <CTooltip content="Help" placement="bottom">
            <CLink
              target="_blank"
              className="me-3 my-auto"
              href="https://cipp.app/docs/user/usingcipp/tenantadministration/individualdomaincheck/"
            >
              <FontAwesomeIcon icon={faQuestionCircle} color="white" />
            </CLink>
          </CTooltip>
          <ThemeSwitcher />
        </div>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
