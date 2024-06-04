import React from 'react'

import commonStyles from '../../styles/Common.module.css'
import footerStyles from '../../styles/Footer.module.css'

export const Footer = () => (
  <>
    <div className={commonStyles.fullWidthDivider} />
    <div className={commonStyles.appContainer}>
      <div className={footerStyles.footer}>
        <span>{new Date().getFullYear()}</span>
      </div>
    </div>
  </>
)
