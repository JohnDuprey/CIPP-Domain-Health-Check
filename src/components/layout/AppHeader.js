import React from 'react'
import { CContainer, CHeader, CHeaderBrand, CImage } from '@coreui/react'
import { ThemeSwitcher } from '../utilities'
import cyberdrainlogo from 'src/assets/images/CIPP.png'

const AppHeader = () => {
  return (
    <CHeader position="sticky">
      <CContainer fluid>
        <CHeaderBrand className="" to="/">
          <CImage src={cyberdrainlogo} height={52} alt="Logo" />
        </CHeaderBrand>
        <ThemeSwitcher />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
