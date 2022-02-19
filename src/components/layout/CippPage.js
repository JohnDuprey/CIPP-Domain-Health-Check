import React from 'react'
import PropTypes from 'prop-types'
import { CCard, CCardBody } from '@coreui/react'

export function CippPage({ title, children, titleButton = null, className = null }) {
  return (
    <CCard className={`page-card ${className ?? ''}`}>
      <CCardBody>{children}</CCardBody>
    </CCard>
  )
}

CippPage.propTypes = {
  className: PropTypes.string,
  tenantSelector: PropTypes.bool,
  showAllTenantSelector: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  titleButton: PropTypes.node,
}
