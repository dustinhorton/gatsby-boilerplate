import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Divider.module.scss'

export default function Divider({ className, size }) {
  return (
    <hr
      className={classNames('Divider', styles.this, size && styles[`this---${size}`], className)}
    />
  )
}

Divider.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['medium']),
}

Divider.defaultProps = {
  size: 'medium',
}