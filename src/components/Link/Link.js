import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import LinkBase from 'components/LinkBase'

import styles from './Link.module.scss'

export default function Link({ className, href, to, ...props }) {
  const Component = (!href && !to) ? 'button' : LinkBase

  return (
    <Component
      {...props}
      href={href}
      to={to}
      className={classNames('Link', styles.this, className)}
    />
  )
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
}