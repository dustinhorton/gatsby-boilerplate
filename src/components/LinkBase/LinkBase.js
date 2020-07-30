import classNames from 'classnames'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {
  isEmail,
  isMobilePhone,
} from 'validator'

import formatPhone from 'libs/format-phone'

const emailPrefix = 'mailto:'

export default function LinkBase({ children, className, to, ...props }) {
  const componentClassNames = classNames('LinkBase', className)
  let toIsEmail
  let toIsPhone
  let body = children || to.replace(/^http(s?):\/\//i, '')

  if (to) {
    toIsEmail = isEmail(to)
    toIsPhone = isMobilePhone(to)
  }

  if (!to || toIsEmail || toIsPhone || (to && to.includes('http'))) {
    let href = to || undefined

    if (toIsEmail) {
      body = children || to.replace(emailPrefix, '')
      href = `${emailPrefix}${to}`
    }

    if (toIsPhone) {
      body = children || formatPhone.display(to)
      href = formatPhone.uri(to)
    }

    return (
      <a {...props} href={href} target={to ? '_blank' : undefined} className={componentClassNames}>
        {body}
      </a>
    )
  }

  return (
    <GatsbyLink {...props} to={to} className={componentClassNames}>
      {body}
    </GatsbyLink>
  )
}

LinkBase.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
}